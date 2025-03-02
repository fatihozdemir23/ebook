const leftMenu = document.getElementById('leftMenu');
const openLeftMenuBtn = document.getElementById('openLeftMenu');
openLeftMenuBtn.addEventListener('click', function() {
  leftMenu.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', () => {
    // Tüm başlıkları seç
    const toggles = document.querySelectorAll('li > a');
  
    toggles.forEach((toggle) => {
      // Eğer alt liste varsa, artı ikonu ekle
      const subList = toggle.nextElementSibling;
      if (subList && subList.tagName === 'UL') {
        const icon = document.createElement('span');
        icon.classList.add('toggle-icon');
        toggle.parentNode.insertBefore(icon, toggle);
  
        // Tıklama olaylarını yönet
        toggle.addEventListener('click', (e) => {
          e.preventDefault(); // Sayfada gezinmeyi engelle
          const isOpen = subList.classList.contains('open');
          subList.classList.toggle('open', !isOpen); // Aç/kapa
          icon.classList.toggle('open', !isOpen); // İkonu değiştir
        });
      }
    });
  });
  
document.getElementById('filter-input').addEventListener('input', function () {
  const filterValue = removeDiacritics(this.value.toLowerCase()); // Şapkalı harfleri kaldır
  const listItems = document.querySelectorAll('#filtered-list > li');

  listItems.forEach((item) => {
    const text = removeDiacritics(item.textContent.toLowerCase()); // Şapkalı harfleri kaldır

    if (text.includes(filterValue)) {
      item.style.display = ''; // Göster
    } else {
      item.style.display = 'none'; // Gizle
    }
  });
});

// Şapkalı harfleri kaldıran fonksiyon
function removeDiacritics(text) {
  return text.normalize('NFD') // Unicode normalizasyonu (şapkalı harfleri ayırır)
    .replace(/[\u0300-\u036f]/g, '') // Şapkalı işaretleri kaldırır
    .toLowerCase();
}
  // Listeyi seç
  const list = document.getElementById('filtered-list');
  const items = list.getElementsByTagName('li');

  // Her bir öğeyi döngüye al
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const link = item.getElementsByTagName('a')[0];
    const text = link.textContent;

    // Metni düzenle
    if (text) {
      const formattedText = text.replace(/(\d+)\/(\d+)\.\s*/, '').replace(/\s*\(\d+\s*Âyet\)/, '');
      link.textContent = formattedText;
    }
  }