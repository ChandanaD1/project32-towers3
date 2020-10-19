const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var gameState = "onsling"
var scores = 0;
var bg = (255,255,255);

function setup() {
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(590,450,250,10)

  block1 = new Blocks(500,435,30,40)
  block2 = new Blocks(530,435,30,40)
  block3 = new Blocks(560,435,30,40)
  block4 = new Blocks(590,435,30,40)
  block5 = new Blocks(620,435,30,40)
  block6 = new Blocks(650,435,30,40)
  block7 = new Blocks(680,435,30,40)

  block8 = new Blocks(530,395,30,40)
  block9 = new Blocks(560,395,30,40)
  block10 = new Blocks(590,395,30,40)
  block11 = new Blocks(620,395,30,40)
  block12 = new Blocks(650,395,30,40)

  block13 = new Blocks(560,355,30,40)
  block14 = new Blocks(590,355,30,40)
  block15 = new Blocks(620,355,30,40)

  block16 = new Blocks(590,305,30,40)

  polygon = Bodies.circle(300,400,20)
  World.add(world,polygon)

  slingshot = new SlingShot(polygon,{x:300,y:400})
}

function draw() {
  background(bg); 
  fill ("red")
  Engine.update(engine);

  textSize(15)
  text ("score: " + scores, 50,40)
  console.log(scores)
  
  ground1.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  push ();
  translate(polygon.position.x, polygon.position.y)
  rotate(polygon.angle)
  fill ("pink")
  ellipseMode(RADIUS)
  ellipse(0,0,20,20)
  pop ();

  slingshot.display();

  drawSprites();
}

function mouseDragged(){
  if(gameState != "launched") {
      Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  gameState = "launched";
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      gameState = "onsling";
      slingshot.attach(polygon);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = 255,255,255;
  }
  else{
      bg = 0,0,0;
  }
}