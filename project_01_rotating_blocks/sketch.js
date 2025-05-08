let angle = 0;
let distMouse = 200;
let size = 10;
let cols = 4;
let rows = 4;
let offset = 4;
let blocks = [];
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
  cols = width / size;
  rows = height / size;
  for (let i = 0; i < cols; i++) {
    blocks[i] = [];
    for (let j = 0; j < rows; j++) {
      blocks[i][j] = new Block(size / 2 + i * size, size / 2 + j * size);
    }
  }
}

function draw() {
  background(0);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      blocks[i][j].move();
      blocks[i][j].display();
    }
  }
}
