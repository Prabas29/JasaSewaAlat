const store = {
  users: [
    { id: 1, name: 'Budi Santoso', email: 'budi@mail.com', role: 'borrower', status: 'active', joined: '2024-03-12', rating: 4.8, rentals: 24, verified: true, isAdmin: false },
    { id: 2, name: 'Andi Wijaya', email: 'andi@mail.com', role: 'tenant', status: 'active', joined: '2023-11-05', rating: 4.9, items: 8, verified: true, isAdmin: false },
    { id: 3, name: 'Sari Dewi', email: 'sari@mail.com', role: 'borrower', status: 'active', joined: '2024-05-20', rating: 4.6, rentals: 7, verified: true, isAdmin: false },
    { id: 4, name: 'Rizky Pratama', email: 'rizky@mail.com', role: 'tenant', status: 'suspended', joined: '2024-01-10', rating: 3.9, items: 3, verified: false, isAdmin: false },
    { id: 5, name: 'Lina Marlina', email: 'lina@mail.com', role: 'borrower', status: 'active', joined: '2024-06-01', rating: 5.0, rentals: 2, verified: false, isAdmin: false }
  ],
  items: [
    { id: 1, name: 'Drone DJI Mini 3 Pro', category: 'Elektronik', price: 150000, owner: 'Andi Wijaya', ownerId: 2, status: 'available', rating: 4.9, reviews: 128, emoji: 'bi bi-drone', color: '#dbeafe', desc: 'Drone ringan dengan kamera 4K HDR, obstacle sensing 3 arah, baterai 34 menit.', specs: ['4K HDR', '34 mnt', '249g', '10km'] },
    { id: 2, name: 'Tenda Dome 4 Person', category: 'Outdoor', price: 80000, owner: 'Andi Wijaya', ownerId: 2, status: 'rented', rating: 4.7, reviews: 95, emoji: 'bi bi-house-door', color: '#dcfce7', desc: 'Tenda kapasitas 4 orang, waterproof, mudah dipasang dalam 10 menit.', specs: ['4 Orang', 'Waterproof', '2.3kg', '10 mnt'] },
    { id: 3, name: 'Kamera Sony A7 IV', category: 'Elektronik', price: 200000, owner: 'Andi Wijaya', ownerId: 2, status: 'available', rating: 4.8, reviews: 210, emoji: 'bi bi-camera', color: '#fef9c3', desc: 'Full frame mirrorless, 33MP, video 4K 60fps, cocok untuk fotografer profesional.', specs: ['33MP', '4K 60fps', 'FF', 'Stabilizer'] },
    { id: 4, name: 'Sepeda MTB Trek', category: 'Olahraga', price: 50000, owner: 'Rizky Pratama', ownerId: 4, status: 'available', rating: 4.6, reviews: 67, emoji: 'bi bi-bicycle', color: '#ede9fe', desc: 'Mountain bike 29 inch, 21 speed, suspensi depan, cocok untuk medan berat.', specs: ['29 inch', '21 speed', 'Hardtail', 'Hydraulic'] },
    { id: 5, name: 'Proyektor Epson EB', category: 'Elektronik', price: 120000, owner: 'Andi Wijaya', ownerId: 2, status: 'available', rating: 4.5, reviews: 43, emoji: 'bi bi-projector', color: '#fce7f3', desc: 'Full HD 1080p, 3600 lumens, koneksi HDMI & WiFi, cocok untuk presentasi dan nonton.', specs: ['Full HD', '3600 Lumen', 'WiFi', 'HDMI'] },
    { id: 6, name: 'Generator Honda 2KVA', category: 'Industri', price: 180000, owner: 'Rizky Pratama', ownerId: 4, status: 'available', rating: 4.3, reviews: 29, emoji: 'bi bi-lightning-charge', color: '#fef3c7', desc: 'Generator portable 2KVA, ekonomis bahan bakar, senyap, mudah dibawa.', specs: ['2KVA', 'Senyap', 'Portable', '4L/hari'] }
  ],
  bookings: [
    { id: 'BK001', itemId: 1, item: 'Drone DJI Mini 3 Pro', emoji: 'bi bi-drone', borrower: 'Budi Santoso', borrowerId: 1, tenant: 'Andi Wijaya', tenantId: 2, start: '2026-04-10', end: '2026-04-17', days: 7, total: 1127500, status: 'active', payment: 'GoPay', created: '2026-04-08' },
    { id: 'BK002', itemId: 3, item: 'Kamera Sony A7 IV', emoji: 'bi bi-camera', borrower: 'Sari Dewi', borrowerId: 3, tenant: 'Andi Wijaya', tenantId: 2, start: '2026-04-03', end: '2026-04-05', days: 3, total: 600000, status: 'completed', payment: 'Transfer Bank', created: '2026-04-01' },
    { id: 'BK003', itemId: 2, item: 'Tenda Dome 4 Person', emoji: 'bi bi-house-door', borrower: 'Budi Santoso', borrowerId: 1, tenant: 'Andi Wijaya', tenantId: 2, start: '2026-03-15', end: '2026-03-18', days: 3, total: 240000, status: 'completed', payment: 'GoPay', created: '2026-03-13' },
    { id: 'BK004', itemId: 5, item: 'Proyektor Epson EB', emoji: 'bi bi-projector', borrower: 'Lina Marlina', borrowerId: 5, tenant: 'Andi Wijaya', tenantId: 2, start: '2026-04-20', end: '2026-04-22', days: 2, total: 240000, status: 'pending', payment: '-', created: '2026-04-09' },
    { id: 'BK005', itemId: 4, item: 'Sepeda MTB Trek', emoji: 'bi bi-bicycle', borrower: 'Budi Santoso', borrowerId: 1, tenant: 'Rizky Pratama', tenantId: 4, start: '2026-03-03', end: '2026-03-05', days: 2, total: 100000, status: 'completed', payment: 'Kartu Kredit', created: '2026-03-01' },
    { id: 'BK006', itemId: 6, item: 'Generator Honda 2KVA', emoji: 'bi bi-lightning-charge', borrower: 'Sari Dewi', borrowerId: 3, tenant: 'Rizky Pratama', tenantId: 4, start: '2026-04-25', end: '2026-04-28', days: 3, total: 540000, status: 'pending', payment: '-', created: '2026-04-10' }
  ],
  reviews: [
    { id: 1, itemId: 1, item: 'Drone DJI Mini', borrower: 'Budi Santoso', rating: 5, comment: 'Baterai awet, kamera jernih. Sangat puas!', date: '2026-04-08' },
    { id: 2, itemId: 3, item: 'Kamera Sony A7', borrower: 'Sari Dewi', rating: 5, comment: 'Kualitas foto luar biasa, kondisi mulus.', date: '2026-04-06' },
    { id: 3, itemId: 4, item: 'Sepeda MTB Trek', borrower: 'Budi Santoso', rating: 4, comment: 'Oke tapi ban agak kurang angin, overall bagus.', date: '2026-03-06' }
  ],
  kycCases: [
    { id: 'KYC001', name: 'Lina Marlina', role: 'borrower', submitted: '2026-04-06', status: 'pending', note: 'Selfie blur, minta unggah ulang.' },
    { id: 'KYC002', name: 'Rizky Pratama', role: 'tenant', submitted: '2026-04-04', status: 'review', note: 'Perlu cek legalitas usaha.' },
    { id: 'KYC003', name: 'Andi Wijaya', role: 'tenant', submitted: '2026-03-20', status: 'approved', note: 'Valid.' }
  ],
  payouts: [
    { id: 'PO001', tenant: 'Andi Wijaya', amount: 1850000, bank: 'BCA ••••2231', status: 'waiting', requested: '2026-04-08' },
    { id: 'PO002', tenant: 'Rizky Pratama', amount: 540000, bank: 'Mandiri ••••8201', status: 'review', requested: '2026-04-09' },
    { id: 'PO003', tenant: 'Andi Wijaya', amount: 960000, bank: 'BCA ••••2231', status: 'paid', requested: '2026-04-01' }
  ],
  supportTickets: [
    { id: 'TIC001', from: 'Budi Santoso', subject: 'Refund terlambat', priority: 'high', status: 'open', updated: '2026-04-09' },
    { id: 'TIC002', from: 'Andi Wijaya', subject: 'Verifikasi rekening payout', priority: 'medium', status: 'in_progress', updated: '2026-04-08' },
    { id: 'TIC003', from: 'Sari Dewi', subject: 'Aplikasi mobile error checkout', priority: 'low', status: 'closed', updated: '2026-04-02' }
  ],
  reports: [
    { month: 'Jan', gmv: 4200000, disputes: 4, completion: 91 },
    { month: 'Feb', gmv: 5400000, disputes: 2, completion: 94 },
    { month: 'Mar', gmv: 6500000, disputes: 3, completion: 95 },
    { month: 'Apr', gmv: 7200000, disputes: 2, completion: 96 }
  ],
  wallet: {
    borrower: [
      { id: 'TXN001', label: 'Top Up VA BCA', amount: 1000000, type: 'credit', date: '2026-04-05' },
      { id: 'TXN002', label: 'Pembayaran BK001', amount: 1127500, type: 'debit', date: '2026-04-08' }
    ]
  },
  messages: [
    { id: 1, peer: 'Andi Wijaya', role: 'tenant', last: 'Boleh pickup jam 8 pagi.', unread: 1 },
    { id: 2, peer: 'Customer Support', role: 'support', last: 'Tiket refund sedang diproses.', unread: 0 }
  ],
  chats: [
    { id: 'CH001', user1Id: 1, user1Name: 'Budi Santoso', user1Role: 'borrower', user2Id: 2, user2Name: 'Andi Wijaya', user2Role: 'tenant', lastMsg: 'Baik, terima kasih!', lastTime: '2026-04-17 14:30', messages: [
      { sender: 1, text: 'Halo, saya tertarik menyewa drone anda', time: '14:15' },
      { sender: 2, text: 'Halo Budi! Kami ready. Kapan mau pickup?', time: '14:20' },
      { sender: 1, text: 'Besok pagi jam 8 bisa?', time: '14:25' },
      { sender: 2, text: 'Baik, nanti kami siapkan. Pembayaran via apa?', time: '14:28' },
      { sender: 1, text: 'Baik, terima kasih!', time: '14:30' }
    ]},
    { id: 'CH002', user1Id: 3, user1Name: 'Sari Dewi', user1Role: 'borrower', user2Id: 4, user2Name: 'Rizky Pratama', user2Role: 'tenant', lastMsg: 'Siap, terus hubungi saya', lastTime: '2026-04-16 10:45', messages: [
      { sender: 3, text: 'Generator anda masih available?', time: '10:30' },
      { sender: 4, text: 'Masih tersedia untuk akhir pekan', time: '10:35' },
      { sender: 3, text: 'Berapa harga untuk 3 hari?', time: '10:40' },
      { sender: 4, text: 'Siap, terus hubungi saya', time: '10:45' }
    ]}
  ],
  wishlist: [1, 3, 5],
  notifications: {
    admin: [
      { icon: 'bi bi-person-plus', text: 'Pengguna baru mendaftar dan perlu verifikasi KYC.', time: '5 menit lalu', read: false },
      { icon: 'bi bi-cash-coin', text: '2 permintaan payout menunggu approval finance.', time: '25 menit lalu', read: false },
      { icon: 'bi bi-exclamation-triangle', text: 'Dispute baru pada booking BK005.', time: '1 jam lalu', read: true }
    ],
    tenant: [
      { icon: 'bi bi-receipt', text: 'Pesanan baru BK004 masuk untuk Proyektor.', time: '2 jam lalu', read: false },
      { icon: 'bi bi-check-circle', text: 'Payout PO003 telah dibayarkan.', time: '1 hari lalu', read: true }
    ],
    borrower: [
      { icon: 'bi bi-clock-history', text: 'Booking BK001 aktif sampai 17 April 2026.', time: '1 hari lalu', read: false },
      { icon: 'bi bi-box-seam', text: 'Booking BK004 menunggu konfirmasi tenant.', time: '2 hari lalu', read: false }
    ]
  },
  currentRole: null,
  currentUser: null
};

