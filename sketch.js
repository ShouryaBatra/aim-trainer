let score = 0
let circleX = 200
let circleY = 200
let circleR = 50
let rectWidth = 120
let rectHeight = 40
let rectX = 200
let rectY = 200
let drawRectangle = true

let mode = "home";

let startTime;
let elapsedTime = 0;
let targetTime = 10000; // 10 seconds

let timerStarted = false;


function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
  textAlign(CENTER, CENTER)
}

function draw() {
  background(220);
  if (mode === "home") {
    textSize(50)
    text("AIM TRAINER", 200, 100)
    rect(width / 2, height / 2, rectWidth, rectHeight, 10)
    textSize(30);
    text("START", 200, 200)
  }
  if (mode === "game") {
    if (!timerStarted) {
      startTime = millis();
      timerStarted = true;
    }
    if (timerStarted) {
      elapsedTime = millis() - startTime;
      circle(circleX, circleY, circleR * 2)

      textSize(50);

      text("score : " + score, width - 220, 50)

      textSize(25)
      text(int(elapsedTime) / 1000 + " seconds", 100, 20)

      if (elapsedTime >= targetTime) {
        mode = "timesUp";
      }
    }
    
  }
  if (mode === "timesUp") {
    text("Times Up!", 200, 300);
    text("score : " + score, width - 220, 50)
    rect(width / 2, height / 2, rectWidth + 70, rectHeight, 10)
    textSize(30);
    text("PLAY AGAIN", 200, 200)
  }
}

function isInsideRect() {
  let a = mouseX - rectWidth
  let b = mouseY - rectHeight
  let leftX = rectX - rectWidth / 2
  let rightX = rectX + rectWidth / 2
  let leftY = rectY - rectHeight / 2
  let rightY = rectY + rectHeight / 2
  
  if(mouseX >= leftX && mouseX <= rightX
    && mouseY >= leftY && mouseY <= rightY
    ) {
    return true
  }
  else {
    return false
  }
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
    score += 1
  }
  if (isInsideRect()) {
    if (mode === "home") {
      mode = "game";
    }
    if (mode === "timesUp") {
      mode = "home";
      timerStarted = false;
      score = 0;
    }
  }
}