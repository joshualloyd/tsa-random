let imgHolderDiv = document.getElementById('img-holder');

function insertImage() {
	let randomNumber = Math.round(Math.random());
	// console.log(randomNumber);
	if (randomNumber === 0) {
		imgHolderDiv.innerHTML = '<img src="arrow-left.jpg">';
	} else if (randomNumber === 1) {
		imgHolderDiv.innerHTML = '<img src="arrow-right.jpg">';
	} else {
		console.log("You get secondary screening");
	}
}

window.addEventListener('click', insertImage);