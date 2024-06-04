const headingEl = document.body.querySelector('#heading');
console.log(headingEl);

const buttonEls = document.body.querySelectorAll('button');
for(let i = 0; i < buttonEls.length; i++) {
	console.log(buttonEls[i].innerHTML);
}

const resetBtn = document.body.querySelectorAll('button')[0];
const clickBtn = document.body.querySelectorAll('button')[1];
clickBtn.onclick = function() {
	let clickBtnToNumber = Number(clickBtn.innerHTML);
	if (isNaN(clickBtnToNumber)) {
		clickBtn.innerHTML = 0;
		console.log(clickBtn.innerHTML);
	}
	if (!isNaN(clickBtnToNumber)) {
		clickBtn.innerHTML++;
		console.log(clickBtn.innerHTML);
	}
}

resetBtn.onclick = function() {
	clickBtn.innerHTML = 'Click me!';
}
