window.onload = () => {
    // 4 saniyə gözləyirik (loqonun gəlməsi və bir az qalması üçün)
    setTimeout(() => {
        const overlay = document.getElementById('intro-overlay');
        const mainApp = document.getElementById('main-app');

        // Overlay-i yuxarı sürüşdürərək və ya itərək yox et
        overlay.style.opacity = '0';
        overlay.style.transform = 'translateY(-100%)'; // Yuxarı doğru qalxma effekti

        setTimeout(() => {
            overlay.classList.add('hidden');
            mainApp.classList.remove('hidden');
            
            // Sayfa açıldıqdan sonra xoş gəldin mesajını bir az gecikmə ilə göstər
            const botMsg = document.querySelector('.bot-msg');
            botMsg.style.opacity = '0';
            setTimeout(() => {
                botMsg.style.transition = 'opacity 1s';
                botMsg.style.opacity = '1';
            }, 500);
        }, 1200); // Overlay animasiyasının bitməsini gözləyirik
    }, 4500); 
};

function send() {
    const input = document.getElementById('user-input');
    const screen = document.getElementById('chat-screen');
    if(input.value.trim() !== "") {
        screen.innerHTML += `<div class="msg" style="align-self: flex-end; background: #00d2ff; color: #000;">${input.value}</div>`;
        input.value = "";
        screen.scrollTop = screen.scrollHeight;
    }
}
