

    // Gündüz/Gece modu geçişi
    const toggleModeBtn = document.getElementById('toggleMode');
    let isNightMode = false;
    toggleModeBtn.addEventListener('click', function() {
      const readingArea = document.getElementById('readingArea');
      isNightMode = !isNightMode;
      if(isNightMode) {
        readingArea.style.backgroundColor = '#2c2c2c';
        readingArea.style.color = '#f1f1f1';
        toggleModeBtn.textContent = 'Gündüz Modu';
      } else {
        readingArea.style.backgroundColor = '#fbf0cb';
        readingArea.style.color = '#000';
        toggleModeBtn.textContent = 'Gece Modu';
      }
    });

 

  

    let fontSize = 1; // Başlangıç font-size (rem cinsinden)

const root = document.documentElement;
const increaseFontBtn = document.getElementById('increaseFont');
const decreaseFontBtn = document.getElementById('decreaseFont');

function updateFontSizeWithIdle(change) {
    fontSize += change;
    if (fontSize < 0.8) fontSize = 0.8; // Min limit
    if (fontSize > 2.5) fontSize = 2.5; // Max limit

    // `requestIdleCallback` ile idle zamanlarda font büyüklüğünü güncelle
    requestIdleCallback(() => {
        root.style.setProperty('--font-size', `${fontSize}rem`);
    });
}

increaseFontBtn.addEventListener('click', () => updateFontSizeWithIdle(0.1));
decreaseFontBtn.addEventListener('click', () => updateFontSizeWithIdle(-0.1));
