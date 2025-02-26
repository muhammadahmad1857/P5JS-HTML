// let x, y;
// let angle = 0;
// let r = 150;
// let shiftingAngle = [];
// let numAxis = 10;
// let x2 = [];
// let y2 = [];
// function setup() {
//   createCanvas(400, 400);
//   angleMode(DEGREES);
//   for (let i = 0; i < numAxis; i++) {
//     shiftingAngle[i] = (i * 90) / numAxis;
//   }
// }

// function draw() {
//   background(79, 148, 167);
//   stroke(255, 100);
//   // angle = map(mouseX, 0, width, 0, 368); // If you wanna do it with mouse movement
//   x = r * cos(angle);
//   y = r * sin(angle);

//   translate(width / 2, height / 2);
//   noFill();
//   ellipse(0, 0, r * 2, r * 2);
//   fill(0);
//   ellipse(x, y, 20, 20);

//   // fill(255);
//   // ellipse(x, 0, 20, 20);
//   // ellipse(0, y, 20, 20);

//   // line(-r, 0, r, 0);
//   // line(0, -r, 0, r);
//   for (let i = 0; i < numAxis; i++) {
//     x2[i] = r * cos(angle + shiftingAngle[i]);
//     y2[i] = r * sin(angle + shiftingAngle[i]);
//     push();
//     rotate(-shiftingAngle[i]);
//     // stroke(0, 0, 255);
//     line(-r, 0, r, 0);
//     // stroke(0, 255, 0);
//     line(0, -r, 0, r);

//     fill(255);
//     ellipse(x2[i], 0, 20, 20);
//     ellipse(0, y2[i], 20, 20);
//     pop();
//   }
//   angle += 1;
// }

let x, y;
let angle = 0;
let r = 150;
let shiftingAngle = [];
let numAxis = 10;
let x2 = [];
let y2 = [];

function setup() {
  createCanvas(400, 400);
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
