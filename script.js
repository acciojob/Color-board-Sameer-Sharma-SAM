const container = document.getElementById('board');
const SQUARES = 800;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 8px ${color}, 0 0 15px ${color}`;
}

function removeColor(element) {
  setTimeout(() => {
    element.style.backgroundColor = '#1c1c1c';
    element.style.boxShadow = '0 0 2px #000';
  }, 1000);
}

function getRandomColor() {
  const colors = [
    '#e74c3c', '#8e44ad', '#3498db',
    '#e67e22', '#2ecc71', '#1abc9c',
    '#9b59b6', '#f1c40f'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
