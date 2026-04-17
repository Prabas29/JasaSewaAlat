# ⚡ Quick Start - Real-Time Chat

## 3-Step Setup

### 1️⃣ Install Dependencies (30 seconds)
```powershell
cd "d:\Apps Jasa Sewa - Copy"
npm install
```

### 2️⃣ Start Chat Server
```powershell
npm start
```
✅ You should see: `🚀 Chat server running on http://localhost:3000`

### 3️⃣ Test Chat Between Two Users

**Browser Tab 1 - TENANT:**
1. Open `index.html`
2. Click "Tenant"
3. Login: `andi@mail.com` / `Tenant123!`
4. Click "Messages"
5. Click any conversation

**Browser Tab 2 - BORROWER (use Incognito Mode):**
1. Open `index.html` in incognito/private window
2. Click "Peminjam"
3. Login: `budi@mail.com` / `Borrower123!`
4. Click "Messages"
5. Click the **same conversation**

**Send a message from Tab 1 → See it instantly in Tab 2! ✅**

---

## What You Get

✅ Real-time messaging (no refresh needed)
✅ Multiple simultaneous chats
✅ Chat history preserved on server
✅ Fallback to local storage if disconnected
✅ Production-ready Socket.io architecture

---

## Stop Server
Press `Ctrl + C` in the terminal

---

## Need Help?

- Check `CHAT_SETUP.md` for detailed documentation
- Look at server logs for errors
- Open browser console (F12) for client-side issues
- Verify port 3000 is available
