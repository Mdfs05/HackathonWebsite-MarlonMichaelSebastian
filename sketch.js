function preload() {
  
  song = loadImage('funny.gif');
  img = loadImage('funny.gif')
  map = loadImage('istockphoto-1067670718-612x612.jpg')
  song2 = loadSound('song2.mp3');
  scream = loadSound('SCREAM.wav');

  ottawaImg = loadImage('ottawabackdrop.jpg');

}
var scene = 0;
var dead = 0;
var deleteMode = 0;
var item = 0;
var currentGhost = 0;
var city = null;
var menuC = false;
var menuLayer = 0;
var deleteButton = new Button({
  x: 495,
  y: 480,
  width: 30,
  height: 30,
  colour: [255, 0, 0],
  label:'D',
  onClick:function() {
    console.log("Menu working");
    if (deleteMode === 0) {
          deleteMode = 1;
          currentGhost = 0;
          gBuilding.type = currentGhost;
    }
    else {
      deleteMode = 0;
    }
    
  }
});
var winButton = new Button({
  x: 10,
  y: 480,
  width: 120,
  height: 30,
  colour: [224, 0, 202],
  label:'FINISH GAME',
  size: 14,
  onClick:function() {
    console.log("Menu working");
    scene = 2;
  }
});
var buttonX = 15;
var buttonY = 90;
var menuButtonPressed = false;
var startingFunds = 1000000;
var statArray = [[], [0, -50000, 1, -2, 0], [0, -35000, -2, 0, 3], [0, -25000, -1, 0, 3], [0, -60000, 1, -1, -3], [0, -15000, 5, -3, -4], [0, -55000, 1, 1, 0], [0, -40000, 1, 0, 2], [0, -75000, -3, 2, 1], [0, -40000, -1, 1, 3], [0, -40000, -1, 0, 1], [4, -15000, -1, -1, 1], [100, -45000, 0, -1, 0], [0, -55000, 2, -1, 1], [200, -50000, 1, -1, 0], [10, -100000, 1, -5, -10]];
function setup() {
  createCanvas(550, 520);
  song2.play();
  // 400, 400
}
var buildings = [];
var peoples = [];
var menuButtons = [[new Button({
  x: buttonX + 400,
  y: buttonY - 15,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'Infrastructure',
  size: 14,
  onClick:function(){
    console.log("Infrastructure");
    menuLayer = 1;
  }
}), new Button({
  x: buttonX + 400,
  y: buttonY + 25,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'Utilities',
  onClick:function(){
    console.log("Utilities");
    menuLayer = 2;
  }
}), new Button({
  x: buttonX + 400,
  y: buttonY + 65,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'Housing',
  onClick:function(){
    console.log("Housing");
        menuLayer = 3;


  }
})], [new Button({ //layer 1
  x: buttonX + 400,
  y: buttonY - 15,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'Office',
  cost: 50000,
  onClick:function(){
    console.log("Office");
    menuButtonPressed = false;
    currentGhost = 1;
    gBuilding.type = currentGhost;

  }
}), new Button({
  x: buttonX + 400,
  y: buttonY + 25,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'Library',
  cost: 35000,
  onClick:function(){
    console.log("Library");
    menuButtonPressed = false;
    currentGhost = 2;
    gBuilding.type = currentGhost;

  }
}), new Button({
  x: buttonX + 400,
  y: buttonY + 65,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'Park',
  cost: 25000,
  onClick:function(){
    console.log("Park");
    menuButtonPressed = false;
    currentGhost = 3;
    gBuilding.type = currentGhost;

  }
}), new Button({
  x: buttonX + 400,
  y: buttonY + 105,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'Road',
  cost: 60000,
  onClick:function(){
    console.log("Road");
    menuButtonPressed = false;
    currentGhost = 4;
    gBuilding.type = currentGhost;

  }
}), new Button({
  x: buttonX + 400,
  y: buttonY + 145,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'BACK',
  onClick:function(){
    menuLayer = 0;
}})],
                  [new Button({ //layer 1
  x: buttonX + 400,
  y: buttonY - 15,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'Coal Plant',
  size: 14,
  cost: 15000,
  onClick:function(){
    console.log("Coal");
    menuButtonPressed = false;
    currentGhost = 5;
    gBuilding.type = currentGhost;
  }
}), new Button({
  x: buttonX + 400,
  y: buttonY + 25,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'Wind Farm',
  size: 14,
  cost: 55000,
  onClick:function(){
    console.log("Wind");
    menuButtonPressed = false;
    currentGhost = 6;
    gBuilding.type = currentGhost;

  }
}), new Button({
  x: buttonX + 400,
  y: buttonY + 65,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'Solar Field',
  size: 14,
  cost: 40000,
  onClick:function(){
    console.log("Solar");
    menuButtonPressed = false;
    currentGhost = 7;
    gBuilding.type = currentGhost;
  }
}), new Button({
  x: buttonX + 400,
  y: buttonY + 105,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'Nuclear Plant',
  size: 14,
  cost: 75000,
  onClick:function(){
    console.log("Nuclear");
    menuButtonPressed = false;
    currentGhost = 8;
    gBuilding.type = currentGhost;
  }
}),
                  new Button({
  x: buttonX + 400,
  y: buttonY + 145,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'Water Treatment',
  cost: 40000,
  size: 12,
  onClick:function(){
    console.log("Water");
    menuButtonPressed = false;
    currentGhost = 9;
    gBuilding.type = currentGhost;
  }
}),
                  new Button({
  x: buttonX + 400,
  y: buttonY + 185,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'Waste Treatment',
  cost: 40000,
  size: 12,
  onClick:function(){
    console.log("Waste");
    menuButtonPressed = false;
    currentGhost = 10;
    gBuilding.type = currentGhost;
  }
}), new Button({
  x: buttonX + 400,
  y: buttonY + 225,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'BACK',
  onClick:function(){
    menuLayer = 0;
}})],
                  [new Button({ //layer 1
  x: buttonX + 400,
  y: buttonY - 15,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'House',
  cost: 15000,
  onClick:function(){
    console.log("House");
    menuButtonPressed = false;
    currentGhost = 11;
    gBuilding.type = currentGhost;
  }
}), new Button({
  x: buttonX + 400,
  y: buttonY + 25,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'Apartment Complex',
  size: 10,
  cost: 45000,
  onClick:function(){
    console.log("Apartment");
    menuButtonPressed = false;
    currentGhost = 12;
    gBuilding.type = currentGhost;
  }
}), new Button({
  x: buttonX + 400,
  y: buttonY + 65,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'Hotel',
  cost: 55000,
  onClick:function(){
    console.log("Hotel");
    menuButtonPressed = false;
    currentGhost = 13;
    gBuilding.type = currentGhost;
  }
}), new Button({
  x: buttonX + 400,
  y: buttonY + 105,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'Condo',
  cost: 50000,
  onClick:function(){
    console.log("Condo");
    menuButtonPressed = false;
    currentGhost = 14;
    gBuilding.type = currentGhost;
  }
}),
                  new Button({
  x: buttonX + 400,
  y: buttonY + 145,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'Content House',
  size: 14,
  cost: 100000,
  onClick:function(){
    console.log("Content!");
    menuButtonPressed = false;
    currentGhost = 15;
    gBuilding.type = currentGhost;
  }
}), new Button({
  x: buttonX + 400,
  y: buttonY + 185,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'BACK',
  onClick:function(){
    menuLayer = 0;
}})]
                  ];