const roles = {
  admin: {
    name: 'Administrator',
    email: 'admin@alatgo.id',
    avatar: 'AD',
    badge: 'ADMIN',
    nav: [
      { section: 'Utama', links: [
        { id: 'dashboard', icon: 'bi bi-speedometer2', label: 'Dashboard' },
        { id: 'analytics', icon: 'bi bi-graph-up-arrow', label: 'Analytics' },
        { id: 'reports', icon: 'bi bi-file-earmark-bar-graph', label: 'Reports' }
      ]},
      { section: 'Operasional', links: [
        { id: 'users', icon: 'bi bi-people', label: 'Users', badge: 5 },
        { id: 'items_admin', icon: 'bi bi-box-seam', label: 'Inventory' },
        { id: 'bookings_admin', icon: 'bi bi-receipt', label: 'Bookings', badge: 2 },
        { id: 'disputes', icon: 'bi bi-exclamation-triangle', label: 'Disputes' },
        { id: 'kyc', icon: 'bi bi-patch-check', label: 'KYC Verification' },
        { id: 'payouts_admin', icon: 'bi bi-cash-coin', label: 'Payout Approval' },
        { id: 'support_admin', icon: 'bi bi-headset', label: 'Support Queue' },
        { id: 'admin_management', icon: 'bi bi-shield-lock', label: 'Admin Management' }
      ]},
      { section: 'Komunikasi', links: [
        { id: 'chat_admin', icon: 'bi bi-chat-dots', label: 'Chat Pengguna' }
      ]},
      { section: 'Sistem', links: [
        { id: 'system_logs', icon: 'bi bi-cpu', label: 'System Logs' },
        { id: 'settings', icon: 'bi bi-gear', label: 'Settings' }
      ]}
    ]
  },
  tenant: {
    name: 'Andi Wijaya',
    email: 'andi@mail.com',
    avatar: 'AW',
    badge: 'TENANT',
    nav: [
      { section: 'Utama', links: [
        { id: 'dashboard', icon: 'bi bi-speedometer2', label: 'Dashboard' },
        { id: 'calendar_tenant', icon: 'bi bi-calendar3', label: 'Calendar' }
      ]},
      { section: 'Bisnis', links: [
        { id: 'my_items', icon: 'bi bi-box-seam', label: 'Listings' },
        { id: 'bookings_tenant', icon: 'bi bi-receipt', label: 'Orders', badge: 2 },
        { id: 'earnings', icon: 'bi bi-currency-dollar', label: 'Revenue' },
        { id: 'payouts_tenant', icon: 'bi bi-bank', label: 'Payout Account' }
      ]},
      { section: 'Lainnya', links: [
        { id: 'reviews_tenant', icon: 'bi bi-star', label: 'Reviews' },
        { id: 'chat_tenant', icon: 'bi bi-chat-dots', label: 'Messages', badge: 1 },
        { id: 'support_tenant', icon: 'bi bi-ticket-perforated', label: 'Support Tickets' },
        { id: 'settings', icon: 'bi bi-gear', label: 'Profile' }
      ]}
    ]
  },
  borrower: {
    name: 'Budi Santoso',
    email: 'budi@mail.com',
    avatar: 'BS',
    badge: 'PEMINJAM',
    nav: [
      { section: 'Utama', links: [
        { id: 'dashboard', icon: 'bi bi-house', label: 'Home' },
        { id: 'browse', icon: 'bi bi-search', label: 'Browse' },
        { id: 'wishlist', icon: 'bi bi-heart', label: 'Wishlist' }
      ]},
      { section: 'Aktivitas', links: [
        { id: 'my_bookings', icon: 'bi bi-receipt', label: 'My Orders', badge: 1 },
        { id: 'history', icon: 'bi bi-clock-history', label: 'History' },
        { id: 'wallet', icon: 'bi bi-credit-card', label: 'Wallet & Billing' },
        { id: 'chat_borrower', icon: 'bi bi-chat-dots', label: 'Messages' }
      ]},
      { section: 'Lainnya', links: [
        { id: 'reviews_borrower', icon: 'bi bi-star', label: 'My Reviews' },
        { id: 'help_center', icon: 'bi bi-life-preserver', label: 'Help Center' },
        { id: 'settings', icon: 'bi bi-gear', label: 'Profile' }
      ]}
    ]
  }
};

const authConfig = {
  admin: {
    label: 'Portal Admin',
    loginHint: 'Demo login: admin@alatgo.id / Admin123!',
    creds: { email: 'admin@alatgo.id', password: 'Admin123!' }
  },
  tenant: {
    label: 'Portal Tenant',
    loginHint: 'Demo login: andi@mail.com / Tenant123!',
    creds: { email: 'andi@mail.com', password: 'Tenant123!' }
  },
  borrower: {
    label: 'Portal Peminjam',
    loginHint: 'Demo login: budi@mail.com / Borrower123!',
    creds: { email: 'budi@mail.com', password: 'Borrower123!' }
  }
};

let currentPage = 'dashboard';
let currentFilter = 'all';
let activeNotifBtn = null;
let authState = { role: null, mode: 'login', pendingIdentity: '' };

// Socket.io connection for real-time chat
let socket = null;
const SOCKET_URL = 'http://localhost:3000';

function initializeSocket() {
  if (typeof io === 'undefined') {
    console.warn('❌ Socket.io not loaded. Chat will work in demo mode.');
    showToast('Socket.io not loaded - check console', 'error');
    return;
  }
  
  socket = io(SOCKET_URL, {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 5,
    forceNew: true
  });

  socket.on('connect', () => {
    console.log('✅ Connected to chat server at', SOCKET_URL);
    showToast('Connected to chat server! 🎉', 'success');
    if (store.currentUser) {
      socket.emit('userJoin', {
        userId: getCurrentUserId(),
        name: store.currentUser.name,
        role: store.currentRole,
        email: store.currentUser.email
      });
      console.log('📝 User joined:', store.currentUser.name);
    }
  });

  socket.on('disconnect', () => {
    console.log('❌ Disconnected from chat server');
    showToast('Disconnected from server', 'error');
  });

  socket.on('receiveMessage', (message) => {
    console.log('📨 New message received:', message);
  });

  socket.on('error', (err) => {
    console.error('Socket error:', err);
  });

  socket.on('connect_error', (err) => {
    console.error('Connection error:', err);
    console.warn('⚠️ Make sure server is running: npm start');
  });

  socket.on('loadMessages', (messages) => {
    console.log('📬 Messages loaded from server:', messages.length);
  });

  socket.on('chatsList', (chats) => {
    console.log('📋 Chats list received:', chats.length);
  });
}

// Test function - call from browser console: testChat()
function testChat() {
  console.log('=== Chat System Test ===');
  console.log('Socket status:', socket ? (socket.connected ? '✅ Connected' : '❌ Disconnected') : '❌ Not initialized');
  console.log('Current user:', store.currentUser?.name);
  console.log('Current role:', store.currentRole);
  console.log('Chats available:', store.chats.length);
  if (socket) {
    console.log('Socket ID:', socket.id);
    console.log('Socket URL:', SOCKET_URL);
  }
  return {
    connected: socket?.connected || false,
    user: store.currentUser?.name,
    chats: store.chats.length
  };
}

