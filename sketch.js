var fixedRect, movingRect;
var poll;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  poll = createSprite(400, 200,80,30);

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  poll.velocityY = 5;
}

function draw() {
  background(0,0,0);  

  bounce(movingRect,poll)
  drawSprites();
}

