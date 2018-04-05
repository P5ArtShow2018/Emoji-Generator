


var drawEmoji = function(){
  var faceX = random(0,windowWidth);
  var faceY = random(0,windowHeight);
  var eyeSize = random(10,50)
  var faceR = random(1,255);
  var faceG = random(1,255);
  var faceB = random(1,255);
  var eyeColor = random(1,255);
  //face
  fill(faceR,faceB,faceG);
  ellipse(faceX,faceY,250);
  
  //eyes
  fill(eyeColor);
  ellipse(faceX-60,faceY-75,eyeSize);
  ellipse(faceX+50,faceY-75,eyeSize);
  
  //mouth
  fill(255,0,0);
  ellipse(faceX,faceY+50,50);
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background(random(1,255),random(1,255),random(1,255));
}

function draw() {
  frameRate(2);
  drawEmoji();
  drawEmoji();
  drawEmoji();
}