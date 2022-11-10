function preload() {
  song = loadImage('fb8.jpg');
}
var scene = 0;
var city = null;
function setup() {
  createCanvas(400, 400);
}

var cities = ["Ottawa", "New York", "London"];
var buttonX = 100;
var buttonY = 125;

 var btn1 = new Button({
    x: buttonX,
    y: buttonY,
    colour: [11, 252, 3],
    label: cities[0],
    onClick: function() {
      print("ottawa");
      city = cities[0];
              scene = 1;

    }
});
var btn2 = new Button({
    x: buttonX,
    y: buttonY+75,
      colour: [11, 252, 3],
    label: cities[1],
    onClick: function() {
      print("new york");
            city = cities[1];
              scene = 1;

    }
});
var btn3 = new Button({
    x: buttonX,
    y: buttonY+150,
      colour: [11, 252, 3],

    label: cities[2],
    onClick: function() {
      print("london");
            city = cities[2];
        scene = 1;

    }
});
var btn4 = new Button({
    x: buttonX,
    y: buttonY+225,
      colour: [255, 0, 0],

    label: 'ohio',
    onClick: function() {
      print("only in ohio");
              scene = -1;
    }
});

function draw() {
  background(220);
  text("Select a City for Simulation", buttonX+25, buttonY-25);
  if (scene === 0) {
  btn1.draw();
  btn2.draw();
  btn3.draw();
  btn4.draw();
  }
  if (scene === -1) {
    song.resize(500, 0)
    image(song, 0, 0)
  }
  /*
  fill(0, 0, 0);
  fill(12, 203, 102);
  for(var i =0; i <cities.length; i++) {
    fill(12, 203, 102);
    rect(buttonX, buttonY + (i*75),200,50);
    fill (0, 0, 0);
    text (cities[i], buttonX+75, buttonY+25 + (i*75));
  }

  mouseClicked = function() {
    if (mouseX >= buttonX && mouseX <= buttonX+200 && mouseY >= buttonY && mouseY <= buttonY+50) {
      print("ottawa");
    } 
  }
  */
}

