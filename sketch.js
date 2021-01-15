const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot
var gameState = "onSling";

function preload(){

}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1400,600);
  stroke(255)

  ground=new Ground(700,598,1400,10)

  stand=new Ground(1000,450,450,10)

  block1=new Box(1000,390,57,85.5)
  block2=new Box(1000,290,57,85.5)
  block3=new Box(1000,190,57,85.5)  
  block4=new Box(1000,90,57,85.5)

  polygon=new Polygon(200,250,20,20)
  slingshot=new SlingShot(polygon.polygon,{x:200,y:250})
}

function draw() {
  Engine.update(engine);
  background("green");
  ground.display() 
  stand.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  polygon.display()
  slingshot.display()
  drawSprites();
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(polygon.polygon, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  if(gameState==="onSling"){
      slingshot.fly();
      gameState = "launched";   
  }
}

function keyPressed(){
  if(keyCode === 32){
      polygon.trajectory=[]
      gameState="onSling"
      slingshot.attach(polygon.polygon);
  }
}
