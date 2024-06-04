let imgScroll = [".././img/img3ig.jpg", ".././img/second-img-mg.jpg", ".././img/img1-ag.jpg"];
let index = 0;
const prevButton = document.body.querySelector('#prevButton');
const nextButton = document.body.querySelector('#nextButton');

nextButton.onclick = function() {
	index++;
	if (index >= imgScroll.length) {
		index = 0;
	}
	document.body.querySelector("#myImage").style.opacity = 0;
	document.body.querySelector('#nextButton').style.transform = "scale(0.8)";
	setTimeout(function() {
		document.body.querySelector("#myImage").src = imgScroll[index];
		document.body.querySelector("#myImage").style.opacity = 1;
		document.body.querySelector('#nextButton').style.transform = "scale(1)";
	}, 350);
}

prevButton.onclick = function() {
	index--;
	if (index < 0) {
		index = imgScroll.length - 1;
	}
	document.body.querySelector("#myImage").style.opacity = 0;
	document.body.querySelector('#prevButton').style.transform = "scale(0.8)";
	setTimeout(function() {
		document.body.querySelector("#myImage").src = imgScroll[index];
		document.body.querySelector("#myImage").style.opacity = 1;
		document.body.querySelector('#prevButton').style.transform = "scale(1)";
	}, 350);
}

//Fine js
