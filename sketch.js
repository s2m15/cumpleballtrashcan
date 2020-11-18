
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinImage

function preload(){
dustbinImage = loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,680,800,20)
	box1 = new Box(500,660,200,20)
	box2 = new Box(400,580,20,150)
	box3 = new Box(600,580,20,150)
	ball = new Ball(100,660,70)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);

  ground.display()
  box1.display()
  box2.display()
  box3.display()
  ball.display()
  
  imageMode(CENTER)
  image(dustbinImage,500,520)
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball.ballBody,ball.ballBody.position,{x:465,y:-980})
	}
}



