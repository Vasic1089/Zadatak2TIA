var d = new Date();
document.getElementById("dan").innerHTML = d.getDate();


var m = new Date();
var meseci = ["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"];
document.getElementById("mesec").innerHTML = meseci[m.getMonth()];

var g = new Date();
document.getElementById("godina").innerHTML = g.getFullYear();





$(function(){
    $(".accordion").accordion();




});