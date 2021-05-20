class Cactus {
  constructor () {
    this.r = 44;
    this.x = width;
    this.y = height- this.r;
  }
  
  move() {
    this.x -= 8;
  }
  
  show() {
    image(cImg, this.x, this.y, this.r, this.r)
  }
  
}