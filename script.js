var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomColor");

console.log(Math.floor(Math.random()*16777215).toString(16));
console.log("#"+(Math.random()*0xFFFFFF<<0).toString(16));

//Problem 1
body.style.background =
"linear-gradient(to right, " 
+ color1.value 
+ ", " 
+ color2.value 
+ ")";
//Problem 2
css.textContent = body.style.background + ";";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}
//Problem 3
function setRandomGradient() {
	var randomColors = ["", ""];
	for (var i = 0; randomColors.length > i; i++) {
		var x=Math.round(0xffffff * Math.random()).toString(16);
		var y=(6-x.length);
		var z="000000";
		var z1 = z.substring(0,y);
		randomColors[i] = "#" + z1 + x;
	};
	color1.value = randomColors[0];
	color2.value = randomColors[1];
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);
