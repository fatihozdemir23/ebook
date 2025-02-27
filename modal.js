document.addEventListener("DOMContentLoaded", function () {
    let triggers = document.querySelectorAll(".modal-trigger");
  
    // Modal elementini oluştur
    let modal = document.createElement("div");
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-box">
            <div class="modal-content"></div>
        </div>
    `;
  
    modal.classList.add("modal-container");
    document.body.appendChild(modal);
  
    let modalBox = modal.querySelector(".modal-box");
    let modalContent = modal.querySelector(".modal-content");
    let overlay = modal.querySelector(".modal-overlay");
  
    // Her bir tetikleyiciye tıklama olayını ekle
    triggers.forEach(trigger => {
        trigger.addEventListener("click", function (event) {
            // Dipnot içeriğini al ve modal içinde göster
            let noteContent = trigger.getAttribute("data-content");
            modalContent.innerHTML = noteContent;  // innerHTML kullanarak HTML içeriği ekle
            modal.classList.add("open");
            event.stopPropagation();  // Tıklamanın dışarıya yayılmasını engelle
        });
    });
  
    // Modal dışına tıklanınca kapanması için
    function closeModal(event) {
        // Eğer modal kutusunun dışında bir yere tıklanırsa modalı kapat
        if (!modalBox.contains(event.target)) {
            modal.classList.remove("open");
        }
    }
  
    // Modal dışına tıklayınca kapanmasını sağla
    document.addEventListener("click", closeModal);
  });