function rupiah(n) { return 'Rp ' + Number(n || 0).toLocaleString('id-ID'); }
function getCurrentUserId() {
  return Number(store.currentUser?.id) || 0;
}
function getCurrentUserName() {
  return store.currentUser?.name || 'User';
}
function getAvatarFromName(name) {
  const words = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (!words.length) return 'US';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0]}${words[1][0]}`.toUpperCase();
}
function prettyRole(role) {
  if (role === 'admin') return 'Admin';
  if (role === 'tenant') return 'Tenant';
  return 'Peminjam';
}
function statusBadge(s) {
  const map = {
    active: ['badge-blue', 'Aktif'],
    completed: ['badge-green', 'Selesai'],
    pending: ['badge-amber', 'Menunggu'],
    cancelled: ['badge-gray', 'Dibatalkan'],
    available: ['badge-green', 'Tersedia'],
    rented: ['badge-amber', 'Disewa'],
    suspended: ['badge-red', 'Ditangguhkan'],
    open: ['badge-red', 'Open'],
    in_progress: ['badge-blue', 'In Progress'],
    closed: ['badge-green', 'Closed'],
    waiting: ['badge-amber', 'Waiting'],
    review: ['badge-amber', 'Review'],
    approved: ['badge-green', 'Approved'],
    paid: ['badge-green', 'Paid']
  };
  const chosen = map[s] || ['badge-gray', String(s)];
  return `<span class="badge ${chosen[0]}">${chosen[1]}</span>`;
}

function startAuth(role) {
  authState = { role, mode: 'login', pendingIdentity: '' };
  document.getElementById('role-select-screen').style.display = 'none';
  document.getElementById('app').style.display = 'none';
  document.getElementById('auth-screen').style.display = 'flex';
  renderAuth();
}

function backToRoleSelect() {
  document.getElementById('role-select-screen').style.display = 'flex';
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('app').style.display = 'none';
  authState = { role: null, mode: 'login', pendingIdentity: '' };
}

function changeAuthMode(mode) {
  authState.mode = mode;
  renderAuth();
}

function renderAuth() {
  if (!authState.role) return;
  const cfg = authConfig[authState.role];
  const roleLabel = document.getElementById('authRoleLabel');
  const title = document.getElementById('authTitle');
  const sub = document.getElementById('authSub');
  const host = document.getElementById('authFormHost');
  const hint = document.getElementById('authDemoHint');

  roleLabel.textContent = cfg.label;
  hint.innerHTML = `<strong>Akun demo:</strong> ${cfg.loginHint}`;

  if (authState.mode === 'login') {
    title.textContent = 'Masuk ke akun Anda';
    sub.textContent = 'Akses dashboard, transaksi, dan pengelolaan akun secara aman.';
    host.innerHTML = `
      <form class="auth-form" onsubmit="submitLogin(event)">
        <div class="form-group">
          <label>Email</label>
          <input type="email" id="authEmail" required placeholder="nama@email.com">
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="text" id="authPassword" required placeholder="Masukkan password">
        </div>
        <div class="auth-actions">
          <label style="display:flex;align-items:center;gap:6px;font-size:.74rem;color:var(--gray-500);">
            <input type="checkbox"> Tetap masuk
          </label>
          <button type="button" class="auth-link" onclick="changeAuthMode('forgot')">Lupa password?</button>
        </div>
        <button type="submit" class="btn btn-primary auth-submit">Masuk</button>
        <div class="auth-note">Belum punya akun? <button type="button" class="auth-link" onclick="changeAuthMode('register')">Daftar sekarang</button></div>
      </form>
    `;
    return;
  }

  if (authState.mode === 'register') {
    title.textContent = 'Buat akun baru';
    sub.textContent = 'Lengkapi data untuk simulasi onboarding pengguna baru.';
    host.innerHTML = `
      <form class="auth-form" onsubmit="submitRegister(event)">
        <div class="auth-row">
          <div class="form-group">
            <label>Nama Depan</label>
            <input type="text" id="regFirst" required placeholder="Nama depan">
          </div>
          <div class="form-group">
            <label>Nama Belakang</label>
            <input type="text" id="regLast" required placeholder="Nama belakang">
          </div>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" id="regEmail" required placeholder="nama@email.com">
        </div>
        <div class="form-group">
          <label>Daftar Sebagai</label>
          <select id="regRole">
            <option value="tenant" ${authState.role === 'tenant' ? 'selected' : ''}>Tenant</option>
            <option value="borrower" ${authState.role === 'borrower' ? 'selected' : ''}>Peminjam</option>
          </select>
        </div>
        <div class="form-group">
          <label>Nomor Telepon</label>
          <input type="text" id="regPhone" required placeholder="08xxxxxxxxxx">
        </div>
        <div class="auth-row">
          <div class="form-group">
            <label>Password</label>
            <input type="text" id="regPass" required placeholder="Minimal 8 karakter">
          </div>
          <div class="form-group">
            <label>Konfirmasi</label>
            <input type="text" id="regPass2" required placeholder="Ulangi password">
          </div>
        </div>
        <label style="display:flex;align-items:flex-start;gap:8px;font-size:.74rem;color:var(--gray-500);">
          <input type="checkbox" required>
          Saya setuju dengan Syarat Penggunaan dan Kebijakan Privasi AlatGo.
        </label>
        <button type="submit" class="btn btn-primary auth-submit">Daftar Akun</button>
        <div class="auth-note">Sudah punya akun? <button type="button" class="auth-link" onclick="changeAuthMode('login')">Masuk</button></div>
      </form>
    `;
    return;
  }

  if (authState.mode === 'forgot') {
    title.textContent = 'Reset password';
    sub.textContent = 'Kami akan mengirim kode OTP ke email atau nomor terdaftar.';
    host.innerHTML = `
      <form class="auth-form" onsubmit="submitForgot(event)">
        <div class="form-group">
          <label>Email atau Nomor Telepon</label>
          <input type="text" id="forgotIdentity" required placeholder="email / nomor telepon">
        </div>
        <button type="submit" class="btn btn-primary auth-submit">Kirim OTP</button>
        <div class="auth-note">Kembali ke <button type="button" class="auth-link" onclick="changeAuthMode('login')">Halaman Login</button></div>
      </form>
    `;
    return;
  }

  title.textContent = 'Verifikasi OTP';
  sub.textContent = `Masukkan 6 digit kode OTP yang dikirim ke ${authState.pendingIdentity}.`;
  host.innerHTML = `
    <form class="auth-form" onsubmit="submitOtp(event)">
      <div class="form-group">
        <label>Kode OTP</label>
        <input type="text" id="otpCode" required placeholder="Contoh: 123456" maxlength="6">
      </div>
      <div class="auth-actions">
        <button type="button" class="auth-link" onclick="showToast('OTP dikirim ulang', 'success')">Kirim ulang kode</button>
        <button type="button" class="auth-link" onclick="changeAuthMode('login')">Kembali login</button>
      </div>
      <button type="submit" class="btn btn-primary auth-submit">Verifikasi</button>
    </form>
  `;
}

function submitLogin(event) {
  event.preventDefault();
  const email = document.getElementById('authEmail')?.value.trim().toLowerCase();
  enterApp(authState.role, email);
}

function submitRegister(event) {
  event.preventDefault();
  const first = document.getElementById('regFirst').value.trim();
  const last = document.getElementById('regLast').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  const pass = document.getElementById('regPass').value.trim();
  const pass2 = document.getElementById('regPass2').value.trim();
  if (pass.length < 8) {
    showToast('Password minimal 8 karakter.', 'error');
    return;
  }
  if (pass !== pass2) {
    showToast('Konfirmasi password tidak sama.', 'error');
    return;
  }
  const name = `${first} ${last}`.trim();
  const selectedRole = document.getElementById('regRole')?.value || authState.role;
  store.users.push({
    id: store.users.length + 1,
    name,
    email,
    role: selectedRole,
    status: 'active',
    joined: new Date().toISOString().slice(0, 10),
    rating: 5,
    rentals: selectedRole === 'borrower' ? 0 : undefined,
    items: selectedRole === 'tenant' ? 0 : undefined,
    verified: false,
    phone,
    isAdmin: false
  });
  showToast('Akun berhasil dibuat. Lanjut login.', 'success');
  changeAuthMode('login');
}

function submitForgot(event) {
  event.preventDefault();
  const identity = document.getElementById('forgotIdentity').value.trim();
  if (!identity) {
    showToast('Isi email atau nomor telepon.', 'error');
    return;
  }
  authState.pendingIdentity = identity;
  authState.mode = 'otp';
  renderAuth();
  showToast('OTP dikirim. Gunakan 123456 untuk demo.', 'success');
}

function submitOtp(event) {
  event.preventDefault();
  const code = document.getElementById('otpCode').value.trim();
  if (code !== '123456') {
    showToast('Kode OTP salah.', 'error');
    return;
  }
  showToast('Verifikasi berhasil. Silakan login ulang.', 'success');
  changeAuthMode('login');
}

function enterApp(role, loginEmail = '') {
  let selectedUser = null;
  if (role === 'admin') {
    selectedUser = store.users.find(u => u.isAdmin && u.email.toLowerCase() === loginEmail);
    if (!selectedUser && loginEmail === authConfig.admin.creds.email.toLowerCase()) {
      selectedUser = { id: 0, name: roles.admin.name, email: roles.admin.email, role: 'admin', isAdmin: true };
    }
  } else {
    selectedUser = store.users.find(u => u.role === role && u.email.toLowerCase() === loginEmail);
  }

  if (!selectedUser) {
    showToast('Akun tidak ditemukan untuk peran ini.', 'error');
    return;
  }

  store.currentRole = role;
  store.currentUser = selectedUser;
  document.getElementById('role-select-screen').style.display = 'none';
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('app').style.display = 'block';
  setupRole(role);
  navigate('dashboard');
  renderNotifications();
  showToast(`Selamat datang, ${store.currentUser.name}!`, 'success');
  
  // Initialize Socket.io connection
  initializeSocket();
}

function setupRole(role) {
  const r = roles[role];
  document.getElementById('roleBadge').textContent = r.badge;
  document.getElementById('sidebarAvatar').textContent = getAvatarFromName(store.currentUser?.name || r.name);
  document.getElementById('sidebarName').textContent = store.currentUser?.name || r.name;
  document.getElementById('sidebarRole').textContent = store.currentUser?.email || r.email;

  const nav = document.getElementById('sidebarNav');
  nav.innerHTML = r.nav.map(section => `
    <div class="nav-section-title">${section.section}</div>
    ${section.links.map(link => `
      <div class="nav-link" id="nav-${link.id}" onclick="navigate('${link.id}')">
        <i class="nav-icon ${link.icon}"></i>
        <span>${link.label}</span>
        ${link.badge ? `<span class="nav-badge">${link.badge}</span>` : ''}
      </div>
    `).join('')}
  `).join('');
}

function navigate(page) {
  currentPage = page;
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
  const navEl = document.getElementById(`nav-${page}`);
  if (navEl) navEl.classList.add('active');

  const titles = {
    dashboard: 'Dashboard', analytics: 'Analytics Platform', reports: 'Monthly Reports',
    users: 'Manajemen Pengguna', items_admin: 'Manajemen Inventori', bookings_admin: 'Semua Booking',
    disputes: 'Disputes & Claims', kyc: 'KYC Verification', payouts_admin: 'Payout Approval', support_admin: 'Support Queue', admin_management: 'Admin Management', chat_admin: 'Chat Pengguna',
    my_items: 'Listings Saya', bookings_tenant: 'Orders Masuk', earnings: 'Pendapatan',
    calendar_tenant: 'Availability Calendar', payouts_tenant: 'Akun Payout', reviews_tenant: 'Ulasan Tenant', chat_tenant: 'Pesan', support_tenant: 'Support Tickets',
    browse: 'Jelajah Alat', wishlist: 'Wishlist', my_bookings: 'Pesanan Saya', history: 'Riwayat',
    wallet: 'Wallet & Billing', chat_borrower: 'Pesan', reviews_borrower: 'Ulasan Saya', help_center: 'Help Center'
  };
  document.getElementById('topbarTitle').textContent = titles[page] || page;

  const role = store.currentRole;
  const content = document.getElementById('pageContent');

  if (page === 'dashboard') {
    if (role === 'admin') content.innerHTML = renderAdminDashboard();
    else if (role === 'tenant') content.innerHTML = renderTenantDashboard();
    else content.innerHTML = renderBorrowerDashboard();
    return;
  }

  const pageMap = {
    users: renderUsersPage,
    items_admin: renderItemsAdminPage,
    bookings_admin: renderBookingsAdminPage,
    analytics: renderAnalyticsPage,
    disputes: renderDisputesPage,
    kyc: renderKycPage,
    payouts_admin: renderPayoutsAdminPage,
    support_admin: renderSupportAdminPage,
    admin_management: renderAdminManagementPage,
    chat_admin: renderChatAdminPage,
    reports: renderReportsPage,
    my_items: renderMyItemsPage,
    bookings_tenant: renderBookingsTenantPage,
    earnings: renderEarningsPage,
    calendar_tenant: renderTenantCalendarPage,
    payouts_tenant: renderPayoutTenantPage,
    reviews_tenant: renderReviewsPage,
    chat_tenant: renderChatTenantPage,
    support_tenant: renderSupportTenantPage,
    browse: renderBrowsePage,
    wishlist: renderWishlistPage,
    my_bookings: renderMyBookingsPage,
    history: renderHistoryPage,
    wallet: renderWalletPage,
    chat_borrower: renderChatBorrowerPage,
    reviews_borrower: renderReviewsBorrowerPage,
    help_center: renderHelpCenterPage,
    settings: renderSettingsPage
  };

  const renderer = pageMap[page];
  if (renderer) {
    content.innerHTML = renderer();
  } else {
    content.innerHTML = `<div class="card"><div class="empty-state"><div class="empty-icon">🧭</div><div class="empty-text">Halaman belum tersedia.</div></div></div>`;
  }
}

function renderAdminDashboard() {
  const totalRevenue = store.bookings.filter(b => b.status === 'completed').reduce((a, b) => a + b.total, 0);
  const activeBookings = store.bookings.filter(b => b.status === 'active').length;
  const pendingPayouts = store.payouts.filter(p => p.status === 'waiting' || p.status === 'review').length;
  const pendingKyc = store.kycCases.filter(k => k.status === 'pending' || k.status === 'review').length;
  return `
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon" style="background:#dbeafe;"><i class="bi bi-cash-coin"></i></div><div><div class="stat-label">Pendapatan Platform</div><div class="stat-value">${rupiah(totalRevenue)}</div><div class="stat-change up">+14% MoM</div></div></div>
      <div class="stat-card"><div class="stat-icon" style="background:#dcfce7;"><i class="bi bi-receipt"></i></div><div><div class="stat-label">Booking Aktif</div><div class="stat-value">${activeBookings}</div><div class="stat-change up">Operasional normal</div></div></div>
      <div class="stat-card"><div class="stat-icon" style="background:#fef3c7;"><i class="bi bi-patch-check"></i></div><div><div class="stat-label">KYC Perlu Tindakan</div><div class="stat-value">${pendingKyc}</div><div class="stat-change down">Antrian verifikasi</div></div></div>
      <div class="stat-card"><div class="stat-icon" style="background:#ede9fe;"><i class="bi bi-bank"></i></div><div><div class="stat-label">Payout Menunggu</div><div class="stat-value">${pendingPayouts}</div><div class="stat-change down">Butuh approval finance</div></div></div>
    </div>
    <div class="grid-2" style="gap:20px;">
      <div class="card">
        <div class="card-title">Checklist Operasional Hari Ini</div>
        ${['Review KYC pending', 'Approve payout waiting', 'Monitor dispute aktif', 'Audit fee transaksi'].map(task => `
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--gray-100);">
          <div style="font-size:.82rem;">${task}</div>
          <span class="badge badge-amber">Open</span>
        </div>`).join('')}
      </div>
      <div class="card">
        <div class="card-title">Aktivitas Terkini</div>
        <div class="timeline">
          <div class="tl-item"><div class="tl-dot" style="background:#dbeafe;"><i class="bi bi-patch-check"></i></div><div class="tl-body"><div class="tl-title">KYC001 butuh validasi ulang selfie</div><div class="tl-desc">Lina Marlina mengunggah ulang dokumen</div><div class="tl-time">09:14 WIB</div></div></div>
          <div class="tl-item"><div class="tl-dot" style="background:#fef3c7;"><i class="bi bi-cash-coin"></i></div><div class="tl-body"><div class="tl-title">Permintaan payout PO001 masuk</div><div class="tl-desc">Andi Wijaya meminta pencairan Rp 1.850.000</div><div class="tl-time">08:45 WIB</div></div></div>
          <div class="tl-item"><div class="tl-dot" style="background:#fee2e2;"><i class="bi bi-exclamation-triangle"></i></div><div class="tl-body"><div class="tl-title">Dispute DSP001 masih terbuka</div><div class="tl-desc">Klaim kerusakan item dari booking BK005</div><div class="tl-time">Kemarin</div></div></div>
        </div>
      </div>
    </div>
  `;
}

function renderTenantDashboard() {
  const myItems = store.items.filter(i => i.ownerId === 2);
  const myBookings = store.bookings.filter(b => b.tenantId === 2);
  const totalEarned = myBookings.filter(b => b.status === 'completed').reduce((a, b) => a + b.total, 0);
  return `
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon" style="background:#dcfce7;"><i class="bi bi-currency-dollar"></i></div><div><div class="stat-label">Pendapatan Bulan Ini</div><div class="stat-value">${rupiah(totalEarned)}</div><div class="stat-change up">Cashflow stabil</div></div></div>
      <div class="stat-card"><div class="stat-icon" style="background:#dbeafe;"><i class="bi bi-box-seam"></i></div><div><div class="stat-label">Listing Aktif</div><div class="stat-value">${myItems.length}</div><div class="stat-change up">${myItems.filter(i => i.status === 'available').length} siap disewa</div></div></div>
      <div class="stat-card"><div class="stat-icon" style="background:#fef3c7;"><i class="bi bi-receipt"></i></div><div><div class="stat-label">Order Pending</div><div class="stat-value">${myBookings.filter(b => b.status === 'pending').length}</div><div class="stat-change down">Perlu konfirmasi</div></div></div>
      <div class="stat-card"><div class="stat-icon" style="background:#ede9fe;"><i class="bi bi-star"></i></div><div><div class="stat-label">Rating Toko</div><div class="stat-value">4.8</div><div class="stat-change up">Excellent score</div></div></div>
    </div>
    <div class="grid-2">
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;"><div class="card-title" style="margin-bottom:0;">Order Masuk</div><button class="btn btn-outline btn-sm" onclick="navigate('bookings_tenant')">Kelola</button></div>
        ${myBookings.slice(0, 4).map(b => `<div class="booking-item"><div class="booking-thumb" style="background:#dbeafe;"><i class="${b.emoji}"></i></div><div style="flex:1;"><div class="booking-name">${b.item}</div><div class="booking-dates">${b.borrower} • ${b.start} - ${b.end}</div></div><div>${statusBadge(b.status)}</div></div>`).join('')}
      </div>
      <div class="card">
        <div class="card-title">Quick Actions</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <button class="btn btn-primary" onclick="openAddItemModal()">+ Tambah Alat</button>
          <button class="btn btn-outline" onclick="navigate('calendar_tenant')">Atur Kalender</button>
          <button class="btn btn-outline" onclick="navigate('payouts_tenant')">Update Rekening</button>
          <button class="btn btn-outline" onclick="navigate('support_tenant')">Buat Tiket</button>
        </div>
      </div>
    </div>
  `;
}

function renderBorrowerDashboard() {
  const myBookings = store.bookings.filter(b => b.borrowerId === 1);
  const activeB = myBookings.find(b => b.status === 'active');
  const suggestions = store.items.filter(i => i.status === 'available').slice(0, 4);
  return `
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon" style="background:#dbeafe;"><i class="bi bi-receipt"></i></div><div><div class="stat-label">Total Order</div><div class="stat-value">${myBookings.length}</div><div class="stat-change up">Histori lengkap</div></div></div>
      <div class="stat-card"><div class="stat-icon" style="background:#dcfce7;"><i class="bi bi-check-circle"></i></div><div><div class="stat-label">Order Selesai</div><div class="stat-value">${myBookings.filter(b => b.status === 'completed').length}</div><div class="stat-change up">On-time return</div></div></div>
      <div class="stat-card"><div class="stat-icon" style="background:#fef3c7;"><i class="bi bi-credit-card"></i></div><div><div class="stat-label">Saldo Wallet</div><div class="stat-value">${rupiah(walletBalance())}</div><div class="stat-change">Gunakan untuk checkout</div></div></div>
      <div class="stat-card"><div class="stat-icon" style="background:#ede9fe;"><i class="bi bi-heart"></i></div><div><div class="stat-label">Wishlist</div><div class="stat-value">${store.wishlist.length}</div><div class="stat-change up">Item favorit tersimpan</div></div></div>
    </div>
    ${activeB ? `<div class="card" style="background:linear-gradient(135deg,#1d4ed8,#2563eb);color:#fff;margin-bottom:20px;"><div style="font-size:.76rem;color:rgba(255,255,255,.72);">ORDER AKTIF</div><div style="display:flex;gap:12px;align-items:center;margin-top:8px;"><div style="font-size:1.2rem;"><i class="${activeB.emoji}"></i></div><div style="flex:1;"><div style="font-weight:700;">${activeB.item}</div><div style="font-size:.76rem;color:rgba(255,255,255,.72);">${activeB.start} sampai ${activeB.end}</div></div><div style="font-weight:800;">${rupiah(activeB.total)}</div></div></div>` : ''}
    <div class="card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;"><div class="card-title" style="margin-bottom:0;">Rekomendasi Untuk Anda</div><button class="btn btn-outline btn-sm" onclick="navigate('browse')">Lihat semua</button></div>
      <div class="product-grid">
        ${suggestions.map(item => `<div class="product-card" onclick="openItemDetail(${item.id})"><div class="product-thumb" style="background:${item.color};"><i class="${item.emoji}"></i></div><div class="product-info"><div class="product-name">${item.name}</div><div class="product-cat">${item.category} • ${item.owner}</div><div class="product-price">${rupiah(item.price)}/hari</div><div class="product-meta"><div class="product-rating">★ ${item.rating}</div><button class="btn btn-primary btn-sm" onclick="event.stopPropagation();openBookingModal(${item.id})">Sewa</button></div></div></div>`).join('')}
      </div>
    </div>
  `;
}

function renderUsersPage() {
  return `
    <div class="filter-bar">
      <button class="filter-btn active" onclick="setFilter(this,'all')">Semua</button>
      <button class="filter-btn" onclick="setFilter(this,'borrower')">Peminjam</button>
      <button class="filter-btn" onclick="setFilter(this,'tenant')">Tenant</button>
      <button class="filter-btn" onclick="setFilter(this,'suspended')">Ditangguhkan</button>
      <div class="spacer"></div>
      <button class="btn btn-primary btn-sm" onclick="openAddUserModal()">+ Tambah Pengguna</button>
    </div>
    <div class="card">
      <div class="table-wrap">
        <table>
          <thead><tr><th>Pengguna</th><th>Peran</th><th>Status</th><th>Rating</th><th>Verified</th><th>Aksi</th></tr></thead>
          <tbody>
            ${store.users.map(u => `<tr><td><strong>${u.name}</strong><br><span style="font-size:.72rem;color:var(--gray-400);">${u.email}</span></td><td>${prettyRole(u.role)}</td><td>${statusBadge(u.status)}</td><td>★ ${u.rating || 0}</td><td>${u.verified ? '<span class="badge badge-green">Yes</span>' : '<span class="badge badge-amber">No</span>'}</td><td><div style="display:flex;gap:6px;"><button class="btn btn-outline btn-sm" onclick="openUserDetail(${u.id})">Detail</button>${u.status === 'active' ? `<button class="btn btn-danger btn-sm" onclick="suspendUser(${u.id})">Suspend</button>` : `<button class="btn btn-success btn-sm" onclick="activateUser(${u.id})">Activate</button>`}</div></td></tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderItemsAdminPage() {
  return `<div class="product-grid">${store.items.map(item => `<div class="product-card" onclick="openItemDetail(${item.id})"><div class="product-thumb" style="background:${item.color};"><i class="${item.emoji}"></i></div><div class="product-info"><div class="product-name">${item.name}</div><div class="product-cat">${item.category} • ${item.owner}</div><div class="product-price">${rupiah(item.price)}/hari</div><div class="product-meta"><div class="product-rating">★ ${item.rating} (${item.reviews})</div>${statusBadge(item.status)}</div></div></div>`).join('')}</div>`;
}

function renderBookingsAdminPage() {
  return `
    <div class="card">
      <div class="table-wrap">
        <table>
          <thead><tr><th>ID</th><th>Item</th><th>Peminjam</th><th>Tenant</th><th>Periode</th><th>Total</th><th>Payment</th><th>Status</th></tr></thead>
          <tbody>${store.bookings.map(b => `<tr><td><span style="font-family:var(--mono);color:var(--blue);">${b.id}</span></td><td><i class="${b.emoji}"></i> ${b.item}</td><td>${b.borrower}</td><td>${b.tenant}</td><td>${b.start} - ${b.end}</td><td><strong>${rupiah(b.total)}</strong></td><td>${b.payment}</td><td>${statusBadge(b.status)}</td></tr>`).join('')}</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAnalyticsPage() {
  const chartBars = store.reports.map((r) => `<div class="bar" style="height:${Math.round(r.completion)}%"><div class="bar-tooltip">${r.month}: ${r.completion}%</div></div>`).join('');
  return `
    <div class="grid-2">
      <div class="card"><div class="card-title">Completion Rate</div><div class="mini-chart" style="height:120px;">${chartBars}</div></div>
      <div class="card"><div class="card-title">Category Mix</div>${['Elektronik 52%', 'Outdoor 20%', 'Olahraga 16%', 'Industri 12%'].map(v => `<div style="padding:9px 0;border-bottom:1px solid var(--gray-100);font-size:.82rem;">${v}</div>`).join('')}</div>
    </div>
  `;
}

function renderReportsPage() {
  return `
    <div class="card">
      <div class="card-title">Laporan Bulanan</div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Bulan</th><th>GMV</th><th>Disputes</th><th>Completion</th><th>Aksi</th></tr></thead>
          <tbody>${store.reports.map(r => `<tr><td>${r.month}</td><td>${rupiah(r.gmv)}</td><td>${r.disputes}</td><td>${r.completion}%</td><td><button class="btn btn-outline btn-sm" onclick="showToast('Export laporan ${r.month}', 'success')">Export CSV</button></td></tr>`).join('')}</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderDisputesPage() {
  const disputes = [
    { id: 'DSP001', booking: 'BK005', item: 'Sepeda MTB Trek', borrower: 'Budi Santoso', issue: 'Ban kempis saat dikembalikan', status: 'open', date: '2026-03-07' },
    { id: 'DSP002', booking: 'BK002', item: 'Kamera Sony A7', borrower: 'Sari Dewi', issue: 'Layar LCD retak', status: 'closed', date: '2026-04-05' }
  ];
  return `
    <div class="card">
      <div class="table-wrap">
        <table>
          <thead><tr><th>ID</th><th>Booking</th><th>Item</th><th>Borrower</th><th>Masalah</th><th>Status</th><th>Tanggal</th><th>Aksi</th></tr></thead>
          <tbody>${disputes.map(d => `<tr><td>${d.id}</td><td>${d.booking}</td><td>${d.item}</td><td>${d.borrower}</td><td>${d.issue}</td><td>${statusBadge(d.status)}</td><td>${d.date}</td><td><button class="btn btn-outline btn-sm" onclick="showToast('Buka investigasi ' + '${d.id}')">Investigasi</button></td></tr>`).join('')}</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderKycPage() {
  return `
    <div class="card">
      <div class="table-wrap">
        <table>
          <thead><tr><th>ID</th><th>Nama</th><th>Role</th><th>Submitted</th><th>Status</th><th>Catatan</th><th>Aksi</th></tr></thead>
          <tbody>${store.kycCases.map(k => `<tr><td>${k.id}</td><td>${k.name}</td><td>${prettyRole(k.role)}</td><td>${k.submitted}</td><td>${statusBadge(k.status)}</td><td>${k.note}</td><td><div style="display:flex;gap:6px;"><button class="btn btn-success btn-sm" onclick="approveKyc('${k.id}')">Approve</button><button class="btn btn-danger btn-sm" onclick="rejectKyc('${k.id}')">Reject</button></div></td></tr>`).join('')}</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderPayoutsAdminPage() {
  return `
    <div class="card">
      <div class="table-wrap">
        <table>
          <thead><tr><th>ID</th><th>Tenant</th><th>Amount</th><th>Bank</th><th>Status</th><th>Requested</th><th>Aksi</th></tr></thead>
          <tbody>${store.payouts.map(p => `<tr><td>${p.id}</td><td>${p.tenant}</td><td><strong>${rupiah(p.amount)}</strong></td><td>${p.bank}</td><td>${statusBadge(p.status)}</td><td>${p.requested}</td><td><button class="btn btn-primary btn-sm" onclick="approvePayout('${p.id}')">Approve</button></td></tr>`).join('')}</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderSupportAdminPage() {
  return `
    <div class="card">
      <div class="card-title">Support Ticket Queue</div>
      ${store.supportTickets.map(t => `<div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--gray-100);"><div style="min-width:72px;font-family:var(--mono);font-size:.75rem;">${t.id}</div><div style="flex:1;"><div style="font-size:.84rem;font-weight:700;">${t.subject}</div><div style="font-size:.72rem;color:var(--gray-500);">${t.from} • ${t.updated}</div></div><div>${statusBadge(t.status)}</div><button class="btn btn-outline btn-sm" onclick="resolveTicket('${t.id}')">Resolve</button></div>`).join('')}
    </div>
  `;
}

function renderSystemLogsPage() {
  const logs = [
    '09:01 API gateway latency normal (88ms)',
    '09:13 Payment callback received for BK001',
    '09:42 Rate-limit triggered on /auth/login (IP masked)',
    '10:08 Daily backup completed successfully'
  ];
  return `
    <div class="card">
      <div class="card-title">Audit Log Stream</div>
      ${logs.map(log => `<div style="padding:9px 0;border-bottom:1px solid var(--gray-100);font-size:.78rem;font-family:var(--mono);">${log}</div>`).join('')}
    </div>
  `;
}

function renderMyItemsPage() {
  const myItems = store.items.filter(i => i.ownerId === 2);
  return `
    <div class="filter-bar"><button class="btn btn-primary" onclick="openAddItemModal()">+ Tambah Listing</button></div>
    <div class="product-grid">${myItems.map(item => `<div class="product-card"><div class="product-thumb" style="background:${item.color};"><i class="${item.emoji}"></i></div><div class="product-info"><div class="product-name">${item.name}</div><div class="product-cat">${item.category}</div><div class="product-price">${rupiah(item.price)}/hari</div><div class="product-meta">${statusBadge(item.status)}<button class="btn btn-outline btn-sm" onclick="openEditItemModal(${item.id})">Edit</button></div></div></div>`).join('')}</div>
  `;
}

function renderBookingsTenantPage() {
  const myBookings = store.bookings.filter(b => b.tenantId === 2);
  return `<div style="display:flex;flex-direction:column;gap:12px;">${myBookings.map(b => `<div class="card"><div style="display:flex;gap:12px;align-items:center;"><div style="font-size:1.1rem;"><i class="${b.emoji}"></i></div><div style="flex:1;"><strong>${b.item}</strong><div style="font-size:.74rem;color:var(--gray-500);">${b.borrower} • ${b.start} - ${b.end}</div></div><div>${statusBadge(b.status)}</div>${b.status === 'pending' ? `<button class="btn btn-success btn-sm" onclick="approveBooking('${b.id}')">Terima</button><button class="btn btn-danger btn-sm" onclick="rejectBooking('${b.id}')">Tolak</button>` : ''}</div></div>`).join('')}</div>`;
}

function renderEarningsPage() {
  const myBookings = store.bookings.filter(b => b.tenantId === 2 && b.status === 'completed');
  const total = myBookings.reduce((a, b) => a + b.total, 0);
  const fee = Math.round(total * 0.05);
  return `
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon" style="background:#dcfce7;"><i class="bi bi-currency-dollar"></i></div><div><div class="stat-label">Gross</div><div class="stat-value">${rupiah(total)}</div></div></div>
      <div class="stat-card"><div class="stat-icon" style="background:#fee2e2;"><i class="bi bi-tag"></i></div><div><div class="stat-label">Platform Fee</div><div class="stat-value">${rupiah(fee)}</div></div></div>
      <div class="stat-card"><div class="stat-icon" style="background:#dbeafe;"><i class="bi bi-bank"></i></div><div><div class="stat-label">Net</div><div class="stat-value">${rupiah(total - fee)}</div></div></div>
    </div>
  `;
}

function renderTenantCalendarPage() {
  const next7 = Array.from({ length: 7 }).map((_, idx) => {
    const dt = new Date(Date.now() + idx * 86400000);
    return dt.toISOString().slice(0, 10);
  });
  return `
    <div class="card">
      <div class="card-title">Ketersediaan 7 Hari</div>
      ${next7.map(d => `<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--gray-100);"><div style="font-size:.82rem;">${d}</div><div style="display:flex;gap:6px;"><span class="badge badge-green">2 Available</span><span class="badge badge-amber">1 Rented</span></div></div>`).join('')}
    </div>
  `;
}

function renderPayoutTenantPage() {
  return `
    <div class="grid-2">
      <div class="card">
        <div class="card-title">Rekening Payout</div>
        <div class="form-group"><label>Nama Bank</label><input type="text" value="BCA"></div>
        <div class="form-group"><label>No Rekening</label><input type="text" value="1234567890"></div>
        <div class="form-group"><label>Atas Nama</label><input type="text" value="Andi Wijaya"></div>
        <button class="btn btn-primary" onclick="showToast('Data rekening diperbarui', 'success')">Simpan</button>
      </div>
      <div class="card">
        <div class="card-title">Riwayat Pencairan</div>
        ${store.payouts.filter(p => p.tenant === 'Andi Wijaya').map(p => `<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--gray-100);"><div><div style="font-size:.82rem;font-weight:700;">${p.id}</div><div style="font-size:.72rem;color:var(--gray-500);">${p.requested}</div></div><div>${statusBadge(p.status)}</div></div>`).join('')}
      </div>
    </div>
  `;
}

function renderReviewsPage() {
  return `<div style="display:flex;flex-direction:column;gap:12px;">${store.reviews.map(r => `<div class="card"><div style="display:flex;justify-content:space-between;"><strong>${r.borrower}</strong><span style="color:#f59e0b;">${'★'.repeat(r.rating)}</span></div><div style="font-size:.75rem;color:var(--gray-500);">${r.item} • ${r.date}</div><p style="margin-top:8px;font-size:.82rem;color:var(--gray-700);">${r.comment}</p></div>`).join('')}</div>`;
}

function renderSupportTenantPage() {
  return `
    <div class="filter-bar"><button class="btn btn-primary" onclick="openCreateTicket()">+ Buat Tiket Baru</button></div>
    <div class="card">
      ${store.supportTickets.filter(t => t.from === 'Andi Wijaya').map(t => `<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--gray-100);"><div><div style="font-size:.84rem;font-weight:700;">${t.subject}</div><div style="font-size:.72rem;color:var(--gray-500);">${t.id} • ${t.updated}</div></div>${statusBadge(t.status)}</div>`).join('') || '<div class="empty-state"><div class="empty-text">Belum ada tiket</div></div>'}
    </div>
  `;
}

function renderBrowsePage() {
  const cats = ['Semua', 'Elektronik', 'Outdoor', 'Olahraga', 'Industri'];
  return `
    <div class="filter-bar">
      ${cats.map((c, i) => `<button class="filter-btn ${i === 0 ? 'active' : ''}" onclick="setFilter(this,'${c}')">${c}</button>`).join('')}
      <div class="spacer"></div>
      <div class="search-input-wrap" style="width:200px;"><span class="search-input-icon"><i class="bi bi-search"></i></span><input type="text" placeholder="Cari alat..." oninput="filterProducts(this.value)" style="padding-left:36px;"></div>
    </div>
    <div class="product-grid" id="productGrid">${store.items.map(item => `<div class="product-card" onclick="openItemDetail(${item.id})"><div class="product-thumb" style="background:${item.color};"><i class="${item.emoji}"></i></div><div class="product-info"><div class="product-name">${item.name}</div><div class="product-cat">${item.category} • ${item.owner}</div><div class="product-price">${rupiah(item.price)}/hari</div><div class="product-meta"><div class="avail-dot ${item.status}">${item.status === 'available' ? 'Tersedia' : 'Disewa'}</div><div style="display:flex;gap:6px;"><button class="btn btn-outline btn-sm" onclick="event.stopPropagation();toggleWishlist(${item.id})"><i class="bi ${store.wishlist.includes(item.id) ? 'bi-heart-fill' : 'bi-heart'}"></i></button>${item.status === 'available' ? `<button class="btn btn-primary btn-sm" onclick="event.stopPropagation();openBookingModal(${item.id})">Sewa</button>` : ''}</div></div></div></div>`).join('')}</div>
  `;
}

function renderWishlistPage() {
  const items = store.items.filter(i => store.wishlist.includes(i.id));
  return `
    <div class="card">
      <div class="card-title">Wishlist Anda</div>
      ${items.length ? items.map(item => `<div class="booking-item"><div class="booking-thumb" style="background:${item.color};"><i class="${item.emoji}"></i></div><div style="flex:1;"><div class="booking-name">${item.name}</div><div class="booking-dates">${item.category} • ${rupiah(item.price)}/hari</div></div><button class="btn btn-outline btn-sm" onclick="openBookingModal(${item.id})">Sewa</button><button class="btn btn-danger btn-sm" onclick="toggleWishlist(${item.id})">Hapus</button></div>`).join('') : '<div class="empty-state"><div class="empty-text">Wishlist kosong</div></div>'}
    </div>
  `;
}

function renderMyBookingsPage() {
  const myBookings = store.bookings.filter(b => b.borrowerId === 1);
  return `<div style="display:flex;flex-direction:column;gap:12px;">${myBookings.map(b => `<div class="card"><div style="display:flex;gap:12px;align-items:center;"><div style="font-size:1.1rem;"><i class="${b.emoji}"></i></div><div style="flex:1;"><strong>${b.item}</strong><div style="font-size:.74rem;color:var(--gray-500);">${b.tenant} • ${b.start} - ${b.end}</div></div><div>${statusBadge(b.status)}</div>${b.status === 'completed' ? `<button class="btn btn-outline btn-sm" onclick="openReviewModal(${b.itemId},'${b.item}')">Review</button>` : ''}${b.status === 'pending' ? `<button class="btn btn-danger btn-sm" onclick="cancelBooking('${b.id}')">Cancel</button>` : ''}</div></div>`).join('')}</div>`;
}

function renderHistoryPage() {
  const done = store.bookings.filter(b => b.borrowerId === 1 && b.status === 'completed');
  return `<div class="card"><div class="card-title">Riwayat Sewa Selesai</div>${done.map(b => `<div class="booking-item"><div class="booking-thumb" style="background:#dbeafe;"><i class="${b.emoji}"></i></div><div style="flex:1;"><div class="booking-name">${b.item}</div><div class="booking-dates">${b.start} - ${b.end}</div></div><div class="booking-price">${rupiah(b.total)}</div></div>`).join('') || '<div class="empty-state"><div class="empty-text">Belum ada riwayat</div></div>'}</div>`;
}

function walletBalance() {
  const txs = store.wallet.borrower;
  return txs.reduce((sum, t) => sum + (t.type === 'credit' ? t.amount : -t.amount), 0);
}

function renderWalletPage() {
  const txs = store.wallet.borrower;
  return `
    <div class="grid-2">
      <div class="card">
        <div class="card-title">Saldo Wallet</div>
        <div style="font-size:2rem;font-weight:800;color:var(--blue);margin-bottom:14px;">${rupiah(walletBalance())}</div>
        <button class="btn btn-primary" onclick="topUpWallet()">+ Top Up Saldo</button>
      </div>
      <div class="card">
        <div class="card-title">Metode Pembayaran Tersimpan</div>
        <div style="padding:10px;border:1px solid var(--gray-200);border-radius:10px;margin-bottom:8px;font-size:.82rem;">BCA Virtual Account •••• 8821</div>
        <div style="padding:10px;border:1px solid var(--gray-200);border-radius:10px;font-size:.82rem;">Visa Debit •••• 1199</div>
      </div>
    </div>
    <div class="card" style="margin-top:20px;">
      <div class="card-title">Riwayat Transaksi Wallet</div>
      ${txs.map(t => `<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--gray-100);"><div><div style="font-size:.82rem;font-weight:700;">${t.label}</div><div style="font-size:.72rem;color:var(--gray-500);">${t.id} • ${t.date}</div></div><div style="font-weight:700;color:${t.type === 'credit' ? 'var(--green)' : 'var(--red)'};">${t.type === 'credit' ? '+' : '-'}${rupiah(t.amount)}</div></div>`).join('')}
    </div>
  `;
}

function renderMessagesPage() {
  return `
    <div class="grid-2">
      <div class="card">
        <div class="card-title">Inbox</div>
        ${store.messages.map(m => `<div style="padding:10px 0;border-bottom:1px solid var(--gray-100);cursor:pointer;" onclick="openChat('${m.peer}')"><div style="display:flex;justify-content:space-between;"><strong style="font-size:.84rem;">${m.peer}</strong>${m.unread ? `<span class="badge badge-red">${m.unread}</span>` : ''}</div><div style="font-size:.74rem;color:var(--gray-500);margin-top:2px;">${m.last}</div></div>`).join('')}
      </div>
      <div class="card">
        <div class="card-title">Percakapan</div>
        <div id="chatPanel" style="font-size:.8rem;color:var(--gray-500);">Pilih percakapan untuk membaca pesan.</div>
      </div>
    </div>
  `;
}

function renderReviewsBorrowerPage() {
  const myReviews = store.reviews.filter(r => r.borrower === 'Budi Santoso');
  return `<div style="display:flex;flex-direction:column;gap:12px;">${myReviews.map(r => `<div class="card"><div style="display:flex;justify-content:space-between;"><strong>${r.item}</strong><span style="color:#f59e0b;">${'★'.repeat(r.rating)}</span></div><div style="font-size:.72rem;color:var(--gray-500);">${r.date}</div><p style="margin-top:8px;font-size:.82rem;">${r.comment}</p></div>`).join('') || '<div class="card"><div class="empty-state"><div class="empty-text">Belum ada ulasan.</div></div></div>'}</div>`;
}

function renderHelpCenterPage() {
  const faqs = [
    ['Bagaimana proses refund?', 'Refund diproses maksimal 2x24 jam setelah item diverifikasi kembali.'],
    ['Apa yang terjadi jika alat rusak?', 'Silakan buka tiket dispute, tim kami akan mediasi berdasarkan bukti.'],
    ['Bagaimana cara ubah jadwal sewa?', 'Hubungi tenant lewat pesan lalu ubah booking sebelum status aktif.']
  ];
  return `
    <div class="grid-2">
      <div class="card">
        <div class="card-title">FAQ</div>
        ${faqs.map(([q, a]) => `<div style="padding:10px 0;border-bottom:1px solid var(--gray-100);"><div style="font-size:.84rem;font-weight:700;">${q}</div><div style="font-size:.76rem;color:var(--gray-500);margin-top:3px;">${a}</div></div>`).join('')}
      </div>
      <div class="card">
        <div class="card-title">Hubungi Support</div>
        <div class="form-group"><label>Subjek</label><input type="text" id="helpSubject" placeholder="Contoh: Refund belum masuk"></div>
        <div class="form-group"><label>Deskripsi</label><textarea id="helpDesc" placeholder="Jelaskan kendala Anda"></textarea></div>
        <button class="btn btn-primary" onclick="submitHelpTicket()">Kirim Tiket</button>
      </div>
    </div>
  `;
}

function renderSettingsPage() {
  const role = store.currentRole;
  const r = roles[role];
  return `
    <div class="grid-2">
      <div class="card">
        <div class="card-title">Informasi Akun</div>
        <div style="display:flex;flex-direction:column;align-items:center;padding:10px 0 16px;"><div class="user-avatar" style="width:60px;height:60px;font-size:1.2rem;">${r.avatar}</div><div style="margin-top:8px;font-size:1rem;font-weight:700;">${r.name}</div><div style="font-size:.76rem;color:var(--gray-500);">${r.email}</div></div>
        <div class="form-group"><label>Nama Lengkap</label><input type="text" value="${r.name}"></div>
        <div class="form-group"><label>Email</label><input type="email" value="${r.email}"></div>
        <div class="form-group"><label>Nomor Telepon</label><input type="text" value="+62 812-3456-7890"></div>
        <button class="btn btn-primary" onclick="showToast('Profil diperbarui', 'success')">Simpan</button>
      </div>
      <div>
        <div class="card" style="margin-bottom:14px;"><div class="card-title">Keamanan</div><div class="form-group"><label>Password Baru</label><input type="text" placeholder="Minimal 8 karakter"></div><div class="form-group"><label>Konfirmasi</label><input type="text" placeholder="Ulangi password"></div><button class="btn btn-outline" onclick="showToast('Password diperbarui', 'success')">Ubah Password</button></div>
        <div class="card"><div class="card-title">Notifikasi</div>${['Order baru', 'Konfirmasi pembayaran', 'Reminder pengembalian', 'Promo produk baru'].map(n => `<div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid var(--gray-100);"><span style="font-size:.82rem;">${n}</span><div style="width:40px;height:22px;background:var(--blue);border-radius:999px;position:relative;"><div style="position:absolute;top:3px;right:3px;width:16px;height:16px;background:#fff;border-radius:50%;"></div></div></div>`).join('')}</div>
      </div>
    </div>
  `;
}

function openModal(title, body, footer = '') {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = body;
  document.getElementById('modalFooter').innerHTML = footer;
  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

function openAddItemModal() {
  openModal('Tambah Alat Baru', `
    <div class="form-group"><label>Nama Alat</label><input type="text" placeholder="Misal: Drone DJI Mini 3 Pro" id="mi_name"></div>
    <div class="form-group"><label>Kategori</label><select id="mi_cat"><option>Elektronik</option><option>Outdoor</option><option>Olahraga</option><option>Industri</option></select></div>
    <div class="form-group"><label>Harga per Hari (Rp)</label><input type="number" placeholder="150000" id="mi_price"></div>
    <div class="form-group"><label>Deskripsi</label><textarea placeholder="Deskripsi alat..." id="mi_desc"></textarea></div>
    <div class="form-group"><label>Kelas Ikon (Bootstrap Icons)</label><input type="text" placeholder="bi bi-camera" id="mi_emoji"></div>
  `, `<button class="btn btn-outline" onclick="closeModal()">Batal</button><button class="btn btn-primary" onclick="submitAddItem()">Tambah</button>`);
}

function submitAddItem() {
  const name = document.getElementById('mi_name').value.trim();
  const cat = document.getElementById('mi_cat').value;
  const price = parseInt(document.getElementById('mi_price').value, 10) || 100000;
  const desc = document.getElementById('mi_desc').value;
  const emoji = document.getElementById('mi_emoji').value || 'bi bi-box-seam';
  if (!name) {
    showToast('Nama alat wajib diisi.', 'error');
    return;
  }
  const colors = ['#dbeafe', '#dcfce7', '#fef9c3', '#ede9fe', '#fce7f3'];
  store.items.push({ id: store.items.length + 1, name, category: cat, price, owner: 'Andi Wijaya', ownerId: 2, status: 'available', rating: 5.0, reviews: 0, emoji, color: colors[Math.floor(Math.random() * colors.length)], desc, specs: [] });
  closeModal();
  showToast(`${name} berhasil ditambahkan.`, 'success');
  navigate(currentPage);
}

function openEditItemModal(id) {
  const item = store.items.find(i => i.id === id);
  if (!item) return;
  openModal(`Edit: ${item.name}`, `
    <div class="form-group"><label>Nama Alat</label><input type="text" value="${item.name}" id="ei_name"></div>
    <div class="form-group"><label>Harga per Hari (Rp)</label><input type="number" value="${item.price}" id="ei_price"></div>
    <div class="form-group"><label>Status</label><select id="ei_status"><option value="available" ${item.status === 'available' ? 'selected' : ''}>Tersedia</option><option value="rented" ${item.status === 'rented' ? 'selected' : ''}>Disewa</option></select></div>
    <div class="form-group"><label>Deskripsi</label><textarea id="ei_desc">${item.desc}</textarea></div>
  `, `<button class="btn btn-danger btn-sm" onclick="deleteItem(${id})">Hapus</button><div style="flex:1;"></div><button class="btn btn-outline" onclick="closeModal()">Batal</button><button class="btn btn-primary" onclick="saveEditItem(${id})">Simpan</button>`);
}

function saveEditItem(id) {
  const item = store.items.find(i => i.id === id);
  if (!item) return;
  item.name = document.getElementById('ei_name').value;
  item.price = parseInt(document.getElementById('ei_price').value, 10);
  item.status = document.getElementById('ei_status').value;
  item.desc = document.getElementById('ei_desc').value;
  closeModal();
  showToast('Alat diperbarui.', 'success');
  navigate(currentPage);
}

function deleteItem(id) {
  const idx = store.items.findIndex(i => i.id === id);
  if (idx < 0) return;
  store.items.splice(idx, 1);
  closeModal();
  showToast('Alat dihapus.', 'error');
  navigate(currentPage);
}

function openAddUserModal() {
  openModal('Tambah Pengguna', `
    <div class="form-group"><label>Nama Lengkap</label><input type="text" id="au_name"></div>
    <div class="form-group"><label>Email</label><input type="email" id="au_email"></div>
    <div class="form-group"><label>Peran</label><select id="au_role"><option value="borrower">Peminjam</option><option value="tenant">Tenant</option></select></div>
  `, `<button class="btn btn-outline" onclick="closeModal()">Batal</button><button class="btn btn-primary" onclick="submitAddUser()">Tambah</button>`);
}

function submitAddUser() {
  const name = document.getElementById('au_name').value.trim();
  const email = document.getElementById('au_email').value.trim();
  const role = document.getElementById('au_role').value;
  if (!name || !email) {
    showToast('Nama dan email wajib diisi.', 'error');
    return;
  }
  store.users.push({ id: store.users.length + 1, name, email, role, status: 'active', joined: new Date().toISOString().slice(0, 10), rating: 5.0, rentals: 0, items: 0, verified: false });
  closeModal();
  showToast(`Pengguna ${name} ditambahkan.`, 'success');
  navigate(currentPage);
}

function openUserDetail(id) {
  const u = store.users.find(x => x.id === id);
  if (!u) return;
  openModal(`Detail: ${u.name}`, `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      <div class="card" style="padding:12px;box-shadow:none;border:1px solid var(--gray-100);"><div style="font-size:.7rem;color:var(--gray-500);">Email</div><div style="font-size:.85rem;font-weight:700;">${u.email}</div></div>
      <div class="card" style="padding:12px;box-shadow:none;border:1px solid var(--gray-100);"><div style="font-size:.7rem;color:var(--gray-500);">Role</div><div style="font-size:.85rem;font-weight:700;">${prettyRole(u.role)}</div></div>
      <div class="card" style="padding:12px;box-shadow:none;border:1px solid var(--gray-100);"><div style="font-size:.7rem;color:var(--gray-500);">Status</div><div style="font-size:.85rem;font-weight:700;">${u.status}</div></div>
      <div class="card" style="padding:12px;box-shadow:none;border:1px solid var(--gray-100);"><div style="font-size:.7rem;color:var(--gray-500);">Joined</div><div style="font-size:.85rem;font-weight:700;">${u.joined}</div></div>
    </div>
  `, '<button class="btn btn-outline" onclick="closeModal()">Tutup</button>');
}

function openItemDetail(id) {
  const item = store.items.find(i => i.id === id);
  if (!item) return;
  openModal(item.name, `
    <div style="height:120px;background:${item.color};border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:2.2rem;margin-bottom:14px;"><i class="${item.emoji}"></i></div>
    <span class="cat-pill">${item.category}</span>
    <div style="font-size:1.3rem;font-weight:800;color:var(--blue);margin-top:10px;">${rupiah(item.price)}<span style="font-size:.8rem;color:var(--gray-400);font-weight:400;"> / hari</span></div>
    <div style="font-size:.78rem;color:var(--gray-500);margin-top:5px;">Pemilik: ${item.owner} • ★ ${item.rating}</div>
    <p style="margin-top:10px;font-size:.82rem;color:var(--gray-700);line-height:1.6;">${item.desc}</p>
  `, `<button class="btn btn-outline" onclick="closeModal()">Tutup</button>${store.currentRole === 'borrower' && item.status === 'available' ? `<button class="btn btn-primary" onclick="closeModal();openBookingModal(${item.id})">Pesan</button>` : ''}`);
}

function openBookingModal(id) {
  const item = store.items.find(i => i.id === id);
  if (!item) return;
  const today = new Date().toISOString().slice(0, 10);
  const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
  openModal(`Pesan: ${item.name}`, `
    <div class="form-group"><label>Tanggal Mulai</label><input type="date" id="bk_start" value="${today}" min="${today}" onchange="calcBookingTotal()"></div>
    <div class="form-group"><label>Tanggal Selesai</label><input type="date" id="bk_end" value="${tomorrow}" min="${tomorrow}" onchange="calcBookingTotal()"></div>
    <div class="form-group"><label>Pembayaran</label><select id="bk_pay"><option>GoPay</option><option>Transfer Bank</option><option>Kartu Kredit / Debit</option><option>Wallet</option></select></div>
    <div style="background:var(--blue-light);border-radius:10px;padding:12px;" id="bk_summary"><div style="display:flex;justify-content:space-between;font-size:.8rem;"><span>Biaya sewa</span><span id="bk_rent">${rupiah(item.price)}</span></div><div style="display:flex;justify-content:space-between;font-size:.8rem;margin-top:6px;"><span>Biaya layanan (5%)</span><span id="bk_fee">${rupiah(Math.round(item.price * 0.05))}</span></div><div style="display:flex;justify-content:space-between;font-size:.9rem;font-weight:700;margin-top:8px;"><span>Total</span><span id="bk_total">${rupiah(item.price + Math.round(item.price * 0.05) + 25000)}</span></div></div>
  `, `<button class="btn btn-outline" onclick="closeModal()">Batal</button><button class="btn btn-primary" onclick="submitBooking(${item.id},'${item.name}','${item.emoji}')">Konfirmasi</button>`);
  window._bookingItemPrice = item.price;
}

function calcBookingTotal() {
  const start = new Date(document.getElementById('bk_start').value);
  const end = new Date(document.getElementById('bk_end').value);
  const days = Math.max(1, Math.round((end - start) / 86400000));
  const price = window._bookingItemPrice || 150000;
  const rent = price * days;
  const fee = Math.round(rent * 0.05);
  const total = rent + fee + 25000;
  document.getElementById('bk_rent').textContent = `${rupiah(rent)} (${days} hari)`;
  document.getElementById('bk_fee').textContent = rupiah(fee);
  document.getElementById('bk_total').textContent = rupiah(total);
}

function submitBooking(itemId, itemName, emoji) {
  const start = document.getElementById('bk_start').value;
  const end = document.getElementById('bk_end').value;
  const pay = document.getElementById('bk_pay').value;
  if (!start || !end || start >= end) {
    showToast('Tanggal booking tidak valid.', 'error');
    return;
  }
  const days = Math.round((new Date(end) - new Date(start)) / 86400000);
  const price = window._bookingItemPrice || 150000;
  const total = price * days + Math.round(price * days * 0.05) + 25000;
  if (pay === 'Wallet' && walletBalance() < total) {
    showToast('Saldo wallet tidak cukup.', 'error');
    return;
  }
  if (pay === 'Wallet') {
    store.wallet.borrower.push({ id: `TXN${String(store.wallet.borrower.length + 1).padStart(3, '0')}`, label: `Pembayaran ${itemName}`, amount: total, type: 'debit', date: new Date().toISOString().slice(0, 10) });
  }
  const id = 'BK' + String(store.bookings.length + 1).padStart(3, '0');
  store.bookings.push({ id, itemId, item: itemName, emoji, borrower: 'Budi Santoso', borrowerId: 1, tenant: 'Andi Wijaya', tenantId: 2, start, end, days, total, status: 'pending', payment: pay, created: new Date().toISOString().slice(0, 10) });
  closeModal();
  showToast(`Pesanan ${id} berhasil dibuat.`, 'success');
  navigate('my_bookings');
}

function openReviewModal(itemId, itemName) {
  openModal(`Ulasan: ${itemName}`, `
    <div class="form-group"><label>Rating</label><div style="display:flex;gap:8px;font-size:1.5rem;cursor:pointer;">${[1, 2, 3, 4, 5].map(s => `<span onclick="setStarRating(${s})" id="star${s}" style="color:var(--gray-200);">★</span>`).join('')}</div><input type="hidden" id="rv_rating" value="0"></div>
    <div class="form-group"><label>Komentar</label><textarea id="rv_comment"></textarea></div>
  `, `<button class="btn btn-outline" onclick="closeModal()">Batal</button><button class="btn btn-primary" onclick="submitReview(${itemId},'${itemName}')">Kirim</button>`);
}

function setStarRating(n) {
  document.getElementById('rv_rating').value = n;
  [1, 2, 3, 4, 5].forEach(s => {
    const el = document.getElementById(`star${s}`);
    if (el) el.style.color = s <= n ? '#f59e0b' : 'var(--gray-200)';
  });
}

function submitReview(itemId, itemName) {
  const rating = parseInt(document.getElementById('rv_rating').value, 10);
  const comment = document.getElementById('rv_comment').value.trim();
  if (!rating || !comment) {
    showToast('Rating dan komentar wajib diisi.', 'error');
    return;
  }
  store.reviews.push({ id: store.reviews.length + 1, itemId, item: itemName, borrower: 'Budi Santoso', rating, comment, date: new Date().toISOString().slice(0, 10) });
  closeModal();
  showToast('Ulasan dikirim.', 'success');
  navigate(currentPage);
}

function approveBooking(id) {
  const b = store.bookings.find(x => x.id === id);
  if (!b) return;
  b.status = 'active';
  if (b.payment === '-') b.payment = 'GoPay';
  showToast(`Pesanan ${id} diterima.`, 'success');
  navigate(currentPage);
}

function rejectBooking(id) {
  const b = store.bookings.find(x => x.id === id);
  if (!b) return;
  b.status = 'cancelled';
  showToast(`Pesanan ${id} ditolak.`, 'error');
  navigate(currentPage);
}

function completeBooking(id) {
  const b = store.bookings.find(x => x.id === id);
  if (!b) return;
  b.status = 'completed';
  const item = store.items.find(i => i.id === b.itemId);
  if (item) item.status = 'available';
  showToast(`Pesanan ${id} selesai.`, 'success');
  navigate(currentPage);
}

function cancelBooking(id) {
  const b = store.bookings.find(x => x.id === id);
  if (!b) return;
  b.status = 'cancelled';
  showToast(`Pesanan ${id} dibatalkan.`, 'error');
  navigate(currentPage);
}

function suspendUser(id) {
  const u = store.users.find(x => x.id === id);
  if (!u) return;
  u.status = 'suspended';
  showToast('Pengguna ditangguhkan.', 'error');
  navigate(currentPage);
}

function activateUser(id) {
  const u = store.users.find(x => x.id === id);
  if (!u) return;
  u.status = 'active';
  showToast('Pengguna diaktifkan.', 'success');
  navigate(currentPage);
}

function approveKyc(id) {
  const k = store.kycCases.find(x => x.id === id);
  if (!k) return;
  k.status = 'approved';
  showToast(`KYC ${id} disetujui.`, 'success');
  navigate(currentPage);
}

function rejectKyc(id) {
  const k = store.kycCases.find(x => x.id === id);
  if (!k) return;
  k.status = 'pending';
  showToast(`KYC ${id} dikembalikan untuk revisi.`, 'error');
  navigate(currentPage);
}

function approvePayout(id) {
  const p = store.payouts.find(x => x.id === id);
  if (!p) return;
  p.status = 'paid';
  showToast(`Payout ${id} berhasil diproses.`, 'success');
  navigate(currentPage);
}

function resolveTicket(id) {
  const t = store.supportTickets.find(x => x.id === id);
  if (!t) return;
  t.status = 'closed';
  t.updated = new Date().toISOString().slice(0, 10);
  showToast(`Tiket ${id} ditutup.`, 'success');
  navigate(currentPage);
}

function openCreateTicket() {
  openModal('Buat Tiket Support', `
    <div class="form-group"><label>Subjek</label><input type="text" id="st_subject" placeholder="Contoh: Verifikasi payout"></div>
    <div class="form-group"><label>Prioritas</label><select id="st_priority"><option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option></select></div>
    <div class="form-group"><label>Detail Kendala</label><textarea id="st_desc"></textarea></div>
  `, `<button class="btn btn-outline" onclick="closeModal()">Batal</button><button class="btn btn-primary" onclick="submitTicket()">Kirim</button>`);
}

function submitTicket() {
  const subject = document.getElementById('st_subject').value.trim();
  const priority = document.getElementById('st_priority').value;
  if (!subject) {
    showToast('Subjek wajib diisi.', 'error');
    return;
  }
  const id = `TIC${String(store.supportTickets.length + 1).padStart(3, '0')}`;
  store.supportTickets.push({ id, from: store.currentRole === 'tenant' ? 'Andi Wijaya' : 'Budi Santoso', subject, priority, status: 'open', updated: new Date().toISOString().slice(0, 10) });
  closeModal();
  showToast(`Tiket ${id} berhasil dibuat.`, 'success');
  navigate(currentPage);
}

function submitHelpTicket() {
  const subject = document.getElementById('helpSubject')?.value.trim();
  const desc = document.getElementById('helpDesc')?.value.trim();
  if (!subject || !desc) {
    showToast('Subjek dan deskripsi wajib diisi.', 'error');
    return;
  }
  store.supportTickets.push({ id: `TIC${String(store.supportTickets.length + 1).padStart(3, '0')}`, from: 'Budi Santoso', subject, priority: 'medium', status: 'open', updated: new Date().toISOString().slice(0, 10) });
  showToast('Tiket support berhasil dikirim.', 'success');
  navigate('messages');
}

function topUpWallet() {
  const amt = 500000;
  store.wallet.borrower.push({ id: `TXN${String(store.wallet.borrower.length + 1).padStart(3, '0')}`, label: 'Top Up Instan', amount: amt, type: 'credit', date: new Date().toISOString().slice(0, 10) });
  showToast(`Top up berhasil ${rupiah(amt)}.`, 'success');
  navigate('wallet');
}

function openChat(peer) {
  const panel = document.getElementById('chatPanel');
  if (!panel) return;
  panel.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:10px;">
      <div style="font-size:.84rem;font-weight:700;">${peer}</div>
      <div style="background:var(--gray-100);padding:10px;border-radius:10px;font-size:.78rem;align-self:flex-start;max-width:80%;">Halo, ada yang bisa kami bantu?</div>
      <div style="background:var(--blue);color:#fff;padding:10px;border-radius:10px;font-size:.78rem;align-self:flex-end;max-width:80%;">Saya ingin ubah jadwal pickup besok pagi.</div>
      <div style="display:flex;gap:8px;margin-top:8px;"><input type="text" placeholder="Ketik pesan" style="flex:1;"><button class="btn btn-primary btn-sm" onclick="sendSupportMessage()">Kirim</button></div>
    </div>
  `;
}

function sendSupportMessage() {
  showToast('Pesan terkirim.', 'success');
}

function toggleWishlist(itemId) {
  const idx = store.wishlist.indexOf(itemId);
  if (idx >= 0) {
    store.wishlist.splice(idx, 1);
    showToast('Item dihapus dari wishlist.');
  } else {
    store.wishlist.push(itemId);
    showToast('Item ditambahkan ke wishlist.', 'success');
  }
  navigate(currentPage);
}

function renderNotifications() {
  const role = store.currentRole;
  const notifs = store.notifications[role] || [];
  const list = document.getElementById('notifList');
  list.innerHTML = notifs.map(n => `<div class="notif-item ${n.read ? '' : 'notif-unread'}"><div class="notif-icon"><i class="${n.icon}"></i></div><div><div class="notif-text">${n.text}</div><div class="notif-time">${n.time}</div></div></div>`).join('');
  const unread = notifs.some(n => !n.read);
  const dot = document.querySelector('.notif-dot');
  if (dot) dot.style.display = unread ? 'block' : 'none';
}

function toggleNotif(btn) {
  const panel = document.getElementById('notifPanel');
  if (activeNotifBtn && activeNotifBtn !== btn) panel.classList.remove('open');
  panel.classList.toggle('open');
  activeNotifBtn = btn;
}

function markAllRead() {
  const role = store.currentRole;
  (store.notifications[role] || []).forEach(n => { n.read = true; });
  renderNotifications();
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.notif-btn')) {
    document.getElementById('notifPanel')?.classList.remove('open');
  }
});

document.addEventListener('click', (e) => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});

