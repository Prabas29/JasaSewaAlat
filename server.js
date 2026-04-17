const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Store for messages (in-memory, replaces localStorage)
const chatRooms = {};
const userSessions = {};

// Socket.io connection
io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  // User joins with their info
  socket.on('userJoin', (userData) => {
    userSessions[socket.id] = {
      socketId: socket.id,
      userId: userData.userId,
      name: userData.name,
      role: userData.role,
      email: userData.email
    };
    console.log('User logged in:', userData.name, userData.role);
    io.emit('userOnline', userSessions[socket.id]);
  });

  // User creates/joins a chat room
  socket.on('joinChat', (chatData) => {
    const { chatId, user1Id, user2Id } = chatData;
    const roomName = `chat_${Math.min(user1Id, user2Id)}_${Math.max(user1Id, user2Id)}`;
    
    socket.join(roomName);
    
    // Initialize room if not exists
    if (!chatRooms[roomName]) {
      chatRooms[roomName] = {
        chatId,
        user1Id,
        user2Id,
        messages: [],
        createdAt: new Date()
      };
    }
    
    console.log('User joined chat room:', roomName);
    
    // Send existing messages to the user
    socket.emit('loadMessages', chatRooms[roomName].messages);
  });

  // Handle incoming message
  socket.on('sendMessage', (messageData) => {
    const { chatId, user1Id, user2Id, senderId, senderName, text, timestamp } = messageData;
    const roomName = `chat_${Math.min(user1Id, user2Id)}_${Math.max(user1Id, user2Id)}`;
    
    const message = {
      sender: senderId,
      senderName: senderName,
      text: text,
      time: timestamp,
      createdAt: new Date()
    };
    
    // Store message
    if (chatRooms[roomName]) {
      chatRooms[roomName].messages.push(message);
      chatRooms[roomName].lastMsg = text;
      chatRooms[roomName].lastTime = timestamp;
    }
    
    // Broadcast to room
    io.to(roomName).emit('receiveMessage', message);
    console.log(`Message in ${roomName}:`, text);
  });

  // Get all chats for a user
  socket.on('getChats', (userId) => {
    const userChats = [];
    for (const [roomName, room] of Object.entries(chatRooms)) {
      if (room.user1Id === userId || room.user2Id === userId) {
        userChats.push({
          ...room,
          messages: room.messages // Include all messages
        });
      }
    }
    socket.emit('chatsList', userChats);
  });

  // Create new chat
  socket.on('createChat', (chatData) => {
    const { user1Id, user2Id, user1Name, user2Name, user1Role, user2Role } = chatData;
    const roomName = `chat_${Math.min(user1Id, user2Id)}_${Math.max(user1Id, user2Id)}`;
    
    if (!chatRooms[roomName]) {
      chatRooms[roomName] = {
        chatId: `CH${Object.keys(chatRooms).length + 1}`,
        user1Id,
        user2Id,
        user1Name,
        user2Name,
        user1Role,
        user2Role,
        messages: [],
        lastMsg: 'Chat dimulai',
        lastTime: new Date().toISOString(),
        createdAt: new Date()
      };
      console.log('New chat created:', roomName);
    }
    
    socket.emit('chatCreated', chatRooms[roomName]);
  });

  // Get online users
  socket.on('getOnlineUsers', () => {
    socket.emit('onlineUsers', Object.values(userSessions));
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    const userData = userSessions[socket.id];
    if (userData) {
      console.log('User disconnected:', userData.name);
      delete userSessions[socket.id];
      io.emit('userOffline', userData);
    }
  });
});

// REST API endpoints
app.get('/api/chats/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const userChats = [];
  
  for (const [roomName, room] of Object.entries(chatRooms)) {
    if (room.user1Id === userId || room.user2Id === userId) {
      userChats.push(room);
    }
  }
  
  res.json(userChats);
});

app.get('/api/messages/:chatId', (req, res) => {
  const chatId = req.params.chatId;
  
  for (const room of Object.values(chatRooms)) {
    if (room.chatId === chatId) {
      res.json(room.messages);
      return;
    }
  }
  
  res.json([]);
});

app.post('/api/messages', (req, res) => {
  const { chatId, senderId, senderName, text } = req.body;
  
  for (const [roomName, room] of Object.entries(chatRooms)) {
    if (room.chatId === chatId) {
      const message = {
        sender: senderId,
        senderName: senderName,
        text: text,
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        createdAt: new Date()
      };
      
      room.messages.push(message);
      room.lastMsg = text;
      room.lastTime = new Date().toISOString();
      
      // Broadcast via Socket.io
      const user1Id = room.user1Id;
      const user2Id = room.user2Id;
      const roomName = `chat_${Math.min(user1Id, user2Id)}_${Math.max(user1Id, user2Id)}`;
      io.to(roomName).emit('receiveMessage', message);
      
      res.json({ success: true, message });
      return;
    }
  }
  
  res.status(404).json({ error: 'Chat not found' });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Chat server running on http://localhost:${PORT}`);
  console.log(`📡 Socket.io ready for real-time messaging`);
});
