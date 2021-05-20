let dino;
let dImg;
let cImg;
let bImg;
let cacti = [];
let noCactusGangs = 0;

function preload() {
  dImg = loadImage('img/dino.png');
  cImg = loadImage('img/cactus.png');
  bImg = loadImage('img/background.png');
}

function setup() {
  var myCanvas = createCanvas(800, 300);
  myCanvas.parent("gameContainer");
  
  dino = new Dino();
  
}

function keyPressed() {
  if (key == ' ' ) {
      dino.jump();
  }
}

function draw() {
  textSize(36);
  
  
  
  
  if (random(1) < 0.019 && noCactusGangs % 2 == 0) {
    cacti.push(new Cactus());
  }
  background(bImg);
  
  
  for (let c of cacti) {
    c.move();
    c.show();
    if (dino.hits(c)) {
      
      fill(0);
      textAlign(CENTER);
      text('Game Over, press F5 to restart', width/2, 70)
      noLoop();
    }
  }
  
  
  dino.show();
  dino.move();
  
  noCactusGangs = Math.round(frameCount/30)
  text(noCactusGangs, width/2, 100)
  
  fill(0);
  textAlign(CENTER);
  text("Score: " + frameCount, width / 2, 30);
}