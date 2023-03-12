const input = document.querySelector('#validation-input');
// const inputLength = Number(input.getAttribute('data-length'));

input.addEventListener('blur', onBlurBorderColor);

function onBlurBorderColor() {
	const inputDataLength = Number(input.dataset.length);
	const inputValueLength = Number(input.value.trim().length);

	if (inputValueLength === inputDataLength) {
		input.classList.add('valid');
		input.classList.remove('invalid');
	} else {
		input.classList.remove('valid')
		input.classList.add('invalid');
	}
};