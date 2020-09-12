const colors = [
  'Green',
  'Yellow',
  'Blue',
  'Skyblue',
  'Red',
  'Orange',
  'Purple',
  'Brown',
  'Pink',
];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};

btn.addEventListener('click', () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.innerHTML = colors[randomNumber];
});
