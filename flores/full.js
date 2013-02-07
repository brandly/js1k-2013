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

o = array of objects
    x: x coordinate
    y: y coordinate
    t: type
       0: raindrop
       1: flower

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
x = y = s = 100;
onmousemove = function(E) {
	x = E.clientX;
	y = E.clientY;
};

// Make the array of objects, which is of a fixed size
// It starts out with nulls everywhere
o = [];
for (I = 1200; I; I --)
	o.push(null);

// The repeated frame function.
(F = function() {

	// How big is the canvas?
	c.width = W = w.innerWidth;
	c.height = H = w.innerHeight;

	// Drop a raindrop in the first null spot
	var index  = o.indexOf(null);
	o[index] = {
		x: x + (m.random() * s) - (s / 2),
		y: y - (s / 3),
		a: 0,
		t: 0
	};

	// Objects have a 20-second lifespan
	setTimeout(function() {
		o[index] = null;
	}, 20000);

	with (a) {

		// Canvas background
		fillStyle = "#4be";
		fillRect(0,0,W,H);

		// Deal with the objects
		fillStyle = "#009";
		o.forEach(function(obj) {

			// Bail if we've an empty object
			if (obj == null) {
				return;
			}

			// Raindrop
			else if (!obj.t) {

				// Draw them
				beginPath();
				arc(obj.x, obj.y, 5, 0, 7);  // I use 7 because 7 > (2 * pi)
				fill();

				// Fall!
				obj.y += 10;

				// If I've hit the bottom, become a beautiful flower
				if (obj.y > H) {
					obj.t = 1;
				}

			}

			// Flower 1
			else if (obj.t == 1) {
			}

		});

		// Draw the cloud
		fillStyle = "#fff";
		font = (5 * m.sin(Date.now() / 500) + s) + "px serif";
		textAlign = "center";
		fillText("☁", x, y);
		strokeStyle = "#000";
		lineWidth = s / 20;
		strokeText("☁", x, y);

	}

	// Repeat!
	w.requestAnimationFrame(F);

})();
