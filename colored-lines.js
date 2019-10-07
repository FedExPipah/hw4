function setup() {
  createCanvas(600, 650);
   colorMode(HSB);
}
function draw() {
  background(255);

  
  for (var x = 10; x < width -10; x = x + 10) {
    line(x, height / 2, mouseX, mouseY);
    stroke(random(220),30,140);
    //stroke(x,mouseY, mouseX);
     line(x, height / 1, mouseX, mouseY);

  }

}
