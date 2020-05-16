var bullet1,bullet2,wall2,wall1;

function setup() {
  createCanvas(1600,400);
  bullet1=new bullet(0,50,32,223,"cyan");
  bullet2 = new bullet(0,350,32,223,"cyan");
  wall1=createSprite(1500,50,20,200);
  wall2=createSprite(1500,350,20,200);
}

function draw() {
  background(255,255,255);  
    bullet1.bounceoff(wall1,bullet1);
    bullet2.bounceoff(wall2,bullet2);
  drawSprites();
}