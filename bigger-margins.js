function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  for (var x = 5; x < width-10; x = x + 10) {
    line(x, height/1, mouseX, mouseY);
  }
}
