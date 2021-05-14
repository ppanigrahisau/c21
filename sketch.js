
  
var fixedRect, movingRect;
var object;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  object=createSprite(300,400,50,80);
  object.shapeColor="blue";
  object.debug=true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(object,movingRect)){
   movingRect.shapeColor = "red";
  object.shapeColor = "red"; 
  }else{
   movingRect.shapeColor = "green";
  object.shapeColor = "green"; 
  }
  drawSprites();
}

