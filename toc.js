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
    const filterValue = this.value.toLowerCase();
    const listItems = document.querySelectorAll('#filtered-list > li');
  
    listItems.forEach((item) => {
      const text = item.textContent.toLowerCase();
  
      if (text.includes(filterValue)) {
        item.style.display = ''; // Göster
      } else {
        item.style.display = 'none'; // Gizle
      }
    });
  });
  