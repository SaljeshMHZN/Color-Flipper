const colors = [
  'green',
  'yellow',
  'blue',
  'skyblue',
  'red',
  'orange',
  'purple',
  'brown',
  'pink',
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
