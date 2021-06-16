const input = document.getElementById("input");
const cardsplace = document.getElementById("cardsplace");
var pic = document.querySelectorAll(".cards");

input.addEventListener("change", function () {
	let x = 0;
	let files = input.files;
	Object.values(files).forEach(file => {
		let fileURL = URL.createObjectURL(file);
		let div = document.createElement("div");
		let div1 = document.createElement("div");
		let img = document.createElement("img");
		let img1 = document.createElement("img");
		img.src = fileURL;
		img1.src = fileURL;
		img.classList.add(x, "cover", "cards")
		img1.classList.add(x, "cover", "cards")
		div.appendChild(img);
		div1.appendChild(img1);
		cardsplace.appendChild(div);
		cardsplace.appendChild(div1);
		x++
	})
	pic = document.querySelectorAll(".cards");
	for (var i = cardsplace.children.length; i >= 0; i--) {
	    cardsplace.appendChild(cardsplace.children[Math.random() * i | 0]);
	}
	pic.forEach(item => clickFlip(item));
})


//pic.shuffl	e.
let flipedCards = [];


function coverPic () {
	let addCover = item => item.classList.add("cover");
	pic.forEach(image => addCover(image));
}

coverPic();

let clickFlip = item => {
	item.addEventListener("mousedown", function() {
		if (flipedCards.length < 2) {
			item.classList.toggle("cover");
			if (item !== flipedCards[0]) {
				flipedCards.push(item)
			}
		} 
	})
}

function compare() {
		if (flipedCards.length > 1 && flipedCards[0].classList[0] === flipedCards[1].classList[0]) {
			flipedCards[0].classList.add("za");
			flipedCards[1].classList.add("za");
			console.log("yaaaay");
		}

		if (flipedCards.length > 1) {
			coverPic()
			flipedCards = [];
		}
}

window.addEventListener("mousedown", function() {
	setTimeout(function () {compare()},1500); 
})



