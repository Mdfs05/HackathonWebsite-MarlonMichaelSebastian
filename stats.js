class stat {
  constructor(type, x, y, value, per) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.value = value;
    this.per = per;
  }

  update() {
    if (this.per === true) {
      fill(88, 235, 52, 255);
      text((this.type + ": "+ this.value + '%'), this.x, this.y)
    }
    else {
      fill(88, 235, 52, 255)
      text((this.type + ": "+ this.value), this.x, this.y)

    }
  }
}