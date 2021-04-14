

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
monkey=createSprite(100,300);
  monkey.addAnimation("add",monkey_running);
  monkey.scale=0.150;
  
  ground=createSprite(400,350,950,10);
  ground.velocityX=-4;
   ground.x=ground.width/2;
  bananagroup= createGroup();
  obstaclegroup=createGroup();
  
}


function draw() {
background("pink")
 
  
  textSize(18)
  fill("black");
  text("score:"+score,310,50);
  
  
  textSize(18)
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime: "+survivalTime,100,50);
  
  
  
  
  spawnbanana();
  spawnobstacles();
  
  
  monkey.collide(ground);
  
  
 if(ground.x<0){
   ground.x=ground.width/2;
 }
  
  if(keyDown("space")&& monkey.y>=200){
    monkey.velocityY=-10;
    
    
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  if(bananagroup.isTouching(monkey)){
    bananagroup.destroyEach();
    score=score+1;
    
  
  }

    
  drawSprites();
}
function spawnbanana(){
  if(frameCount%120===0){
   banana=createSprite(400,200);
    banana.y=Math.round(random(120,200));
  banana.addImage("add",bananaImage)
  banana.scale=0.1;
  banana.velocityX=-2
    banana.lifetime=200;
    bananagroup.add(banana);
  }
}
function spawnobstacles(){
  if(frameCount%300===0){
   obstacle=createSprite(400,330);
    
  obstacle.addImage("add",obstacleImage)
  obstacle.scale=0.150;
  obstacle.velocityX=-6
    obstacle.lifetime=200;
    obstaclegroup.add(obstacle);
  }
}







