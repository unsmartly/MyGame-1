
function preload() {
  bgImg = loadImage("assets/backgrounf.png");
  appleImg = loadImage("assets/player1-removebg-preview-removebg-preview.png");
  orangeImg = loadImage("assets/player2-removebg-preview.png");
  sunImg = loadImage("assets/sun-removebg-preview.png");
  
  bowImg = loadImage("assets/player2_weapon-removebg-preview.png");
  gunImg = loadImage("assets/player1_weapon-removebg-preview.png");
}

function setup() {
  createCanvas(1200, 440);

  bg = createSprite(width / 2, height / 2, width, height);
  bg.addImage(bgImg);

  apple = createSprite(200, height / 2 + 60);
  apple.addImage(appleImg);
  apple.scale = 0.6

  orange = createSprite(width - 100, height / 2 + 60);
  orange.addImage(orangeImg);
  orange.scale = 0.6

  sun = createSprite(400,100);
  sun.addImage(sunImg);
  
  bow = createSprite(1030,270);
  bow.addImage(bowImg);
  bow.scale = 0.7;

  gun = createSprite(250,250);
  gun.addImage(gunImg);
  gun.scale = 0.7;
}

function draw() {
  background(0);



  drawSprites()
}
 if (keyIsDown(RIGHT_ARROW)){

}
if (keyIsDown(LEFT_ARROW)){

}



