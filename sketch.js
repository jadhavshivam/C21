
var rec1,rec2





function setup() {
  createCanvas(800,400);
  rec2 = createSprite(400, 200, 50, 50);
  rec1 = createSprite(200,400,50,50);
  
  
}

function draw() {
  background(255,255,255); 
  rec1.x = World.mouseX;
  rec1.y = World.mouseY;
  if(rec1.x - rec2.x < rec1.width/2 + rec2.width/2
  && rec2.x - rec1.x < rec1.width/2 + rec2.width/2
  && rec1.y - rec2.y < rec1.height/2 + rec2.height/2
  && rec2.y - rec1.y < rec1.height/2 + rec2.height/2){
	rec1.shapeColor = "green";
	rec2.shapeColor = "green";
  }
  else{
	rec1.shapeColor = "red";
	rec2.shapeColor = "red";
  }
  drawSprites();
  
}