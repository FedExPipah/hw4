function setup() {
  createCanvas(600, 650);
   colorMode(HSB);
}
function draw() {
  background(255);

  
  for (var x = 10; x < width -10; x = x + 10) {
    line(x, height / 1, mouseX, mouseY);
    stroke(x,mouseY, mouseX);

  }

}
