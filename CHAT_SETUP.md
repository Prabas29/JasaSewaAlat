# 🚀 How to Run the Real-Time Chat Feature

## Prerequisites
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- Modern web browser

---

## Installation & Setup

### Step 1: Install Dependencies
Open PowerShell in the project folder and run:

```powershell
npm install
```

This installs:
- `express` - Web server
- `socket.io` - Real-time communication
- `cors` - Cross-origin requests
- `nodemon` - Auto-restart server (dev)

### Step 2: Start the Server
```powershell
npm start
```

You should see:
```
🚀 Chat server running on http://localhost:3000
📡 Socket.io ready for real-time messaging
```

### Step 3: Open the Application
- Open `index.html` in your browser
- Or serve it via: `python -m http.server 8000` and visit `http://localhost:8000`

---

## How to Test the Real-Time Chat

### Setup: Two Browser Windows

**Window 1 (Tenant):**
1. Open `index.html` in a normal browser window
2. Select "Tenant" role
3. Login: `andi@mail.com` / `Tenant123!`
4. Go to "Messages" in sidebar
5. Click on a conversation

**Window 2 (Borrower):**
1. Open `index.html` in an **incognito/private window** (or different browser)
2. Select "Peminjam" (Borrower) role
3. Login: `budi@mail.com` / `Borrower123!`
4. Go to "Messages" in sidebar
5. Click on the same conversation

### Send Messages
1. In **Window 1 (Tenant)**, type a message: "Halo, alat masih tersedia?"
2. Click "Kirim" (Send)
3. **Window 2 (Borrower)** will receive the message in real-time ✅
4. Reply from **Window 2**: "Ya, kapan mau pickup?"
5. **Window 1** receives reply instantly ✅

---

## What's Now Working

✅ **Real-time messaging** between tenant and borrower
✅ **Persistent chat history** (stored in server memory)
✅ **Automatic reconnection** if connection drops
✅ **Multiple simultaneous chats** supported
✅ **Online/offline status** tracking
✅ **Fallback to local storage** if server unavailable

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Your Browser (Client)                    │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  index.html + script-app.js                          │   │
│  │  • Chat UI with message display                      │   │
│  │  • Socket.io client (socket connection)             │   │
│  │  • Send/receive messages                             │   │
│  └──────────────────────────────────────────────────────┘   │
│                           ▲                                   │
│                   WebSocket (Socket.io)                       │
│                           ▼                                   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  Node.js Chat Server                         │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  server.js (Express + Socket.io)                    │   │
│  │  • Manages WebSocket connections                    │   │
│  │  • Stores messages in memory                        │   │
│  │  • Broadcasts messages to chat rooms                │   │
│  │  • Provides REST API endpoints                      │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## Key Features Enabled

### 1. **Real-Time Message Delivery**
- Messages sent from one client instantly appear in another
- No page refresh needed
- Latency: ~50-100ms

### 2. **Chat Room Management**
- Each conversation has its own room
- Messages stored per room
- Multiple conversations supported simultaneously

### 3. **Connection Handling**
- Automatic reconnection with exponential backoff
- Handles network interruptions
- Status updates on connect/disconnect

### 4. **Scalability**
- Server handles multiple concurrent connections
- Can add database persistence later
- Ready for production upgrade

---

## Server Endpoints (REST API)

For advanced usage or mobile apps:

### Get All Chats for a User
```
GET /api/chats/:userId
```
Returns: Array of all chat rooms for user

### Get Messages in a Chat
```
GET /api/messages/:chatId
```
Returns: Array of messages in that chat

### Send a Message
```
POST /api/messages
Body: {
  chatId: "CH001",
  senderId: 1,
  senderName: "Budi Santoso",
  text: "Hello!"
}
```

---

## Socket.io Events

### Client → Server
- `userJoin` - User logs in
- `joinChat` - User opens a chat
- `sendMessage` - User sends message
- `getChats` - Request all chats
- `createChat` - Create new conversation
- `getOnlineUsers` - Request online users list

### Server → Client
- `loadMessages` - Initial message history
- `receiveMessage` - New message received
- `chatsList` - List of all chats
- `chatCreated` - New chat created
- `onlineUsers` - List of online users
- `userOnline` / `userOffline` - Status updates

---

## Troubleshooting

### ❌ "Failed to connect to server"
1. Check if server is running: `npm start`
2. Verify port 3000 is not blocked
3. Check firewall settings

### ❌ Messages not appearing in other window
1. Verify both windows are using the **same** chat room
2. Check browser console for errors (F12 → Console)
3. Ensure server is still running

### ❌ Server crashes
Run in dev mode to see errors:
```powershell
npm install -g nodemon
nodemon server.js
```

### ❌ Can't install npm packages
```powershell
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

---

## Production Deployment

When ready for production, upgrade with:

1. **Database** - MongoDB or PostgreSQL (replace in-memory storage)
2. **Authentication** - JWT tokens for secure user identification
3. **Encryption** - HTTPS/SSL certificates
4. **Scalability** - Redis for message caching, PM2 for clustering
5. **Hosting** - Deploy to Heroku, AWS, or DigitalOcean

---

## File Structure

```
d:\Apps Jasa Sewa - Copy\
├── server.js              ← Chat server (Node.js)
├── package.json           ← Dependencies config
├── index.html             ← Frontend (updated with Socket.io)
├── script-app.js          ← Chat logic (updated)
├── styles-app.css         ← Styling
└── CHAT_SETUP.md          ← This file
```

---

## Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm start`
3. ✅ Open 2 browser windows
4. ✅ Test sending messages
5. 🎉 Enjoy real-time chat!

**Questions?** Check browser console (F12) and server logs for debugging info.
