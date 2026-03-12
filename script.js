// function showScan() {
//     document.getElementById('home-view').classList.add('hidden')
//     document.getElementById('scan-view').classList.remove('hidden')
//     window.scrollTo(0, 0)
// }

// function showHome() {
//     document.getElementById('scan-view').classList.add('hidden')
//     document.getElementById('home-view').classList.remove('hidden')
//     closeModal()
// }

// function simulateScan() {
//     const input = document.getElementById('product-id').value.trim().toUpperCase()
//     let productName = "Custom Natural Product"
//     let id = input || "ECO-2026-XXXX"

//     if (input.includes("7841")) productName = "Pure Himalayan Honey"
//     else if (input.includes("3192")) productName = "Organic A2 Cow Milk"
//     else if (input.includes("4578")) productName = "Ashwagandha Root Powder"
//     else if (input.includes("8219")) productName = "Turmeric Golden Milk Mix"
//     else if (input.includes("2460")) productName = "Natural Plant-Based Whey Protein"
//     else if (input.includes("6935")) productName = "Triphala Digestive Powder"

//     showResult(productName, id)
// }

// function selectDemo(index) {
//     const demos = [
//         { name: "Pure Himalayan Honey", id: "ECO-2026-7841" },
//         { name: "Organic A2 Cow Milk", id: "ECO-2026-3192" },
//         { name: "Ashwagandha Root Powder", id: "ECO-2026-4578" },
//         { name: "Turmeric Golden Milk Mix", id: "ECO-2026-8219" },
//         { name: "Natural Plant-Based Whey Protein", id: "ECO-2026-2460" },
//         { name: "Triphala Digestive Powder", id: "ECO-2026-6935" }
//     ]
//     showResult(demos[index].name, demos[index].id)
// }

// function showResult(name, id) {
//     document.getElementById('modal-product-name').textContent = name
//     document.getElementById('modal-product-id').textContent = id
//     document.getElementById('result-modal').classList.remove('hidden')
//     document.getElementById('result-modal').classList.add('flex')
    
//     setTimeout(() => {
//         const bars = document.querySelectorAll('.progress-bar')
//         bars.forEach(bar => {
//             const w = bar.style.width
//             bar.style.width = '0%'
//             setTimeout(() => bar.style.width = w, 100)
//         })
//     }, 300)
// }

// function closeModal() {
//     const modal = document.getElementById('result-modal')
//     modal.classList.add('hidden')
//     modal.classList.remove('flex')
// }

// window.onload = () => {

//     console.log('%c✅ EcoTrack - Natural Products Edition ready!', 'color:#10b981; font-weight:bold')
    
//     const cards = document.querySelectorAll('.card-hover')
//     cards.forEach((c, i) => {
//         c.style.transitionDelay = `${i * 120}ms`
//         c.classList.add('section-fade')
//         setTimeout(() => c.classList.add('visible'), 900)
//     })

//     const scanBtn = document.querySelector('button[onclick="showScan()"]')
//     if (scanBtn) scanBtn.style.animation = 'pulse 3s infinite'


//     /* ---------- DARK MODE LOAD ---------- */

//     const savedTheme = localStorage.getItem("theme")

//     if(savedTheme === "dark"){
//         document.body.classList.add("dark-mode")
//     }

// }



// /* =====================================================
//    DARK / LIGHT MODE TOGGLE
// ===================================================== */

// function toggleTheme(){

//     const body = document.body
//     body.classList.toggle("dark-mode")

//     if(body.classList.contains("dark-mode")){
//         localStorage.setItem("theme","dark")
//     }else{
//         localStorage.setItem("theme","light")
//     }

// }



// /* =====================================================
//    AI CHATBOT FUNCTIONS
// ===================================================== */

// function toggleChat(){

//     const chat = document.getElementById("chat-window")
//     chat.classList.toggle("hidden")

// }

// function sendMessage(){

//     const input = document.getElementById("chat-input")
//     const messages = document.getElementById("chat-messages")

//     const userMsg = input.value.trim()

//     if(!userMsg) return


//     /* USER MESSAGE */

