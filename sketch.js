
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var tree, stone;
var boy;
var mango1,mango2,mango3,mango4,mango5;

function setup() {
	createCanvas(1000, 500);
	
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,500,1100,35);
	tree = new Tree(850,298,250,370);
	stone = new Stone(200,200,100/2);
	boy = new Boy(200,383,75,200);
	mango1 = new Mango(750,275,80/2);
	mango2 = new Mango(830,250,80/2);
	mango3 = new Mango(950,250,80/2);
	mango4 = new Mango(800,150,80/2);
	mango5 = new Mango(900,185,80/2);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  ground.display();
  tree.display();
  stone.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
}



