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
        break;
      case 1:
        this.width = 50;
        this.height = 50;
        //Office Complex
        fill(176, 176, 176);
        rectMode(CENTER);
        rect(this.x, this.y, 50, 50);
        rectMode(CORNER);
        //this.x, this.y,
        break;
      case 2:
        //Library
        fill(69, 58, 39);
        rectMode(CENTER);
        rect(this.x, this.y, 70, 40);
        rectMode(CORNER);
        //this.x, this.y,
        break;
      case 3:
        //Park
        fill(37, 110, 47);
        rectMode(CENTER);
        rect(this.x, this.y, 60, 60);
        rectMode(CORNER);
        //this.x, this.y,
        break;
      case 4:
        //Road
        fill(47, 51, 47);
        rectMode(CENTER);
        rect(this.x, this.y, 550, 45);
        rectMode(CORNER);
        //this.x, this.y,
        break;
      case 5:
        //Coal Power Plant
        fill(26, 17, 1);
        rectMode(CENTER);
        rect(this.x, this.y, 60, 40);
        rectMode(CORNER);
        break;
      case 6:
        //Wind Farm
        fill(255, 255, 255);
        rectMode(CENTER);
        rect(this.x, this.y, 100, 100);
        rectMode(CORNER);
        break;
      case 7:
        //Solar Field
        fill(35, 51, 54);
        rectMode(CENTER);
        rect(this.x, this.y, 30, 30);
        rectMode(CORNER);
        break;
      case 8:
        //Nuclear Power
        fill(16, 227, 90);
        rectMode(CENTER);
        rect(this.x, this.y, 60, 60);
        rectMode(CORNER);
        break
      case 9:
        //Water Treatment
        fill(101, 133, 201);
        rectMode(CENTER);
        rect(this.x, this.y, 90, 90);
        rectMode(CORNER);
        break;
      case 10:
        //Waste Treatment
        fill(52, 77, 5);
        rectMode(CENTER);
        rect(this.x, this.y, 90, 90);
        rectMode(CORNER);
        break;
      case 11:
        //House
        fill(77, 40, 17);
        rectMode(CENTER);
        rect(this.x, this.y, 35, 35);
        rectMode(CORNER);
        break;
      case 12:
        //Apartment Complex
        fill(134, 140, 122);
        rectMode(CENTER);
        rect(this.x, this.y, 50, 50);
        rectMode(CORNER);
        break;
      case 13:
        //Hotel
        fill(105, 13, 25);
        rectMode(CENTER);
        rect(this.x, this.y, 80, 60);
        rectMode(CORNER);
        break;
      case 14:
        //Condo
        fill(252, 225, 228);
        rectMode(CENTER);
        rect(this.x, this.y, 70, 50);
        rectMode(CORNER);
        break;
      case 15:
        //Condo
        fill(3, 244, 252);
        rectMode(CENTER);
        rect(this.x, this.y, 100, 100);
        rectMode(CORNER);
        break;
      /*
      default:
        //Trying to replicate missing texture
        fill(224, 4, 195);
        rectMode(CENTER);
        rect(this.x, this.y, 50, 50);
        rectMode(CORNER);
        break;
      */
    }
}
}

