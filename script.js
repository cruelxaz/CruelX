window.onload = () => {
    // 3 saniyəlik yüklənmə simulyasiyası
    setTimeout(() => {
        const loader = document.getElementById('loader-wrapper');
        const app = document.getElementById('app-container');

        loader.style.opacity = '0';
        setTimeout(() => {
            loader.classList.add('hidden');
            app.classList.remove('hidden');
            app.style.animation = 'fadeIn 1s forwards';
        }, 500);
    }, 3000);
};

function handleMessage() {
    const input = document.getElementById('user-input');
    const chatBody = document.getElementById('chat-body');
    
    if (input.value.trim() !== "") {
        // İstifadəçi mesajı
        const userDiv = document.createElement('div');
        userDiv.className = 'msg user';
        userDiv.textContent = input.value;
        chatBody.appendChild(userDiv);
        
        const text = input.value;
        input.value = "";
        chatBody.scrollTop = chatBody.scrollHeight;

        // Bot cavabı (Simulyasiya)
        setTimeout(() => {
            const botDiv = document.createElement('div');
            botDiv.className = 'msg bot';
            botDiv.textContent = "Hazırda üzərimdə iş gedir, amma səni eşitdim: " + text;
            chatBody.appendChild(botDiv);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }
}

// Enter düyməsi ilə göndərmə
document.getElementById('user-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleMessage();
});
