const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
	event.preventDefault();

	const { email, password } = event.currentTarget.elements;

	if (!email.value.trim() || !password.value.trim()) {
		return alert('Всі поля мають бути заповнені!');
	} else {

		const userData = { email: email.value, password: password.value }
		console.log(userData);
		event.currentTarget.reset();
	}
}

