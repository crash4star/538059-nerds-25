var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".write-us-close-btn");
link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("write-us-show");
});
close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("write-us-show");
});