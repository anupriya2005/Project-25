
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbin1 = loadImage("https://projectsassets.s3.us-east-2.amazonaws.com/paper.png");
	paper1 = loadImage("https:amazonaws.com/dustbingreen.png//projectsassets.s3.us-east-2.");
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new paper(100,100,1,options);
	Matter.Bodies.circle(100,100,1,options);
	ground1 = new ground(550,300,600,20);
	dustbin1 = new dustbin(530,500,150,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
  
  drawSprites();
 
}

function kepPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper1.body, paper1.body.position(x=85, y=-85));
	}
}


