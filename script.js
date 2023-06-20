//your JS code here. If required.
const element = document.getElementById("level");
let level = 0;

while (element.parentElement) {
	element = element.parentElement;
	level++;
}

alert("The level of the element is: " + level);