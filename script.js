// Sayt yüklənəndə animasiya məntiqi
window.onload = () => {
    // 1. Loqo animasiyasının bitməsini gözlə (CSS-də 2.5s təyin edilib)
    setTimeout(() => {
        const intro = document.getElementById('intro-screen');
        const main = document.getElementById('main-container');

        // Açılış ekranını yavaşca itir
        intro.style.opacity = '0';
        
        // Tamamilə yox olduqdan sonra (1s sora) çat ekranını göstər
        setTimeout(() => {
            intro.style.display = 'none'; // Ekrandan tam çıxar
            main.classList.remove('hidden'); // Çatı göstər
            
            // Ekran skrolunu bərpa et (əgər çatın daxilində lazımdırsa)
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }, 1000); 
        
    }, 2500); // 2.5 saniyə gözlə (loqo animasiyası vaxtı)
};

// Mesaj göndərmə funksiyası
function sendMessage() {
    const input = document.getElementById('user-input');
    const window = document.getElementById('chat-window');
    const messageText = input.value.trim();
    
    if (messageText !== "") {
        // 1. İstifadəçinin mesajını ekrana əlavə et
        window.innerHTML += `
            <div class="message user-message">
                <p>${messageText}</p>
            </div>
        `;
        
        // 2. Giriş sahəsini təmizlə
        input.value = "";
        
        // 3. Avtomatik olaraq aşağı skrol et
        window.scrollTop = window.scrollHeight;

        // 4. (Hələlik) Sadə süni intellekt cavabını simulyasiya et
        setTimeout(() => {
            window.innerHTML += `
                <div class="message ai-message">
                    <p>Mən sizin mesajınızı aldım: "<i>${messageText}</i>". İndi API ilə bağlantı qurmağı öyrənirəm!</p>
                </div>
            `;
            // Yenidən aşağı skrol et
            window.scrollTop = window.scrollHeight;
        }, 1500);
    }
}

// "Enter" düyməsini sıxanda mesajı göndər
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
