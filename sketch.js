
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;

function preload()
{
	
}

function setup() {
	createCanvas(1537, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.2,
		friction:0,
		density: 2
	}

	ball = Bodies.circle(600, 100, 50, ball_options)
	World.add(world, ball)

	groundObj = new Ground(1537,650,50,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



