// var myVar = 12;
// myVar ='Hello'
//alert(myVar);
// alert(typeof(myVar)); 

//<input id="txt" type="text"/>
//<button onclick="alert(document.getElementById('txt').value);">Alert Me</button>

//var txt = ("Magnus");
//var tzt = ("Bomholt");
//var samlet = txt + tzt;

//console.log(samlet);

//document.write.innerHTML =samlet; 
//document.write = (samlet);

//Tager id class fra HTML & skriver ud sammen med var i javascript
//document.getElementById("output").innerHTML +=samlet; 

//var x = 2;
//var y = 10;
//var result = x+y;
//alert(result);

//var x=5;
//var y=4;

//var result = x > y;
 
//alert("Er x større end y?" + result);


var x = 20;
var y = 20;

if (x > y)
  alert("X er størst");
  
else if (y > x)
  alert("Y er størst");

else
  alert("De er ens!");

  var x = 15;
  var y = 2;
  var z = 10;

  if (x > y && x > z)
  document.write('<h1>X er størst</h1>');


  var dice = 5;
  
  switch(dice) {
    case 1:
    alert("ener");
    break;
    case 2:
    alert("toer");
    break;
    case 3:
    alert("treer");
    break;
    case 4:
    alert("fire");
    break;
    case 5:
    alert("fem");
    break;
    case 6:
    alert("seks");
    break;
      
  }


var colors = ["sort", "blå", "hvid", "gul"];

if (colors[2] === "hvid") {
  alert("Farven hvid er nummer 3 i arrayet.");
} else {
  alert("Farven hvid er ikke nummer 3 i arrayet.");
}

var tal = [5, 8, 9, 3];
var tjekTal = 2; 

if (tal[tjekTal] > 10) {
  console.log("Tallet på indeks " + tjekTal + " er større end 10.");
} else {
  console.log("Tallet på indeks " + tjekTal + " er ikke større end 10.");
}


var navn = ["Morten","Jesper","Finn"];
var findFinn = ("Finn");

if (navn.includes(findFinn)) {
  alert("Finn blev fundet i arrayen!");
} else {
  alert("Finn blev ikke fundet i arrayen.");
}

function hilsen(Magnus) {
  console.log("Hej, " + navn + "!");
}

function changeElement() {

}













  




