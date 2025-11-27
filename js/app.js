// --- 模擬後端資料庫 (使用 localStorage) ---
const DB_KEY = 'waterTrackerUsers';
const SESSION_KEY = 'waterTrackerCurrentUser';

// --- 狀態變數 ---
let currentUser = null;
let timerInterval = null;

// --- 初始化 ---
document.addEventListener('DOMContentLoaded', () => {
    checkSession();
    startClock();
});

// --- 時鐘功能 (實時顯示) ---
function startClock() {
    updateTime(); // 立即執行一次
    timerInterval = setInterval(updateTime, 1000);
}

function updateTime() {
    const now = new Date();
    
    // 日期格式
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    document.getElementById('current-date').textContent = now.toLocaleDateString('zh-TW', dateOptions);

    // 時間格式 (實時)
    const timeString = now.toLocaleTimeString('zh-TW', { hour12: false });
    document.getElementById('real-time-clock').textContent = timeString;
}

// --- 認證系統 (Auth) ---
// ... 其余所有 JavaScript 函数保持不变 ...
