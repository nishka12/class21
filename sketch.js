var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

gameObject1 = createSprite(100,100,50,50);
gameObject1.shapeColor = "blue";

gameObject2 = createSprite(200,100,50,50);
gameObject2.shapeColor = "blue";

gameObject3 = createSprite(300,100,50,50);
gameObject3.shapeColor = "blue";

gameObject4 = createSprite(400,100,50,50);
gameObject4.shapeColor = "blue";






}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(Istouching(movingRect,gameObject1)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

 // bounceOffS(movingRect,fixedRect);
  drawSprites();
}

