
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rock;
var angle=60;
let engine;
let world;
var ball;
var ground;
var wall

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
  
wall=Bodies.rectangle(100,200,100,10,ground_options);
World.add(world,wall)
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  var rockOptions={restitution:0.85}
  rock=Bodies.circle(300,20,10,rockOptions)
  World.add(world,rock)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
fill ("yellow")
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 ellipse (rock.position.x,rock.position.y,10)
 angle=angle+0.1;
Body.rotate(wall,angle)
push ();
translate (wall.position.x,wall.position.y)
rotate(angle) 
 rect(0,0,100,10)
 pop ();

}

