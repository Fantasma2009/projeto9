var navio;
var mar;
var navioImg;
var marImg;

function preload(){
  marImg=loadImage('sea.png');
  navioImg=loadAnimation('ship1.png','ship1.png','ship2.png','ship1.png');

  
}

function setup(){
  createCanvas(400,400);
  mar=createSprite (400,200);
  mar.addImage(marImg);
  mar.velocityX=0.5;
  mar.scale=0.3;
  
  
  navio=createSprite (130,200,30,30);
  navio.addAnimation('move ship',navioImg);
  navio.scale=0.25;
}

function draw() {
  background("blue");
  if(mar.x<0){
mar.x= mar.width/2;
}


  drawSprites ();
}