function setFilter(btn, val) {
  const bar = btn.closest('.filter-bar');
  if (!bar) return;
  bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentFilter = val;
}

function filterProducts(q) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  const cards = grid.querySelectorAll('.product-card');
  cards.forEach(c => {
    const name = c.querySelector('.product-name')?.textContent.toLowerCase() || '';
    const cat = c.querySelector('.product-cat')?.textContent.toLowerCase() || '';
    c.style.display = (name.includes(q.toLowerCase()) || cat.includes(q.toLowerCase())) ? '' : 'none';
  });
}

function showToast(msg, type = '') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span><i class="${type === 'success' ? 'bi bi-check-circle-fill' : type === 'error' ? 'bi bi-x-circle-fill' : 'bi bi-info-circle-fill'}"></i></span> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

function logout() {
  store.currentRole = null;
  store.currentUser = null;
  currentPage = 'dashboard';
  document.getElementById('app').style.display = 'none';
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('role-select-screen').style.display = 'flex';
  showToast('Anda berhasil logout.');
}

// ─── CHAT FEATURE ───
function renderChatTenantPage() {
  const currentUserId = getCurrentUserId();
  const relevantChats = store.chats.filter(c => c.user1Id === currentUserId || c.user2Id === currentUserId);
  return `
    <div class="grid-2" style="gap:20px;">
      <div class="card" style="height:600px;display:flex;flex-direction:column;">
        <div class="card-title">Percakapan</div>
        <div style="flex:1;overflow-y:auto;border-bottom:1px solid var(--gray-100);">
          ${relevantChats.map(c => `
            <div class="chat-list-item" onclick="openChatDetail('${c.id}')">
              <div style="flex:1;">
                <div style="font-size:.84rem;font-weight:700;">${c.user1Id === currentUserId ? c.user2Name : c.user1Name}</div>
                <div style="font-size:.74rem;color:var(--gray-500);">${prettyRole(c.user1Id === currentUserId ? c.user2Role : c.user1Role)}</div>
                <div style="font-size:.72rem;color:var(--gray-400);margin-top:4px;">${c.lastMsg}</div>
              </div>
              <div style="text-align:right;font-size:.72rem;color:var(--gray-400);">${c.lastTime}</div>
            </div>
          `).join('')}
        </div>
        <div style="padding:12px;border-top:1px solid var(--gray-100);"><button class="btn btn-primary btn-sm" style="width:100%;" onclick="openNewChatTenant()">+ Chat Baru</button></div>
      </div>
      <div class="card" style="height:600px;display:flex;flex-direction:column;" id="chatDetailPanel">
        <div style="padding:20px;text-align:center;color:var(--gray-400);">Pilih chat untuk memulai percakapan</div>
      </div>
    </div>
  `;
}

