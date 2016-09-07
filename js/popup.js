
var link = document.querySelector(".popup-btn");
var popup = document.querySelector(".index-popup");
var checkin = popup.querySelector("[name=checkin]");

link.addEventListener("click",
	function (event) {
		event.preventDefault();
		popup.classList.toggle("index-popup-show");
		console.log("Клик по ссылке вход");
		checkin.focus();
	});
