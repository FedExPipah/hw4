function setup() {
  createCanvas(600, 650);
}
function draw() {
  background(255);
  colorMode(HSB);
  stroke(random(310), 15, 78);
   fill(random(255), 100, 100);

  for (var x = 10; x < width + 50; x = x + 20) {
    line(x, height / 1, mouseX, mouseY);
  }

}
