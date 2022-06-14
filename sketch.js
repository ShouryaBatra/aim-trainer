function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
}

function draw() {
  background(220);
  square(200, 200, 100)
  isInside() 
}

function isInside() {
  console.log(mouseX > 200)
}