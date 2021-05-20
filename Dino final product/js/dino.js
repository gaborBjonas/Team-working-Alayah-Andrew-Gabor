class Dino {
  constructor(){
    this.r = 75;
    this.x =this.r;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 1.55;
    
  }
  
  
  jump () {
    if( this.y == height - this.r) {
      this.vy = -25;
    }  
  }
  
  hits(cactus) {
    return collideRectRect(this.x, this.y, this.r, this.r, cactus.x, cactus.y, cactus.r, cactus.r);
  }
  
  
  
  move () {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height-this.r);
  }
  
  
  show () {
    image(dImg, this.x, this.y, this.r, this.r);
  }
}