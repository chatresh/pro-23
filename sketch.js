const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3;
var ground1;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 
  ground1 = new Ground(200,390,400,53);
  box1 = new Box(380,300,40,40);
  box2 = new Box(380,260,40,40);
  box3 = new Box(380,220,40,40);
  box4 = new Box(340,380,40,42);
  box5 = new Box(340,300,40,40);
  box6 = new Box(340,260,40,40);
  box7 = new Box(340,220,40,40); 
  box8 = new Box(380,180,40,40);
  box9 = new Box(340,180,40,40);
  box10 = new Box(380,380,40,42);

  box11 = new Box(20,300,40,40);
  box12 = new Box(20,260,40,40);
  box13 = new Box(20,220,40,40);
  box14 = new Box(60,380,40,42);
  box15 = new Box(60,300,40,40);
  box16 = new Box(60,260,40,40);
  box17 = new Box(60,220,40,40); 
  box18 = new Box(20,180,40,40);
  box19 = new Box(60,180,40,40);
  box20 = new Box(20,380,40,42);

  box21 = new Box(200,260,160,40);
  box22 = new Box(100,300,40,200); 
  box23 = new Box(300,300,40,200); 
  box24 = new Box(200,184,158,40); 
  box25 = new Box(200,380,158,40); 

 
  textSize(18);
textFont("Georgia");
textStyle(BOLD);
}

function draw() {
  background(255,255,255);

  fill(150,45,20);
  triangle(360,100,320,160,400,160);
  triangle(40,100,80,160,0,160);
  triangle(200,80,70,170,330,170);
 
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  ground1.display();

  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
text("THIS IS",160,225);
text("CASTLE",160,305);
text("MY",180,265);
  box4.collide(box20);

  bounceOff(box21,box24,box21,box25);

  drawSprites();
}