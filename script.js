let coordinate = 0

function setup() {
  createCanvas(500, 500);
  frameRate(12);
  for (let coordinate = 0; coordinate < 800; coordinate += 50) {
  drawBoard(coordinate < 800);
  }
  xycoordinates = [0,50, 100, 150, 200, 250, 300, 350, 400, 450, 500]
  //Creates array for the coloured squares
}


function drawBoard() {
  line(coordinate, 0, coordinate, height);
  //Creates the lines that are vertical
  line(0, coordinate, width, coordinate);
  //Creates the lies that are horizontal
  coordinate += 50
}

function draw() {
  fill(random(255),random(255), random(255));
  rect(random(xycoordinates), random(xycoordinates), 50);
}