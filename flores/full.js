/*

Globals are lowercase.
Temporary variables are uppercase.

Here's the list of globals:

a = canvas context
b = <body>
c = <canvas>

x = cloud X
y = cloud Y
s = cloud size

d = document
w = window
m = Math
n = Date.now

*/

// Some shorthands
d = document;
w = window;
m = Math;

// Make the canvas fill the window
(C = d.createElement("style")).innerHTML = "*{margin:0;padding:0}html,body,#c{width:100%;height:100%}#c{position:absolute;cursor:none}";
d.head.appendChild(C);

// Move the cloud you control
x = y = 0;
s = 100;
onmousemove = function(E) {
	x = E.clientX;
	y = E.clientY;
};

// The repeated draw function.
(D = function() {

	// How big is the canvas?
	c.width = W = w.innerWidth;
	c.height = H = w.innerHeight;

	with (a) {

		// Canvas background
		fillStyle = "#4be";
		fillRect(0,0,W,H);

		// Draw the cloud
		fillStyle = "#fff";
		font = (5 * Math.sin(Date.now() / 500) + s) + "px sans-serif";
		textAlign = "center";
		fillText("☁", x, y);
		strokeStyle = "#000";
		lineWidth = s / 20;
		strokeText("☁", x, y);

	}

	// Repeat!
	w.requestAnimationFrame(D);

})();
