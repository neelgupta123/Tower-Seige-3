const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var ground1, backcolor,score=0;
var gameState = "onSling";

function preload(){
  rockImg=loadImage("polygon.png");
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  bottomGround=new Ground(400,390,800,20);
  ground1=new Ground(300,350,250,10);
  ground2=new Ground(600,280,200,10);

  box1=new Box(205,320,"lightblue");
  box2=new Box(235,320,"lightblue");
  box3=new Box(265,320,"lightblue");
  box4=new Box(295,320,"lightblue");
  box5=new Box(325,320,"lightblue");
  box6=new Box(355,320,"lightblue");
  box7=new Box(385,320,"lightblue");

  box8=new Box(235,270,"pink");
  box9=new Box(265,270,"pink");
  box10=new Box(295,270,"pink");
  box11=new Box(325,270,"pink");
  box12=new Box(355,270,"pink");

  box13=new Box(265,220,"blue");
  box14=new Box(295,220,"blue");
  box15=new Box(325,220,"blue");

  box16=new Box(295,170,"purple");

  box17=new Box(535,250,"lightblue");
  box18=new Box(565,250,"lightblue");
  box19=new Box(595,250,"lightblue");
  box20=new Box(625,250,"lightblue");
  box21=new Box(655,250,"lightblue");

  box22=new Box(565,200,"pink");
  box23=new Box(595,200,"pink");
  box24=new Box(625,200,"pink");

  box25=new Box(595,150,"purple");

  rock=Bodies.circle(100,300,20);
  World.add(world,rock);

  slingshot1=new Slingshot(this.rock,{x:80,y:250});

  getBackColor();
}

function draw() {

 if(backcolor){
 background(backcolor)
 }
  drawSprites();
  
  textSize(20);
  fill("white")
  text("Score: "+score,600,100);
  
  bottomGround.display();
  Engine.update(engine);

  ground1.display();
  ground2.display();

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
  box21.display();

  box22.display();
  box23.display();
  box24.display();

  box25.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();

  imageMode(CENTER);
  image(rockImg,rock.position.x,rock.position.y,40,40);

  slingshot1.display();
  
}
function mouseDragged(){
  if(gameState === "onSling"){
  Matter.Body.setPosition(this.rock,{x:mouseX,y:mouseY});
  }
}
function mouseReleased(){

  slingshot1.fly();
  gameState = "launched";
}
function keyPressed(){
  if(keyCode===32){
    slingshot1.attach(this.rock);
    gameState = "onSling";
  }
}

async function getBackColor(){
  var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson= await response.json();
  var dt=responseJson.datetime;
  var hour=dt.slice(11,13);

  if(hour>=06 && hour<=18){
    backcolor="aqua";
  }
  else{
    backcolor="green";
  }
  console.log(backcolor);
}