function mousePressed() {
  if (scene === 1) {
  var collision = false;
    for (var i = 0; i< buildings.length; i++) {
    if (collideRectRect(mouseX - 25, mouseY - 25, 50, 50, buildings[i].x - 25,buildings[i].y - 25, 50, 50)) {
      collision = true;
    }
  }
    if (collision === false && menuC === false) {
      console.log("WAAAAH")
      if (currentGhost !== 0) {
      console.log("AHAHAHAHA")
      buildings.push(new building(currentGhost, mouseX, mouseY))
      }
    }
  }
  if (deleteMode === 1) {
    for (var i =0; i < buildings.length; i++) {
      if (collidePointRect(mouseX, mouseY, buildings[i].x-25, buildings[i].y-25, 50, 50)) {
        buildings.splice(i, 1)
      }
    }
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
    var ghostC = false;
    for (var i = 0; i< buildings.length; i++) {
    if (collideRectRect(mouseX - 25, mouseY - 25, 50, 50, buildings[i].x - 25,buildings[i].y - 25, 50, 50)) {
      ghostC = true;
    }
  }
    switch (this.type) {
      case 0:
        break;
      case 1:
        if (ghostC === true) {
                  fill(255, 0, 0, 100)

        }
        else {
                  fill(176, 176, 176, 100)

        }
        rectMode(CENTER)
        rect(mouseX, mouseY, 50, 50);
        rectMode(CORNER)
        //this.x, this.y,
        break;
      case 2:
        if (ghostC === true) {
                  fill(255, 0, 0, 100)

        }
        else {
                  fill(69, 58, 39, 100)

        }
        rectMode(CENTER)
        rect(mouseX, mouseY, 70, 40);
        rectMode(CORNER)
        //this.x, this.y,
        break;
      case 3:
        if (ghostC === true) {
                  fill(255, 0, 0, 100)

        }
        else {
                  fill(37, 110, 47, 100)

        }
        rectMode(CENTER)
        rect(mouseX, mouseY, 60, 60);
        rectMode(CORNER)
        //this.x, this.y,
        break;
      case 4:
        if (ghostC === true) {
                  fill(255, 0, 0, 100)

        }
        else {
                  fill(47, 51, 47, 100)

        }
        rectMode(CENTER)
        rect(mouseX, mouseY, 550, 40);
        rectMode(CORNER)
        //this.x, this.y,
        break;      
      case 5:
        if (ghostC === true) {
                  fill(255, 0, 0, 100)

        }
        else {
                  fill(26, 17, 1, 100)

        }
        rectMode(CENTER)
        rect(mouseX, mouseY, 60, 40);
        rectMode(CORNER)
        //this.x, this.y,
        break;
      case 6:
        if (ghostC === true) {
                  fill(255, 0, 0, 100)

        }
        else {
                  fill(255, 255, 255, 100)

        }
        rectMode(CENTER)
        rect(mouseX, mouseY, 100, 100);
        rectMode(CORNER)
        //this.x, this.y,
        break;
      case 7:
        if (ghostC === true) {
                  fill(255, 0, 0, 100)

        }
        else {
                  fill(35, 51, 54, 100)

        }
        rectMode(CENTER)
        rect(mouseX, mouseY, 30, 30);
        rectMode(CORNER)
        //this.x, this.y,
        break;
      case 8:
        if (ghostC === true) {
                  fill(255, 0, 0, 100)

        }
        else {
                  fill(16, 227, 90, 100)

        }
        rectMode(CENTER)
        rect(mouseX, mouseY, 60, 60);
        rectMode(CORNER)
        //this.x, this.y,
        break;
      case 9:
        if (ghostC === true) {
                  fill(255, 0, 0, 100)

        }
        else {
                  fill(101, 133, 201, 100)

        }
        rectMode(CENTER)
        rect(mouseX, mouseY, 90, 90);
        rectMode(CORNER)
        //this.x, this.y,
        break;
      case 10:
        if (ghostC === true) {
                  fill(255, 0, 0, 100)

        }
        else {
                  fill(52, 77, 5, 100)

        }
        rectMode(CENTER)
        rect(mouseX, mouseY, 90, 90);
        rectMode(CORNER)
        //this.x, this.y,
        break;
      case 11:
        if (ghostC === true) {
                  fill(255, 0, 0, 100)

        }
        else {
                  fill(77, 40, 17, 100)

        }
        rectMode(CENTER)
        rect(mouseX, mouseY, 35, 35);
        rectMode(CORNER)
        //this.x, this.y,
        break;
      case 12:
        if (ghostC === true) {
                  fill(255, 0, 0, 100)

        }
        else {
                  fill(134, 140, 122, 100)

        }
        rectMode(CENTER)
        rect(mouseX, mouseY, 50, 50);
        rectMode(CORNER)
        //this.x, this.y,
        break;
      case 13:
        if (ghostC === true) {
                  fill(255, 0, 0, 100)

        }
        else {
                  fill(105, 13, 25, 100)

        }
        rectMode(CENTER)
        rect(mouseX, mouseY, 80, 60);
        rectMode(CORNER)
        //this.x, this.y,
        break;
      case 14:
        if (ghostC === true) {
                  fill(255, 0, 0, 100)

        }
        else {
                  fill(252, 225, 228, 100)

        }
        rectMode(CENTER)
        rect(mouseX, mouseY, 70, 50);
        rectMode(CORNER)
        //this.x, this.y,
        break;
      case 15:
        if (ghostC === true) {
                  fill(255, 0, 0, 100)

        }
        else {
                  fill(3, 244, 252, 100)

        }
        rectMode(CENTER)
        rect(mouseX, mouseY, 100, 100);
        rectMode(CORNER)
        //this.x, this.y,
        break;
      default:
        break;
    }
}
}