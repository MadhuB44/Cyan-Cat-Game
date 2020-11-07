var START=1
var END=0
var PLAY = 2;
var gamestate = 1;
var cat , cat_running
var donut ,donutImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var back
var ground
var roof
var text1
var time=0
var EatT=0
var hole111
var deaths=0
var dough1


function preload(){
  
   cat_running= loadAnimation("unscreen-001.png","unscreen-002.png","unscreen-003.png","unscreen-004.png","unscreen-005.png","unscreen-006.png","unscreen-007.png","unscreen-008.png","unscreen-009.png","unscreen-010.png","unscreen-011.png","unscreen-012.png")
  
  cat_still=loadImage("unscreen-001.png")
 
  back1=loadImage("HLYE26o.png")
  
  donutImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  text11=loadImage("1343551006__3_-removebg-preview.png")
  
  dough1=loadImage("f34e782b0ce5d2cbd3a3e1e8ecfde746-removebg-preview.png")
  
  hole111=loadImage("57296792-black-vector-grunge-circle-background-black-textured-circle-the-uneven-edges-of-the-circle-round-bac-removebg-preview.png")
  
  
  song=loadSound("Nyan Cat [original] (1).mp3")
}




 
function setup() {
  createCanvas(600, 400);  
background("black")
  
  
  
  back=createSprite(300,100,1000,1000);
  back.addImage(back1);
  back.scale = 1;
  
    cat=createSprite(50,100,20,20);
  cat.addAnimation("moving", cat_running);
  cat.scale = 0.5;
  
  text1=createSprite(350,200,20,100);
  text1.addImage(text11);
  text1.scale = 0.6
   
  ground=createSprite(300,400,700,10);
  
  roof=createSprite(300,0,700,10);
  
  
    doughG = new Group();
  
    holeG = new Group();
  
  
}


function draw() {
  background("lightblue")

  
   
  back.velocityX = -(7+time*1.5/50)
  if (back.x <400){
      back.x = 600
    }
  
  
  if(keyDown(UP_ARROW)&&cat.y >=160) {
       cat.velocityY = -12;
       }
  
   cat.velocityY = cat.velocityY + 1;
  
   cat.collide(ground);
   cat.collide(roof);
  
  

  if(gamestate===START)
  {
  back.velocityX=0

   // back.visible=false
    background("black")
     
    text("HOW TO PLAY",300,200)
    
    doughG.destroyEach()
     holeG.destroyEach()
    
    
 
  }
  
  if(keyDown("s"))
  {
  gamestate=PLAY  
  song.play()
  }
  
  if(gamestate===PLAY)
    {
    
       back.velocityX=-5
  if (back.x <400){
      back.x = 600
    }
  text1.visible=false
      
        if(keyDown(UP_ARROW)&&cat.y >=100) {
       cat.velocityY = -8;
          
          
          
       }
      
      
    if (frameCount % 20 == 0 && time < 10000) { 
    time=time+1
  
    } 
      
      if(cat.isTouching(doughG))
         {
         
         doughG.destroyEach()
         EatT=EatT+1
         }
      
        if(cat.isTouching(holeG))
         {
         
         holeG.destroyEach()
       gamestate=END
         }
     
      
    }
  
  if(gamestate===END){
    
    back.visible=false
    cat.visible=false
    background("blue")
    
    background("black")
    doughG.destroyEach()
     holeG.destroyEach()
    
    EatT.y=200
    EatT.x=250
    
    textSize(20)
    
    text("GAME OVER",260,200 );
    text("PRESS r TO PLAY AGAIN",220,250 );
    
    song.stop()
    reset()
  }
 dough();
  hole();
  drawSprites();
  
  fill(300)
  textSize(15)
  text("Time: "+ time, 520,75);
  text("Doughnuts eaten: "+ EatT, 440,50);
  text("Deaths "+ deaths, 20,50);


}
 

function dough(){
  if(frameCount % 90 === 0){
    var dough = createSprite(650,200.10,10);
    dough.addImage(dough1);
    dough.y = Math.round(random(50,350))
   // dough.velocityX = -7;
    dough.velocityX =-(7+EatT*1.5/8);           
    dough.scale = 0.1;
    
    doughG.add(dough);
 }
}

function hole(){
  if(frameCount % 190 === 0){
    var hole = createSprite(650,200.10,10);
    hole.addImage(hole111);
    hole.y = Math.round(random(50,330))
   // hole.velocityX = -7;
    hole.scale = 0.5;
    hole.setCollider("rectangle",0,0,200,200)
    hole.velocityX = -(7+EatT*1.5/10);
    holeG.add(hole);
 }
}


function reset(){
  
if(keyDown("r"))
 {  
   gamestate=START
     back.visible=true
    cat.visible=true
   text1.visible=true
   EatT=0
   time=0
   
   deaths=deaths+1
   
   }
}


