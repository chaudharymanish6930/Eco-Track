const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;

        function setTheme(theme) {
            html.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            themeToggle.innerHTML = theme === 'dark' 
                ? '<i class="fa-solid fa-moon"></i>' 
                : '<i class="fa-solid fa-sun"></i>';
        }

        const savedTheme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        setTheme(savedTheme);

        themeToggle.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            setTheme(current === 'dark' ? 'light' : 'dark');
        });

// Page navigation
function showScan() {
    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('scan-view').classList.remove('hidden');
    window.scrollTo(0, 0);
}

function showHome() {
    document.getElementById('scan-view').classList.add('hidden');
    document.getElementById('home-view').classList.remove('hidden');
    closeModal();
}

// Demo selection & simulation
function simulateScan() {
    const input = document.getElementById('product-id').value.trim().toUpperCase();
    let productName = "Custom Natural Product";
    let id = input || "ECO-2026-XXXX";

    if (input.includes("7841")) productName = "Pure Himalayan Honey";
    else if (input.includes("3192")) productName = "Organic A2 Cow Milk";
    else if (input.includes("4578")) productName = "Ashwagandha Root Powder";
    else if (input.includes("8219")) productName = "Turmeric Golden Milk Mix";
    else if (input.includes("2460")) productName = "Natural Plant-Based Whey Protein";
    else if (input.includes("6935")) productName = "Triphala Digestive Powder";

    showResult(productName, id);
}

function selectDemo(index) {
    const demos = [
        { name: "Pure Himalayan Honey",        id: "ECO-2026-7841" },
        { name: "Organic A2 Cow Milk",         id: "ECO-2026-3192" },
        { name: "Ashwagandha Root Powder",     id: "ECO-2026-4578" },
        { name: "Turmeric Golden Milk Mix",    id: "ECO-2026-8219" },
        { name: "Natural Plant-Based Whey Protein", id: "ECO-2026-2460" },
        { name: "Triphala Digestive Powder",   id: "ECO-2026-6935" }
    ];
    showResult(demos[index].name, demos[index].id);
}

function showResult(name, id) {
    document.getElementById('modal-product-name').textContent = name;
    document.getElementById('modal-product-id').textContent = id;
    
    const modal = document.getElementById('result-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    // Animate progress bars
    setTimeout(() => {
        const bars = document.querySelectorAll('.progress-bar');
        bars.forEach(bar => {
            const w = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => bar.style.width = w, 100);
        });
    }, 300);
}

function closeModal() {
    const modal = document.getElementById('result-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Chatbot (placeholder functionality)
function toggleChat() {
    const chat = document.getElementById('chat-window');
    chat.classList.toggle('hidden');
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const messages = document.getElementById('chat-messages');
    
    if (!input.value.trim()) return;

    const userMsg = document.createElement('div');
    userMsg.className = 'text-right mb-2';
    userMsg.innerHTML = `<div class="inline-block bg-emerald-100 rounded-lg px-4 py-2">${input.value}</div>`;
    messages.appendChild(userMsg);

    // Fake AI response
    setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.className = 'mb-2';
        aiMsg.innerHTML = `<div class="inline-block bg-gray-100 rounded-lg px-4 py-2">Thanks for asking! This is a demo response 😊</div>`;
        messages.appendChild(aiMsg);
        messages.scrollTop = messages.scrollHeight;
    }, 800);

    input.value = '';
    messages.scrollTop = messages.scrollHeight;
}

// On page load
window.onload = () => {
    console.log('%c✅ EcoTrack - Natural Products Edition ready!', 'color:#10b981; font-weight:bold');
    
    // Animate feature cards
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach((c, i) => {
        c.style.transitionDelay = `${i * 120}ms`;
        c.classList.add('section-fade');
        setTimeout(() => c.classList.add('visible'), 900);
    });

    // Pulse scan button
    const scanBtn = document.querySelector('button[onclick="showScan()"]');
    if (scanBtn) scanBtn.style.animation = 'pulse 3s infinite';
};

