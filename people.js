class people {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  update() {
    /*
    this.velocity = createVector(mouseX, mouseY).sub(this.x, this.y)
    this.velocity = this.velocity.normalize();
    this.x+= this.velocity.x
    this.y+= this.velocity.y
    */
    this.x += this.direction.x
    this.y += this.direction.y
    var personC = false
    for (i = 0; i < buildings.length; i++) {
      if (collideRectCircle(buildings[i].x-25, buildings[i].y-25, buildings[i].width, buildings[i].height, this.x, this.y, 10)) {
        personC = true;
      }
    }
    fill(255, 255, 255);
    ellipse(this.x, this.y, 10, 10)
    
}
}