const boxes = document.querySelectorAll('.box');
const body = document.body;

boxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    body.style.backgroundImage = box.getAttribute('data-bg');
  });

  box.addEventListener('mouseleave', () => {
    body.style.backgroundImage = '';
  });
});