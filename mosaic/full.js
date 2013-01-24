/*

Globals are lowercase.
Temporary variables are uppercase.

Here's the list of globals:

b = <body>

s = size of box in pixels
l = length, in boxes
h = height, in boxes

r = random color

d = document
m = Math

*/

// Define some shorthands.
d = document;
m = Math;
s = 50;

// How big is our grid?
l = m.floor(innerWidth / s) - 1;
h = m.floor(innerHeight / s) - 1;

// Make a random color.
function r() {
	return "#" + ((m.random() * (1 << 24))|0).toString(16);
}

// Make a 2D table.
b.style.margin = 0;
O = "<table style='border-spacing:0'>";
for (I = 0; I < h; I ++) {
	O += "<tr>";
	for (J = 0; J < l; J ++) {
		O += "<td id=" + J + "-" + I + " style='background:" + r() +"' width=" + s + " height=" + s + "></td>";
	}
	O += "</tr>";
}
O += "</table>";
b.innerHTML = O;
