function setup() {
  createCanvas(400, 400);
}

var cities = ["Ottawa", "New York", "London"];
var buttonX = 100;
var buttonY = 125;

function draw() {
  background(220);
  fill(0, 0, 0);
  text("Select a City for Simulation", buttonX+25, buttonY-25);
  fill(12, 203, 102);
  for(var i =0; i <cities.length; i++) {
    fill(12, 203, 102);
    rect(buttonX, buttonY + (i*75),200,50);
    fill (0, 0, 0);
    text (cities[i], buttonX+75, buttonY+25 + (i*75));
  }

  mouseClicked = function() {
    if (mouseX >= buttonX && mouseX <= buttonX+200 && mouseY >= buttonY && mouseY <= buttonY+50) {
      
    } 
  }
}

