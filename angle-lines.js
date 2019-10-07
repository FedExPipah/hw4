function setup() {
  createCanvas(650, 600);
  colorMode(HSB);
}

function draw() {
  background(255);

  for (var x = 100; x < width - 10; x = x + 10) {
    line(x, height/2,x+100,height/2-75);
stroke(random(220),40,180);
  }
}
