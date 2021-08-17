
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var ball;
var ground;
var angle=60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
ground=Bodies.rectangle(200,380,400,20,ground_options);
World.add(world,ground);
//add to world

  ball = Bodies.circle(125,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  
  

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,380,20);
  Matter.Body.rotate(ground,angle)
  push()
  translate(ground.position.x,ground.position.y)
  rotate(angle)
  rect(0,0,90,20);
  pop()

  angle +=0.1;
  //write a rectangle function to display ground.
 


  
  
}