function renderChatBorrowerPage() {
  const currentUserId = getCurrentUserId();
  const relevantChats = store.chats.filter(c => c.user1Id === currentUserId || c.user2Id === currentUserId);
  return `
    <div class="grid-2" style="gap:20px;">
      <div class="card" style="height:600px;display:flex;flex-direction:column;">
        <div class="card-title">Percakapan</div>
        <div style="flex:1;overflow-y:auto;border-bottom:1px solid var(--gray-100);">
          ${relevantChats.map(c => `
            <div class="chat-list-item" onclick="openChatDetail('${c.id}')">
              <div style="flex:1;">
                <div style="font-size:.84rem;font-weight:700;">${c.user1Id === currentUserId ? c.user2Name : c.user1Name}</div>
                <div style="font-size:.74rem;color:var(--gray-500);">${prettyRole(c.user1Id === currentUserId ? c.user2Role : c.user1Role)}</div>
                <div style="font-size:.72rem;color:var(--gray-400);margin-top:4px;">${c.lastMsg}</div>
              </div>
              <div style="text-align:right;font-size:.72rem;color:var(--gray-400);">${c.lastTime}</div>
            </div>
          `).join('')}
        </div>
        <div style="padding:12px;border-top:1px solid var(--gray-100);"><button class="btn btn-primary btn-sm" style="width:100%;" onclick="openNewChatBorrower()">+ Chat Baru</button></div>
      </div>
      <div class="card" style="height:600px;display:flex;flex-direction:column;" id="chatDetailPanel">
        <div style="padding:20px;text-align:center;color:var(--gray-400);">Pilih chat untuk memulai percakapan</div>
      </div>
    </div>
  `;
}

