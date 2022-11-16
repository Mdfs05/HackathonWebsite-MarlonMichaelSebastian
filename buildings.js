class building {
  constructor(type, x, y) {
    this.type = type;
    this.x = x;
    this.y = y;
  }

  update() {
    this.velocity = createVector(mouseX, mouseY).sub(this.x, this.y)
    this.velocity = this.velocity.normalize();
    this.x+= this.velocity.x
    this.y+= this.velocity.y
    switch (this.type) {
      case 0:
        console.log('AYOOPOOOO');
        rect(this.x, this.y, 10, 10);
        break;
      case 1:
        console.log('swwy');
        break;
      case 69:
        break;
      default:
        break;
    }
}
}