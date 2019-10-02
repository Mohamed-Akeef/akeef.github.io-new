var ipad = 1250;
document.getElementById("ipad-pr").innerHTML = ipad;

var iphone = 1000;
document.getElementById("iphone-11").innerHTML = iphone;

var macbook = 1500;
document.getElementById("laptop").innerHTML = macbook;

var TV = 500;
document.getElementById("apple-tv").innerHTML = TV;

var watch = 300;
document.getElementById("apple-watch").innerHTML = watch;

var discounts = 20 + '% off';
var discounts4 = 14 + '% off';
document.getElementById("discount").innerHTML = discounts;
document.getElementById("discount1").innerHTML = discounts;
document.getElementById("discount2").innerHTML = discounts;
document.getElementById("discount3").innerHTML = discounts;
document.getElementById("discount4").innerHTML = discounts4;


//ul and li
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-link');
	const navLinks = document.querySelectorAll('.nav-link li');

	burger.addEventListener('click', () => {
     nav.classList.toggle('nav-active');

     navLinks.forEach((link, index) => {
		if (link.style.animation){
			link.style.animation = '';
		} else {
			link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 2}'
		}
	});
     //X animation
     burger.classList.toggle('toggle');
	});
}


navSlide();

//selector
var container = document.getElementById("image-container");
function change_img(image) {
	container.src = image.src;
}


//day and time
var dayandtime = new Date();
document.getElementById("current").innerHTML = dayandtime;



