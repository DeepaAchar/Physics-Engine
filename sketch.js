//name spacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,surface,ball;

function setup() {
  var canvas=createCanvas(800,400);
  engine = Engine.create();
  world=engine.world;

  var surface_options={
    'isStatic':true
  }

  surface=Bodies.rectangle(400,370,800,20,surface_options);
  console.log(surface);
  //console.log(object.position);
  World.add(world,surface);

  var ball_ooptions={
    restitution: 1
  }

  ball=Bodies.circle(200,50,30,ball_ooptions);
  World.add(world,ball);
}

function draw() {
  background("green");
  Engine.update(engine);  
  rectMode(CENTER);
  rect(surface.position.x,surface.position.y,800,20);

  circle(ball.position.x,ball.position.y,30);
}