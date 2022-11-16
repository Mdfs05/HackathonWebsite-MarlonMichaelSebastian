function preload() {
  song = loadImage('funny.gif');
  img = loadImage('funny.gif')
  song2 = loadSound('song2.mp3');

  ottawaImg = loadImage('ottawabackdrop.jpg');
  

}
var scene = 0;
var city = null;
function setup() {
  createCanvas(550, 550);
  song2.play();
  // 400, 400
}
var buildings = [];

var cities = ["Ottawa", "New York", "London"];
var buttonX = 15;
var buttonY = 90;


 var btn1 = new Button({
    x: buttonX,
    y: buttonY,
    colour: [11, 252, 3],
    label: cities[0],
    onClick: function() {
      print("ottawa");
      city = cities[0];
              scene = 1;
loadBuildings()

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
loadBuildings()

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
      loadBuildings()


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

function loadBuildings() {
  buildings.push(new building(0, 0, 0))
}

function draw() {
  background(220);
  console.log(scene);
  if (scene === 0) {
  textStyle(NORMAL);

  btn1.draw();
  btn2.draw();
  btn3.draw();
  btn4.draw();
  textFont('Comic Sans MS');
  textStyle(BOLD);
  textSize(25);
  text("Select a City for Simulation", buttonX, buttonY-50);
  }
  if (scene === 1) {
     background(220);
    image(ottawaImg, 100, 100, 100, 100);
    for (i = 0; i < buildings.length; i++) {
      buildings[i].update()
    };
  }
  if (scene === -1) {
    test = createImg("funny.gif")
    noLoop();
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

