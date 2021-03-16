let dino;
let dImg;
let cImg;
let bImg;
let cacti = [];

function preload() {
  dImg = loadImage('dino.png');
  cImg = loadImage('cactus.png');
  bImg = loadImage('background.png');
}

function setup() {
  createCanvas(800, 300);
  dino = new Dino();
  
}

function keyPressed() {
  if (key == ' ' ) {
      dino.jump();
  }
}

function draw() {
  if (random(1) < 0.01) {
    cacti.push(new Cactus());
  }
  background(bImg);
  for (let c of cacti) {
    c.move();
    c.show();
    if (dino.hits(c)) {
      console.log('game over');
      noLoop();
    }
  }
  
  
  dino.show();
  dino.move();
  
  
}