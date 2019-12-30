//initial value of X coordinate
var initialX = 50;

var carX = initialX;

function setup() {
  // put setup code here
  createCanvas(600, 400);
}

function draw() {
  // put drawing code here
  background(0, 255, 230);

  // road
  fill(0);
  rect(0, 300, 600, 100);

  // stripes
  fill(230, 255, 0);
  rect(0, 350, 100, 25);

  fill(230, 255, 0);
  rect(200, 350, 100, 25);

  fill(230, 255, 0);
  rect(400, 350, 100, 25);

  // tree
  fill(104, 0, 0);
  rect(500, 150, 50, 150);

  fill(0, 255, 9);
  ellipse(525, 130, 150, 100);

  // sun
  fill(230, 255, 0);
  ellipse(75, 65, 100, 100);

  // car's back wheel
  fill(0);
  ellipse(carX, 285, 35, 35);

  fill(100);
  ellipse(carX, 285, 30, 30);

  // car's front wheel
  fill(0);
  ellipse(carX + 100, 285, 35, 35);

  fill(100);
  ellipse(carX + 100, 285, 30, 30);

  // car's body
  fill(255);
  rect(carX - 15, 230, 130, 50);

  // incrementing x coordinate of the wheel
  carX = carX + 1;
}

function mousePressed(){
  carX = initialX;
}