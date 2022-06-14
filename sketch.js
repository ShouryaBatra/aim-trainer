let circleX = 200
let circleY = 200
let circleR = 50

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
}

function draw() {
  background(220);
  circle(circleX, circleY, circleR * 2)
  isInside() 
}

function isInside() {
  let a = mouseX - circleX
  let b = mouseY - circleY
  let distance = sqrt(a * a + b * b)
  return distance < circleR
}

function mouseClicked() {
  if (isInside()) {
    circleX = random(0, 400)
    circleY = random(0, 400)
  }
}