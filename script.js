// Sayt açılandan 3 saniyə sonra animasiyanı yox et və çatı göstər
window.onload = () => {
    setTimeout(() => {
        document.getElementById('intro-screen').style.display = 'none';
        const chat = document.getElementById('chat-container');
        chat.classList.remove('hidden');
        chat.style.opacity = "1";
    }, 3000);
};

function sendMessage() {
    const input = document.getElementById('user-input');
    const window = document.getElementById('chat-window');
    
    if (input.value.trim() !== "") {
        window.innerHTML += `<p><b>Siz:</b> ${input.value}</p>`;
        
        // Burada Süni İntellekt API-nə sorğu göndəriləcək
        // Hələlik sadə bir avtomatik cavab:
        setTimeout(() => {
            window.innerHTML += `<p style="color: #38bdf8"><b>AI:</b> Sənə necə kömək edə bilərəm?</p>`;
            window.scrollTop = window.scrollHeight;
        }, 1000);
        
        input.value = "";
    }
}