var gBuilding = new ghost(currentGhost);
var stats = [new stat("Population", 5, 5, 1000, false), new stat("Funds", 5, 15, startingFunds, false), new stat("Economic", 5, 25, 100, true), new stat("Environmental", 5, 35, 100, true), new stat("Health", 5, 45, 100, true)];
var cities = ["Ottawa", "New York", "London"];
var cityStats = [[0, 1000000, 50, 50, 50],[0, 1500000, 70, 10, 30],[0, 2000000, 0, 0, 0]]



 var btn1 = new Button({
    x: buttonX,
    y: buttonY,
    colour: [11, 252, 3],
    label: cities[0],
    onClick: function() {
      print("ottawa");
      city = 0;
      scene = 1;
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
      city = 1;
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
      city = 2
      scene = 1;
      loadBuildings()
    }
});
/*var btn4 = new Button({
    x: buttonX,
    y: buttonY+225,
    colour: [255, 0, 0],
    label: 'ohio',
    onClick: function() {
      print("only in ohio");
      scene = -1;
    }
    
});*/
function loadBuildings() {
  for (var i =0; i<stats.length; i++) {
    stats[i].value = cityStats[city][i]
  }
  for (var i =0; i <30; i++) {
  peoples.push(new people(random(0, width), random(0, height), createVector(random(-1, 1), random(-1, 1))));
  }
}
//Menu button functionalitity
var btnMenu = new Button({
  x: 495,
  y: 30,
  width: 30,
  height: 30,
  colour: [79, 133, 219],
  label:'˅',
  onClick:function() {
    console.log("Menu working");
    if (menuButtonPressed === false) {
          menuButtonPressed = true;
    }
    else {
      menuButtonPressed = false;
    }
  }
});

