 // Menü açma/kapama

 const rightMenu = document.getElementById('rightMenu');
 const openRightMenuBtn = document.getElementById('openRightMenu');
 openRightMenuBtn.addEventListener('click', function() {
   rightMenu.classList.toggle('open');
 });