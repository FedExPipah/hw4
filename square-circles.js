function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);

}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);

  x.push(mouseX);
  y.push(mouseY);

rectMode(CENTER);

  for (var i = 5; i < x.length; i = i + 3) {

    rect(x[i], x[i], 1 + (x.length - i), 1 + (x.length - i));
    stroke(x[i], y[i], 100,40);

  }
  x = x.slice(-50); // remove all but the last 50 x values
  y = y.slice(-50); // remove all but the last 50 y values
}
