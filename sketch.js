function setup() {
  createCanvas(512, 512);
  background(71);
}

function draw() {
  stroke(231);
  strokeWeight(1);
  for (let i = 0; i < 1000; i++) {
    let x = random(0, 512);
    let y = random(0, 512);
    point(x | y, x & y);
    point(x & y, x ^ y);
    // point(x ^ y, x | y);
  }
}
