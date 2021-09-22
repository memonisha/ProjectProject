var fixedRect, movingRect;
var frog;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;

  frog=createSprite(300,200,80,50);
  frog.debug=true;
  frog.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(frog,movingRect)) {
  movingRect.shapeColor = "crimson";
  frog.shapeColor = "crimson";
}
else {
  movingRect.shapeColor = "purple";
  frog.shapeColor = "green";
}


if(isTouching(fixedRect,movingRect)) {
  movingRect.shapeColor = "crimson";
  fixedRect.shapeColor = "crimson";
}
else {
  movingRect.shapeColor = "purple";
  fixedRect.shapeColor = "yellow";
}


  drawSprites();
}