function menu() {
  fill(3, 236, 252, 100);
  rect(395, 65, 150, 300);
  for(var i = 0; i < menuButtons[menuLayer].length; i++) {
    if (i === 0) {
      textSize(12);
    }
    else {
      textSize(25);
    }
    menuButtons[menuLayer][i].draw();
  }
}

function infrastructure() {
  fill(3, 236, 252, 100);
  rect(395, 65, 150, 300);
}

function utilties() {
  fill(3, 236, 252, 100);
  rect(395, 65, 150, 300);
}

function housing() {
  fill(3, 236, 252, 100);
  rect(395, 65, 150, 300);
}


function draw() {
  background(220);
  if (scene === 0) {
  textStyle(NORMAL);

  btn1.draw();
  btn2.draw();
  btn3.draw();
  //btn4.draw();
    
  textFont('Comic Sans MS');
  textStyle(BOLD);
  textSize(25);
  text("Select a City for Simulation", buttonX, buttonY-50);

  }
  if (scene === 1) {
    background(56, 168, 50);
    menuC = collidePointRect(mouseX, mouseY, btnMenu.x, btnMenu.y, btnMenu.width, btnMenu.height);
    if (menuButtonPressed === true && menuC === false) {
      menuC = collidePointRect(mouseX, mouseY, 395, 65, 150, 300);
    }
    if (menuC === false) {
      menuC = collidePointRect(mouseX, mouseY, deleteButton.x, deleteButton.y, deleteButton.width, deleteButton.height);
    }
    if (menuC === false) {
      menuC = collidePointRect(mouseX, mouseY, winButton.x, winButton.y, winButton.width, winButton.height);
    }
    //image(map, 0, 0);
    //Menu button functionalitiy
    if (currentGhost !== 0) {
      deleteMode = 0;
    }
    if (deleteMode === 1) {
      deleteButton.colour = [255, 255, 255]
    }
    else {
      deleteButton.colour = [255, 0, 0]
    }
    for (var i = 0; i < buildings.length; i++) {
      buildings[i].light = false;
      if (deleteMode === 1) {
        if (menuC === false) {
      if(collidePointRect(mouseX, mouseY, buildings[i].x-buildings[i].width/2, buildings[i].y-buildings[i].height/2, buildings[i].width, buildings[i].height)) {
        buildings[i].light = true;
      }
      
      else {
        buildings[i].light = false;
      }
      }
      }
      buildings[i].update()
    };
    for (var i = 0; i < peoples.length; i++) {
      peoples[i].update()
     if (peoples[i].stuck === true) {
        peoples.splice(i, 1)
       scream.play();
       dead++;
       }
    };
      if (menuC === false) {
    gBuilding.update()
      }
    btnMenu.draw();
    deleteButton.draw();
    winButton.draw();
    console.log(currentGhost)
      if (menuButtonPressed === true) {
        //fill(3, 236, 252, 100);
        //rect(395, 65, 150, 300);
        menu();
      }
    /*
      if (infaButtonPressed === true) {
        infrastructure();
      }
      if (utilityButtonPressed === true) {
        utilties();
      }
      if(housingButtonPressed === true) {
        housingButtonPressed();
      }
      */
    textStyle("Georgia");
    textSize(12);
    for (i = 0; i < stats.length; i++){
      stats[i].update()
    }
    };
  if (scene === 2) {
    fill(0, 0, 0)
    background(133, 251, 255)
    textSize(30)
    textFont('Comic Sans MS');
    textStyle(BOLD)
    textAlign(CENTER)
    text("YOU FINISHED!", 275, 40);
    textSize(24)
    textStyle(NORMAL)
    text("Lets See How You Did", 275, 80);
    text("Economics: " + stats[2].value + "%", 137.4, 160)
    text("Environmental: " + stats[3].value + "%", 412.5, 160)
    text("Health: " + stats[4].value + "%", 275, 200);
    var totalS = floor((stats[2].value+stats[3].value+stats[4].value)/3)
    textSize(30)
    text("Total Sustainability: " + totalS + "%", 275
, 240)
        text("Population: " + stats[0].value, 275
, 280)
    text("Remaining Funds: " + stats[1].value, 275
, 320)
    text("People Killed: " + dead + '/30', 275
, 360)
    textSize(40)
    var finalS = floor(totalS+(totalS*(stats[0].value*0.05)))
    text("FINAL SCORE", 275
, 420)
    text(finalS, 275
, 460)
    
  }
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





