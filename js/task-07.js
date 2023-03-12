const input = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const fontSizeControl = ({ currentTarget }) => (textRef.style.fontSize = `${currentTarget.value}px`);
input.addEventListener('input', fontSizeControl);