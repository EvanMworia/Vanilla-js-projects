const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const colorHex = document.querySelector('.color');

btn.addEventListener('click', function () {
  for (let i = 0; i < 3; i++) {
    let backgroundColor = colors[randomColor()];
    document.body.style.backgroundColor = backgroundColor;
    colorHex.textContent = backgroundColor;
  }
});

function randomColor() {
  return Math.floor(Math.random() * colors.length);
}
