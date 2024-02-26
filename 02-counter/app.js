const increaseBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');
const decreaseBtn = document.getElementById('decrease');
const counter = document.querySelector('.counter');

let count = 0;
counter.textContent = count;
console.log(counter.textContent);

increaseBtn.addEventListener('click', function () {
  count += 1;
  setColor(count);
  counter.textContent = count;
});

resetBtn.addEventListener('click', function () {
  count = 0;
  setColor(count);
  counter.textContent = count;
});

decreaseBtn.addEventListener('click', function () {
  count -= 1;
  setColor(count);
  counter.textContent = count;
});

function setColor(currentValue) {
  if (currentValue === 0) {
    counter.style.color = 'black';
  } else if (currentValue < 0) {
    counter.style.color = 'red';
  } else if (currentValue > 0) {
    counter.style.color = 'green';
  }
}