function renderChatAdminPage() {
  const currentUserId = getCurrentUserId();
  const relevantChats = store.chats.filter(c => c.user1Id === currentUserId || c.user2Id === currentUserId);
  return `
    <div class="grid-2" style="gap:20px;">
      <div class="card" style="height:600px;display:flex;flex-direction:column;">
        <div class="card-title">Chat Tenant & Peminjam</div>
        <div style="flex:1;overflow-y:auto;border-bottom:1px solid var(--gray-100);">
          ${relevantChats.map(c => `
            <div class="chat-list-item" onclick="openChatDetail('${c.id}')">
              <div style="flex:1;">
                <div style="font-size:.84rem;font-weight:700;">${c.user1Id === currentUserId ? c.user2Name : c.user1Name}</div>
                <div style="font-size:.74rem;color:var(--gray-500);">${prettyRole(c.user1Id === currentUserId ? c.user2Role : c.user1Role)}</div>
                <div style="font-size:.72rem;color:var(--gray-400);margin-top:4px;">${c.lastMsg}</div>
              </div>
              <div style="text-align:right;font-size:.72rem;color:var(--gray-400);">${c.lastTime}</div>
            </div>
          `).join('')}
        </div>
        <div style="padding:12px;border-top:1px solid var(--gray-100);"><button class="btn btn-primary btn-sm" style="width:100%;" onclick="openNewChatAdmin()">+ Chat Baru</button></div>
      </div>
      <div class="card" style="height:600px;display:flex;flex-direction:column;" id="chatDetailPanel">
        <div style="padding:20px;text-align:center;color:var(--gray-400);">Pilih chat untuk memulai percakapan</div>
      </div>
    </div>
  `;
}

