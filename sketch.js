var bg,bgimg
var player,shooterimg,shootershooting

function preload(){
  shooterimg = loadImage("assets/shooter_2.png");
  shootershooting = loadImage("assets/shooter_3.png");
   bgimg = loadImage("assets/bg.jpeg");  
  



}

function setup(){
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(bgimg);
  bg.scale=1.1;

  player=createSprite(displayWidth-1150,displayHeight-300,50,50);
  player.addImage(shooterimg);
  player.scale=0.3;
  player.debug=true;
  player.setCollider("rectangle",0,0,300,300);
}

function draw(){
  background(0)
  if(keyDown("UP_ARROW")){
    player.y=player.y-30

  }
  if(keyDown("DOWN_ARROW")){
    player.y=player.y+30

  }
  if(keyWentDown("SPACE")){
    player.addImage(shootershooting);

  }
  if(keyWentUp("SPACE")){
    player.addImage(shooterimg);

  }
  drawSprites()

}



