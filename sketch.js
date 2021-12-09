var giga;
var bird,coin;
var bg;
var ground1,ground2;
var checkpoint,safe;
var birdImg,gigaImg,coinImg,bgImg,groundImg1,groundImg2,checkpointImg,safeImg;

function preload(){
  bgImg = loadImage('Images/Background 1.jpg');
  birdImg = loadAnimation('Images/Bird1.png','Images/Bird2.png','Images/Bird3.png','Images/Bird4.png');
  gigaImg = loadAnimation('Images/Giga1.png', 'Images/Giga2.png', 'Images/Giga3.png','Images/Giga4.png','Images/Giga5.png','Images/Giga6.png','Images/Giga7.png','Images/Giga8.png');
  coinImg = loadImage('Images/Coin.png');
  
  groundImg1 = loadImage('Images/Ground 1.png');
  groundImg2 = loadImage('Images/Ground 2.png');
  checkpointImg = loadAnimation('Images/Checkpoint1.png','Images/Checkpoint2.png');
  safeImg = loadImage('Images/Safe.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //bg = createSprite(460,330,50,50);
  giga = createSprite(400, 200, 50, 50);
  bird = createSprite(200,200,20,20);
  coin = createSprite(400,500,30,30);
  
  ground1 = createSprite(200,500,40,10);
  ground2 = createSprite(1250,300,40,10);
  checkpoint = createSprite(100,100,100,100);
  safe = createSprite(100,100,100,100);

  //bg.addImage(bgImg);
  //bg.scale = 0.7;

  giga.addAnimation("gigasmile",gigaImg);
  giga.scale = 0.65;

  bird.addAnimation("birdfly",birdImg);
  bird.scale = 0.5;

  coin.addImage(coinImg);
  coin.scale = 0.2;

  ground1.addImage(groundImg1);
  ground1.scale = 0.25;

  ground2.addImage(groundImg2);
  ground2.scale = 0.25;

  checkpoint.addAnimation("reached",checkpointImg);
  checkpoint.scale = 0.5;

  safe.addImage(safeImg);
  safe.scale = 0.6;
}

function draw() {
  background(bgImg);

  drawSprites();
}