//     messages.innerHTML += `
//         <div class="text-right mb-2">
//             🧑 ${userMsg}
//         </div>
//     `


//     /* BOT RESPONSE LOGIC */

//     let botReply = "I can help verify natural products using EcoTrack."


//     if(userMsg.toLowerCase().includes("honey")){
//         botReply = "Honey purity is verified using QR traceability from farm to jar."
//     }

//     else if(userMsg.toLowerCase().includes("milk")){
//         botReply = "Organic A2 milk is verified through farm blockchain records."
//     }

//     else if(userMsg.toLowerCase().includes("ayurvedic")){
//         botReply = "EcoTrack checks Ayurvedic herbs using AI purity detection."
//     }

//     else if(userMsg.toLowerCase().includes("scan")){
//         botReply = "Click 'Scan Natural Product' and enter the QR product ID."
//     }


//     /* BOT MESSAGE DELAY */

//     setTimeout(()=>{

//         messages.innerHTML += `
//             <div class="mb-2">
//                 🤖 ${botReply}
//             </div>
//         `

//         messages.scrollTop = messages.scrollHeight

//     },600)


//     input.value = ""

// }

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







        function showScan() {
            document.getElementById('home-view').classList.add('hidden')
            document.getElementById('scan-view').classList.remove('hidden')
            window.scrollTo(0, 0)
        }

        function showHome() {
            document.getElementById('scan-view').classList.add('hidden')
            document.getElementById('home-view').classList.remove('hidden')
            closeModal()
        }

        function simulateScan() {
            const input = document.getElementById('product-id').value.trim().toUpperCase()
            let productName = "Custom Natural Product"
            let id = input || "ECO-2026-XXXX"

            if (input.includes("7841")) productName = "Pure Himalayan Honey"
            else if (input.includes("3192")) productName = "Organic A2 Cow Milk"
            else if (input.includes("4578")) productName = "Ashwagandha Root Powder"
            else if (input.includes("8219")) productName = "Turmeric Golden Milk Mix"
            else if (input.includes("2460")) productName = "Natural Plant-Based Whey Protein"
            else if (input.includes("6935")) productName = "Triphala Digestive Powder"

            showResult(productName, id)
        }

        function selectDemo(index) {
            const demos = [
                { name: "Pure Himalayan Honey", id: "ECO-2026-7841" },
                { name: "Organic A2 Cow Milk", id: "ECO-2026-3192" },
                { name: "Ashwagandha Root Powder", id: "ECO-2026-4578" },
                { name: "Turmeric Golden Milk Mix", id: "ECO-2026-8219" },
                { name: "Natural Plant-Based Whey Protein", id: "ECO-2026-2460" },
                { name: "Triphala Digestive Powder", id: "ECO-2026-6935" }
            ]
            showResult(demos[index].name, demos[index].id)
        }

        function showResult(name, id) {
            document.getElementById('modal-product-name').textContent = name
            document.getElementById('modal-product-id').textContent = id
            document.getElementById('result-modal').classList.remove('hidden')
            document.getElementById('result-modal').classList.add('flex')
            
            setTimeout(() => {
                const bars = document.querySelectorAll('.progress-bar')
                bars.forEach(bar => {
                    const w = bar.style.width
                    bar.style.width = '0%'
                    setTimeout(() => bar.style.width = w, 100)
                })
            }, 300)
        }

        function closeModal() {
            const modal = document.getElementById('result-modal')
            modal.classList.add('hidden')
            modal.classList.remove('flex')
        }

        window.onload = () => {
            console.log('%c✅ EcoTrack - Natural Products Edition ready!', 'color:#10b981; font-weight:bold')
            
            const cards = document.querySelectorAll('.card-hover')
            cards.forEach((c, i) => {
                c.style.transitionDelay = `${i * 120}ms`
                c.classList.add('section-fade')
                setTimeout(() => c.classList.add('visible'), 900)
            })

            const scanBtn = document.querySelector('button[onclick="showScan()"]')
            if (scanBtn) scanBtn.style.animation = 'pulse 3s infinite'
        }