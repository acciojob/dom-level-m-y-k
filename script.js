//your JS code here. If required.
function count(ele) {
	let level = 0;

	while (element.parentElement) {
		element = element.parentElement;
		level++;
	}
	return level;
}
const element = document.getElementById("level");
let level = count(element);
alert("The level of the element is: " + level);