var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var tree, treeImg;
  var rain, rainImg;
  var axe,axeImg;
  var background1,bgImg;

function preload(){
treeImg=loadImage("tree.png")
axeImg=loadImage("axe.png")
rainImg=loadImage("rain.png")
bgImg=loadImage("background.jpg")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;   

  background1=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  background1.scale=1.5;
  background1.addImage(bgImg);

  tree = createSprite(displayWidth/4-50,displayHeight-330,20,50);
  tree.addImage(treeImg);
}
 
function draw() {
  background("yellow");
  
  if (background1.x < 0){
  background1.x = background1.width/2;
 }
  Engine.update(engine);
 spawnAxe();
 spawnClouds();
   drawSprites();
}

function spawnAxe(){
   if(frameCount % 300===0){
   axe=createSprite(800,400,10,50);
axe.velocityX=-3;
   var rand=Math.round(random(1,6));
     console.log(rand);
    axe.addImage(axeImg);
   
   } 
    
 }
 
 function spawnClouds(){
  if(frameCount % 200===0){
  rain=createSprite(800,160,10,50);
rain.velocityX=-3;
  var rand=Math.round(random(1,6));
    console.log(rand);
   rain.addImage(rainImg);
  
  } 
   
}

 