function openChatDetail(chatId) {
  const chat = store.chats.find(c => c.id === chatId);
  if (!chat) return;
  
  const panel = document.getElementById('chatDetailPanel');
  const currentUserId = getCurrentUserId();
  
  // Join Socket.io room for this chat
  if (socket && socket.connected) {
    socket.emit('joinChat', {
      chatId: chat.id,
      user1Id: chat.user1Id,
      user2Id: chat.user2Id
    });
    console.log('✅ Joined chat room:', chatId);
  }
  
  panel.innerHTML = `
    <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;" id="messagesContainer">
      ${chat.messages.map(m => `
        <div style="display:flex;${m.sender === currentUserId ? 'justify-content:flex-end' : ''};">
          <div style="background:${m.sender === currentUserId ? 'var(--blue)' : 'var(--gray-100)'};color:${m.sender === currentUserId ? '#fff' : 'var(--gray-900)'};padding:10px 14px;border-radius:10px;max-width:70%;font-size:.82rem;word-wrap:break-word;">
            ${m.text}
            <div style="font-size:.7rem;margin-top:4px;opacity:0.7;">${m.time}</div>
          </div>
        </div>
      `).join('')}
    </div>
    <div style="padding:12px;border-top:1px solid var(--gray-100);display:flex;gap:8px;">
      <input type="text" id="chatInput" placeholder="Ketik pesan..." style="flex:1;border:1px solid var(--gray-200);border-radius:8px;padding:10px;" onkeypress='if(event.key==="Enter") sendChatMessage(${JSON.stringify(chatId)})'>
      <button class="btn btn-primary btn-sm" onclick='sendChatMessage(${JSON.stringify(chatId)})'>Kirim</button>
    </div>
  `;
  
  // Listen for incoming messages
  if (socket && socket.connected) {
    socket.off('receiveMessage'); // Remove old listeners
    socket.on('receiveMessage', (message) => {
      console.log('📨 Message received:', message);
      
      // Add message to store
      const currentChat = store.chats.find(c => c.id === chatId);
      if (currentChat && message.sender !== currentUserId) {
        currentChat.messages.push({
          sender: message.sender,
          text: message.text,
          time: message.time
        });
        
        // Re-render messages
        const container = document.getElementById('messagesContainer');
        if (container) {
          const newMsg = document.createElement('div');
          newMsg.style.display = 'flex';
          newMsg.innerHTML = `
            <div style="background:var(--gray-100);color:var(--gray-900);padding:10px 14px;border-radius:10px;max-width:70%;font-size:.82rem;word-wrap:break-word;">
              ${message.text}
              <div style="font-size:.7rem;margin-top:4px;opacity:0.7;">${message.time}</div>
            </div>
          `;
          container.appendChild(newMsg);
          container.scrollTop = container.scrollHeight;
        }
      }
    });
  }
  
  // Scroll to bottom
  setTimeout(() => {
    const container = document.getElementById('messagesContainer');
    if (container) container.scrollTop = container.scrollHeight;
  }, 0);
}

