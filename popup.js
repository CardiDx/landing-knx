//timer

document.getElementById('popup-sale').style.display = "block";
let date = new Date('Jan 1 2023 00:00:00');
new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"})

function counts(){
	let now = new Date();
	gap = date - now;

	let days = Math.floor(gap / 1000 / 60 / 60 / 24);
	let hours = Math.floor(gap / 1000 / 60 / 60 ) % 24;
	let minutes = Math.floor(gap / 1000 / 60) % 60;
	let seconds = Math.floor(gap / 1000) % 60;	


	if (gap < 0) {
		document.getElementById('group').innerText = "Акция завершена";
	} else {
		document.getElementById('d').innerText = days;
		document.getElementById('h').innerText = hours;
		document.getElementById('m').innerText = minutes;
		document.getElementById('s').innerText = seconds;	
	}

	
}
counts();

setInterval(counts, 1000);

// show and close popup fnc

const modal = document.querySelector(".modal__wrapper");
const modalClose = document.querySelector(".modal__close");
const buttonFloat = document.querySelector(".button-float");

modalClose.addEventListener("click", closePopup);

function closePopup() {
  modal.style.display = "none";
  buttonFloat.classList.add("--show");
}

buttonFloat.addEventListener("click", showPopup);

function showPopup() {
  modal.style.display = "block";
  buttonFloat.classList.remove("--show");
}

showPopup();

// set 1 min show popup
setTimeout(() => {
  showPopup();
}, 60000)
