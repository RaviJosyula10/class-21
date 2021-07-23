
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 800);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	var ground_options={
		isStatic:true
	}

	engine = Engine.create();
	world = engine.world;

	ball = Bodies.circle(200,200,20,ball_options);
	World.add(world,ball);

    ground = Bodies.rectangle(700,600,1500,20,ground_options);
	World.add(world,ground);
	leftWall = Bodies.rectangle(800,555,10,75,ground_options);
	World.add(world,leftWall);
	rightWall = Bodies.rectangle(1000,555,10,75,ground_options);
	World.add(world,rightWall);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(12,150,255);
  
  Engine.update(engine);
  
  push();
  fill(255);
  ellipse(ball.position.x,ball.position.y,35);
  pop();

  push();
  fill(0,120,0);
  rect(ground.position.x,ground.position.y,1500,20); 
  pop();

  push();
  fill(0,0,120);
  rect(leftWall.position.x,leftWall.position.y,10,75);
  rect(rightWall.position.x,rightWall.position.y,10,75);
  pop();
  
  fill(255,255,0);
  ellipse(1200,40,40);
  
  drawSprites();
}

function throwBall() {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:60,y:100});
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		throwBall();
	}
}