class building {
  constructor(type, x, y) {
    this.type = type;
    this.x = x;
    this.y = y;
  }

  update() {
    /*
    this.velocity = createVector(mouseX, mouseY).sub(this.x, this.y)
    this.velocity = this.velocity.normalize();
    this.x+= this.velocity.x
    this.y+= this.velocity.y
    */
    switch (this.type) {
      case 0:
        fill(176, 176, 176)
        rectMode(CENTER)
        rect(this.x, this.y, 50, 50);
        rectMode(CORNER)

        //this.x, this.y,
        break;
      case 1:
        break;
      case 69:
        break;
      default:
        break;
    }
}
}

function mousePressed() {
  if (scene === 1) {
  buildings.push(new building(0, mouseX, mouseY))
  }
}

class ghost {
  constructor(type) {
    this.type = type;
  }

  update() {
    /*
    this.velocity = createVector(mouseX, mouseY).sub(this.x, this.y)
    this.velocity = this.velocity.normalize();
    this.x+= this.velocity.x
    this.y+= this.velocity.y
    */
    switch (this.type) {
      case 0:
        fill(176, 176, 176, 100)
        rectMode(CENTER)
        rect(mouseX, mouseY, 50, 50);
        rectMode(CORNER)

        //this.x, this.y,
        break;
      case 1:
        break;
      case 69:
        break;
      default:
        break;
    }
}
}