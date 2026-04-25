window.onload = () => {
    // 3 saniyəlik giriş animasiyası
    setTimeout(() => {
        const loader = document.getElementById('loader-wrapper');
        const app = document.getElementById('app');

        loader.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        loader.style.opacity = '0';
        loader.style.transform = 'scale(1.2)';

        setTimeout(() => {
            loader.classList.add('hidden');
            app.classList.remove('hidden');
            
            // Mesajın animasiya ilə gəlməsi üçün cüzi gecikmə
            const initialMsg = document.querySelector('.msg-bubble');
            initialMsg.style.animationDelay = '0.5s';
        }, 800);
    }, 3000);
};

function processMessage() {
    const input = document.getElementById('user-input');
    const chatArea = document.getElementById('chat-area');
    
    if (input.value.trim() !== "") {
        // İstifadəçi mesajı + animasiya
        const userDiv = document.createElement('div');
        userDiv.className = 'msg-bubble user anim-fade-up';
        userDiv.textContent = input.value;
        chatArea.appendChild(userDiv);
        
        const text = input.value;
        input.value = "";
        chatArea.scrollTop = chatArea.scrollHeight;

        // Botun cavabı
        setTimeout(() => {
            const botDiv = document.createElement('div');
            botDiv.className = 'msg-bubble bot anim-fade-up';
            botDiv.innerHTML = `<i class="fas fa-sparkles"></i> Sizi dinləyirəm... "${text}" haqqında nə düşünürsünüz?`;
            chatArea.appendChild(botDiv);
            chatArea.scrollTop = chatArea.scrollHeight;
        }, 1200);
    }
}

// Enter düyməsi dəstəyi
document.getElementById('user-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') processMessage();
});
