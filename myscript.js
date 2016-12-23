//Functions

//Set button name
var closes = document.getElementsByClassName("close");
function setText(divName, text){
	var t = document.createTextNode(text);
	divName.appendChild(t);
}
// When the user clicks on the button, open the modal
function show(popup) {
	popup.style.display = "block";
}
// Close modal
function close(x, modal){
	x.onclick = function() {
		modal.style.display = "none";
	}
}
// Attaches modal and close to button
function setModal(int){
	buttons[int+""].onclick = function() {
		show(modals[int+""]);
	}
	closes[int].onclick = function() {
		modals[int+""].style.display = "none";
	}
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

//Adds surrounding circles
var div = 360 / 9;
var radius = 325;
var parentdiv = document.getElementById('parentdiv');
var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2);  //assumes parent is square
var offsetToChildCenter = 100;
var totalOffset = offsetToParentCenter - offsetToChildCenter;
for (var i = 1; i <= 9; ++i)
{
	var childdiv = document.createElement('BUTTON');

	childdiv.className = 'div2';
	childdiv.id = "circle"+i;
	childdiv.style.position = 'absolute';
	childdiv.style.fontSize = "16px";
	childdiv.style.top = totalOffset + "px";
	childdiv.style.left = totalOffset + "px";
	childdiv.style.animationDelay = -2.5*i+"s";
	parentdiv.appendChild(childdiv);
}

setText(circle1,"light and refreshing");
setText(circle2, "sweet and strong");
setText(circle3, "quick to prepare");
setText(circle4, "energizing");
setText(circle5, "sweet and refreshing");
setText(circle6, "unique");
setText(circle7, "alcoholic");
setText(circle8, "classic");
setText(circle9, "chocolatey");

var modals = {};
modals["0"] = document.getElementById('myModal');
modals["1"] = document.getElementById('vietnam_modal');
modals["2"] = document.getElementById('greek_modal');
modals["3"] = document.getElementById('hk_modal');
modals["4"] = document.getElementById('ger_modal');
modals["5"] = document.getElementById('austria_modal');
modals["6"] = document.getElementById('irish_modal');
modals["7"] = document.getElementById('french_modal');
modals["8"] = document.getElementById('italy_modal');

var buttons= {};
buttons["0"] = document.getElementById("circle1");
buttons["1"] = document.getElementById("circle2");
buttons["2"] = document.getElementById("circle3");
buttons["3"] = document.getElementById("circle4");
buttons["4"] = document.getElementById("circle5");
buttons["5"] = document.getElementById("circle6");
buttons["6"] = document.getElementById("circle7");
buttons["7"] = document.getElementById("circle8");
buttons["8"] = document.getElementById("circle9");

for (i=0; i<9; i++){
	setModal(i);
}