function sendChatMessage(chatId) {
  const input = document.getElementById('chatInput');
  const msg = input?.value.trim();
  if (!msg) {
    showToast('Ketik pesan terlebih dahulu.', 'error');
    return;
  }
  
  const chat = store.chats.find(c => c.id === chatId);
  if (!chat) return;
  
  const currentUserId = getCurrentUserId();
  const now = new Date();
  const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  
  const messageData = {
    chatId: chat.id,
    user1Id: chat.user1Id,
    user2Id: chat.user2Id,
    senderId: currentUserId,
    senderName: getCurrentUserName(),
    text: msg,
    timestamp: time
  };
  
  // Send via Socket.io if connected
  if (socket && socket.connected) {
    socket.emit('sendMessage', messageData);
    console.log('📤 Message sent via Socket.io:', msg);
  } else {
    console.log('⚠️ Socket not connected, saving locally only');
  }
  
  // Update local store and display immediately
  chat.messages.push({ sender: currentUserId, text: msg, time });
  chat.lastMsg = msg;
  chat.lastTime = now.toISOString().slice(0, 10) + ' ' + time;
  
  // Display message immediately in UI
  const container = document.getElementById('messagesContainer');
  if (container) {
    const newMsg = document.createElement('div');
    newMsg.style.display = 'flex';
    newMsg.style.justifyContent = 'flex-end';
    newMsg.innerHTML = `
      <div style="background:var(--blue);color:#fff;padding:10px 14px;border-radius:10px;max-width:70%;font-size:.82rem;word-wrap:break-word;">
        ${msg}
        <div style="font-size:.7rem;margin-top:4px;opacity:0.7;">${time}</div>
      </div>
    `;
    container.appendChild(newMsg);
    container.scrollTop = container.scrollHeight;
  }
  
  input.value = '';
  showToast('Pesan terkirim.', 'success');
}

function openNewChatTenant() {
  const currentUserId = getCurrentUserId();
  const borrowers = store.users.filter(u => u.role === 'borrower' && !store.chats.some(c => (c.user1Id === u.id && c.user2Id === currentUserId) || (c.user2Id === u.id && c.user1Id === currentUserId)));
  openModal('Mulai Chat Baru', `
    <div class="form-group">
      <label>Pilih Peminjam</label>
      <select id="newChatUser">
        <option value="">-- Pilih Peminjam --</option>
        ${borrowers.map(b => `<option value="${b.id}">${b.name}</option>`).join('')}
      </select>
    </div>
  `, `<button class="btn btn-outline" onclick="closeModal()">Batal</button><button class="btn btn-primary" onclick="createNewChat('tenant')">Mulai Chat</button>`);
}

function openNewChatBorrower() {
  const currentUserId = getCurrentUserId();
  const tenants = store.users.filter(u => u.role === 'tenant' && !store.chats.some(c => (c.user1Id === currentUserId && c.user2Id === u.id) || (c.user2Id === currentUserId && c.user1Id === u.id)));
  openModal('Mulai Chat Baru', `
    <div class="form-group">
      <label>Pilih Penyewa/Tenant</label>
      <select id="newChatUser">
        <option value="">-- Pilih Tenant --</option>
        ${tenants.map(t => `<option value="${t.id}">${t.name}</option>`).join('')}
      </select>
    </div>
  `, `<button class="btn btn-outline" onclick="closeModal()">Batal</button><button class="btn btn-primary" onclick="createNewChat('borrower')">Mulai Chat</button>`);
}

function openNewChatAdmin() {
  const currentUserId = getCurrentUserId();
  const users = store.users.filter(u => ['tenant', 'borrower'].includes(u.role) && !store.chats.some(c => (c.user1Id === currentUserId && c.user2Id === u.id) || (c.user2Id === currentUserId && c.user1Id === u.id)));
  openModal('Mulai Chat Baru', `
    <div class="form-group">
      <label>Pilih Pengguna</label>
      <select id="newChatUser">
        <option value="">-- Pilih Pengguna --</option>
        ${users.map(u => `<option value="${u.id}">${u.name} (${prettyRole(u.role)})</option>`).join('')}
      </select>
    </div>
  `, `<button class="btn btn-outline" onclick="closeModal()">Batal</button><button class="btn btn-primary" onclick="createNewChat('admin')">Mulai Chat</button>`);
}

function createNewChat(role) {
  const userId = parseInt(document.getElementById('newChatUser').value, 10);
  if (!userId) {
    showToast('Pilih pengguna terlebih dahulu.', 'error');
    return;
  }
  
  const otherUser = store.users.find(u => u.id === userId);
  if (!otherUser) return;
  
  const newChatId = Math.max(...store.chats.map(c => parseInt(c.id.slice(2), 10)), 0) + 1;
  
  const currentUserId = getCurrentUserId();
  const currentName = getCurrentUserName();
  if (role === 'tenant') {
    store.chats.push({
      id: `CH${String(newChatId).padStart(3, '0')}`,
      user1Id: userId,
      user1Name: otherUser.name,
      user1Role: 'borrower',
      user2Id: currentUserId,
      user2Name: currentName,
      user2Role: 'tenant',
      lastMsg: 'Chat dimulai',
      lastTime: new Date().toISOString(),
      messages: []
    });
  } else if (role === 'borrower') {
    store.chats.push({
      id: `CH${String(newChatId).padStart(3, '0')}`,
      user1Id: currentUserId,
      user1Name: currentName,
      user1Role: 'borrower',
      user2Id: userId,
      user2Name: otherUser.name,
      user2Role: 'tenant',
      lastMsg: 'Chat dimulai',
      lastTime: new Date().toISOString(),
      messages: []
    });
  } else {
    store.chats.push({
      id: `CH${String(newChatId).padStart(3, '0')}`,
      user1Id: currentUserId,
      user1Name: currentName,
      user1Role: 'admin',
      user2Id: userId,
      user2Name: otherUser.name,
      user2Role: otherUser.role,
      lastMsg: 'Chat dimulai',
      lastTime: new Date().toISOString(),
      messages: []
    });
  }
  
  closeModal();
  showToast('Chat baru dimulai.', 'success');
  if (store.currentRole === 'tenant') navigate('chat_tenant');
  else if (store.currentRole === 'borrower') navigate('chat_borrower');
  else navigate('chat_admin');
}

// ─── ADMIN MANAGEMENT ───
function renderAdminManagementPage() {
  const admins = store.users.filter(u => u.isAdmin);
  const nonAdmins = store.users.filter(u => !u.isAdmin);
  return `
    <div class="grid-2" style="gap:20px;">
      <div class="card">
        <div class="card-title">Admin Saat Ini (${admins.length})</div>
        ${admins.length === 0 ? '<div class="empty-state"><div class="empty-text">Belum ada admin lain</div></div>' : `
          <div style="display:flex;flex-direction:column;gap:12px;">
            ${admins.map(u => `
              <div style="display:flex;align-items:center;justify-content:space-between;padding:12px;border:1px solid var(--gray-100);border-radius:10px;">
                <div>
                  <div style="font-size:.85rem;font-weight:700;">${u.name}</div>
                  <div style="font-size:.72rem;color:var(--gray-500);">${u.email}</div>
                </div>
                <button class="btn btn-danger btn-sm" onclick="removeAdminRole(${u.id})">Hapus Admin</button>
              </div>
            `).join('')}
          </div>
        `}
      </div>
      <div class="card">
        <div class="card-title">Jadikan Admin (${nonAdmins.length})</div>
        ${nonAdmins.length === 0 ? '<div class="empty-state"><div class="empty-text">Semua pengguna sudah admin</div></div>' : `
          <div style="display:flex;flex-direction:column;gap:12px;">
            ${nonAdmins.map(u => `
              <div style="display:flex;align-items:center;justify-content:space-between;padding:12px;border:1px solid var(--gray-100);border-radius:10px;">
                <div>
                  <div style="font-size:.85rem;font-weight:700;">${u.name}</div>
                  <div style="font-size:.72rem;color:var(--gray-500);">${u.email} • ${prettyRole(u.role)}</div>
                </div>
                <button class="btn btn-primary btn-sm" onclick="makeAdmin(${u.id})">Jadikan Admin</button>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </div>
  `;
}

function makeAdmin(userId) {
  const user = store.users.find(u => u.id === userId);
  if (!user) return;
  user.isAdmin = true;
  showToast(`${user.name} sekarang admin.`, 'success');
  navigate('admin_management');
}

function removeAdminRole(userId) {
  const user = store.users.find(u => u.id === userId);
  if (!user) return;
  if (user.email.toLowerCase() === authConfig.admin.creds.email.toLowerCase()) {
    showToast('Tidak bisa menghapus role admin utama.', 'error');
    return;
  }
  user.isAdmin = false;
  showToast(`${user.name} tidak lagi menjadi admin.`, 'success');
  navigate('admin_management');
}

// ─── ADDITIONAL RENDER FUNCTIONS (stubs for missing pages) ───
function renderSettingsPage() {
  return `
    <div class="card">
      <div class="card-title">Pengaturan Akun</div>
      <div class="form-group"><label>Nama</label><input type="text" value="${store.currentUser?.name || 'User'}"></div>
      <div class="form-group"><label>Email</label><input type="text" value="${store.currentUser?.email || 'user@mail.com'}" disabled></div>
      <button class="btn btn-primary" onclick="showToast('Pengaturan disimpan', 'success')">Simpan Perubahan</button>
    </div>
  `;
}

function renderMessagesPage() {
  return renderChatBorrowerPage();
}

function renderMyBookingsPage() {
  const myBookings = store.bookings.filter(b => b.borrowerId === 1);
  return `<div style="display:flex;flex-direction:column;gap:12px;">${myBookings.map(b => `<div class="card"><div style="display:flex;gap:12px;align-items:center;"><div style="font-size:1.1rem;"><i class="${b.emoji}"></i></div><div style="flex:1;"><strong>${b.item}</strong><div style="font-size:.74rem;color:var(--gray-500);">${b.tenant} • ${b.start} - ${b.end}</div></div><div>${statusBadge(b.status)}</div>${['pending', 'active'].includes(b.status) ? `<button class="btn btn-danger btn-sm" onclick="cancelBooking('${b.id}')">Batalkan</button>` : ''}</div></div>`).join('')}</div>`;
}

function renderHistoryPage() {
  const completed = store.bookings.filter(b => b.borrowerId === 1 && ['completed', 'cancelled'].includes(b.status));
  return `<div style="display:flex;flex-direction:column;gap:12px;">${completed.map(b => `<div class="card"><div style="display:flex;gap:12px;align-items:center;"><div style="font-size:1.1rem;"><i class="${b.emoji}"></i></div><div style="flex:1;"><strong>${b.item}</strong><div style="font-size:.74rem;color:var(--gray-500);">${b.tenant} • ${b.start} - ${b.end}</div></div><div>${statusBadge(b.status)}</div></div></div>`).join('')}</div>`;
}

function renderWalletPage() {
  const trans = store.wallet.borrower;
  const balance = walletBalance();
  return `
    <div class="grid-2" style="gap:20px;">
      <div class="card">
        <div style="background:linear-gradient(135deg,var(--blue),var(--blue-dark));color:#fff;padding:20px;border-radius:12px;margin-bottom:16px;">
          <div style="font-size:.8rem;color:rgba(255,255,255,.7);">SALDO WALLET</div>
          <div style="font-size:1.8rem;font-weight:800;margin-top:6px;">${rupiah(balance)}</div>
        </div>
        <button class="btn btn-primary" style="width:100%;margin-bottom:10px;" onclick="topUpWallet()">+ Top Up</button>
        <button class="btn btn-outline" style="width:100%;" onclick="showToast('Lihat cara penggunaan', 'info')">Bantuan</button>
      </div>
      <div class="card">
        <div class="card-title">Transaksi</div>
        ${trans.map(t => `
          <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--gray-100);">
            <div>
              <div style="font-size:.82rem;font-weight:700;">${t.label}</div>
              <div style="font-size:.72rem;color:var(--gray-500);">${t.date}</div>
            </div>
            <div style="color:${t.type === 'credit' ? 'var(--green)' : 'var(--red)'};">
              ${t.type === 'credit' ? '+' : '-'} ${rupiah(t.amount)}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function walletBalance() {
  const trans = store.wallet.borrower;
  const balance = trans.reduce((sum, t) => sum + (t.type === 'credit' ? t.amount : -t.amount), 2500000);
  return Math.max(0, balance);
}

function renderReviewsBorrowerPage() {
  return `<div style="display:flex;flex-direction:column;gap:12px;">${store.reviews.filter(r => r.borrower === 'Budi Santoso').map(r => `<div class="card"><div style="display:flex;justify-content:space-between;"><strong>${r.item}</strong><span style="color:#f59e0b;">${'★'.repeat(r.rating)}</span></div><div style="font-size:.75rem;color:var(--gray-500);">${r.date}</div><p style="margin-top:8px;font-size:.82rem;color:var(--gray-700);">${r.comment}</p></div>`).join('')}</div>`;
}

function renderHelpCenterPage() {
  return `
    <div class="card">
      <div class="card-title">Hubungi Kami</div>
      <div style="margin-top:20px;">
        <div class="form-group"><label>Subjek Pertanyaan</label><input type="text" id="helpSubject" placeholder="Contoh: Bagaimana cara mencari alat?"></div>
        <div class="form-group"><label>Deskripsi</label><textarea id="helpDesc" placeholder="Jelaskan pertanyaan atau masalah anda..."></textarea></div>
        <button class="btn btn-primary" onclick="submitHelpTicket()">Kirim Pertanyaan</button>
      </div>
    </div>
  `;
}


