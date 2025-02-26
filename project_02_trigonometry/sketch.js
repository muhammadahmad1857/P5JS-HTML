let x, y;
let angle = 0;
let r = 150;
let shiftingAngle = [];
let numAxis = 10;
let x2 = [];
let y2 = [];

function setup() {
  createCanvas(300, 300);
  angleMode(DEGREES);
  for (let i = 0; i < numAxis; i++) {
    shiftingAngle[i] = (i * 90) / numAxis;
  }
}

function draw() {
  // Gradient background
  for (let i = 0; i < height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(color(25, 25, 112), color(70, 130, 180), inter);
    stroke(c);
    line(0, i, width, i);
  }

  stroke(255, 150);
  x = r * cos(angle);
  y = r * sin(angle);

  translate(width / 2, height / 2);
  noFill();
  strokeWeight(2);
  stroke(255, 204, 0);
  ellipse(0, 0, r * 2, r * 2);

  fill(255, 69, 0);
  noStroke();
  ellipse(x, y, 20, 20);

  for (let i = 0; i < numAxis; i++) {
    x2[i] = r * cos(angle + shiftingAngle[i]);
    y2[i] = r * sin(angle + shiftingAngle[i]);
    push();
    rotate(-shiftingAngle[i]);

    strokeWeight(1.5);
    stroke(173, 216, 230, 150);
    line(-r, 0, r, 0);
    line(0, -r, 0, r);

    fill(50 + i * 20, 200 - i * 10, 255 - i * 15);
    noStroke();
    ellipse(x2[i], 0, 15, 15);
    ellipse(0, y2[i], 15, 15);
    pop();
  }
  angle += 1;
}
