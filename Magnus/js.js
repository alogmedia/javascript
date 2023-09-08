console.log("Test");

var beløb = 100; 
var momsProcent = 25; 

var momsBeløb = beregnMoms(beløb, momsProcent);

function beregnMoms(beløb, momsProcent) {
  var moms = beløb * (momsProcent / 100);
  return moms;
}

document.write("Beløb: " + beløb + " DKK<br>");
document.write("Momssats: " + momsProcent + "%<br>");
document.write("Momsbeløb: " + momsBeløb + " DKK");


function nogetTekst(text, alertText) {
  document.write('<h1>' + text + '</h1>');
  alert(alertText);
}

nogetTekst("1", "ALERT1");

nogetTekst("2", "ALERT2");

nogetTekst("3", "ALERT3");

function addTwo(num1, num2) {
  var result = num1 + num2;
  return result;
}

var x = 10;
var y = 12;

var result = addTwo(x,y);
nogetTekst(result, "10 + 12");

function changeElement() { 
  document.getElementById('tekstNu' ).innerHTML = "NOGET ANDET";
}

function changeElement() {
  var p1 = document.getElementById('p1')
  p1.innerHTML = "Noget andet tekst";
  p1.style.color = "red";
  p1.style.font = "Roboto";
}

for (i = 0; i <= 5; i++) {
alert(i);
}