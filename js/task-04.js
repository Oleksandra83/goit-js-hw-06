let counterValue = 0;
const valueRef = document.getElementById('value');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');

const onClickDecrement = () => {
	counterValue -= 1;
	valueRef.textContent = counterValue;
};

const onClickIncrement = () => {
	counterValue += 1;
	valueRef.textContent = counterValue;
};

buttonDecrement.addEventListener('click', onClickDecrement);
buttonIncrement.addEventListener('click', onClickIncrement);