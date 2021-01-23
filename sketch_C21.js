
var rec1,rec2,rec3,rec4,rec5,rec6;





function setup() {
  createCanvas(800,400);
  rec2 = createSprite(400, 200, 50, 50);
  rec1 = createSprite(200,400,50,50);
  rec3 = createSprite(150,100,50,50);
  rec4 = createSprite(250,250,50,50);
  rec5 = createSprite(300,300,50,50);
  rec6 = createSprite(350,350,50,50);
  rec1.shapeColor = "green";
  rec2.shapeColor = "green";
  rec3.shapeColor = "green";
  rec4.shapeColor = "green";
  rec5.shapeColor = "green";
  rec6.shapeColor = "green";
}

function draw() {
  background(255,255,255); 
  rec1.x = World.mouseX;
  rec1.y = World.mouseY;
  isTouching(rec1,rec2);
  isTouching(rec1,rec6);
  isTouching(rec1,rec5);
  isTouching(rec1,rec4);
  isTouching(rec1,rec3);
  drawSprites();
  
}
function isTouching(object1,object2)  {
	if(object1.x - object2.x < object2.width/2+object1.width/2
	&& object2.x - object1.x < object2.width/2+object1.width/2
	&& object1.y - object2.y < object2.height/2+object1.height/2
	&& object2.y - object1.y <object2.height/2+object1.height/2){
	object1.shapeColor = "green";
	object2.shapeColor = "green";

  }
  else{
	object1.shapeColor = "red";
	object2.shapeColor = "red";
	
  }
	}
