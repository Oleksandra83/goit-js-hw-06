function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeButton = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
const changeColor = () => {
	textColor.textContent = document.body.style.backgroundColor = getRandomHexColor();
};

changeButton.addEventListener('click', changeColor);