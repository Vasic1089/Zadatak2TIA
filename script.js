$(document).ready(function(){
    $('.gallery').magnificPopup({
        type:'image',
        delegate:'a',
        gallery: {
            enabled: true 
        }

    });
    
});

var d = new Date();
document.getElementById("dan").innerHTML = d.getDate();


var m = new Date();
var meseci = ["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"];
document.getElementById("mesec").innerHTML = meseci[m.getMonth()];

var g = new Date();
document.getElementById("godina").innerHTML = g.getFullYear();


var slideIndex = 0;
showSlides();
 
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}
