const valueDisplay = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

let count = 0;
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    if (btn.classList.contains('increase')) {
      count++;
      valueDisplay.textContent = count;
      setColor(count);
    } else if (btn.classList.contains('reset')) {
      count = 0;
      valueDisplay.textContent = count;
      setColor(count);
    } else {
      count--;
      valueDisplay.textContent = count;
      setColor(count);
    }
  });
});

function setColor(count) {
  if (count > 0) {
    valueDisplay.style.color = 'green';
  } else if (count < 0) {
    valueDisplay.style.color = 'red';
  } else {
    valueDisplay.style.color = 'black';
  }
}
