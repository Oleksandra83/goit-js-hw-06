const list = document.querySelector('ul#categories');
const listItem = document.querySelectorAll('li.item');
console.log('Кількість категорій:' + listItem.length);
const items = document.querySelectorAll('.item');
items.forEach((item) => {
	console.log('Категорія:' + item.querySelector('h2').textContent);
	const itemsElements = item.querySelector('ul');
	console.log('Елементи:' + itemsElements.querySelectorAll('li').length);
});