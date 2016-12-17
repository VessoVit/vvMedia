function setup(){
  // createCanvas(100, 100%);
  createCanvas(windowWidth, windowHeight);



  stroke(0);
  


  
}

function draw(){
  var cx, cy;
  var secRad;
  var minRad;
  var hRad;
  var clockDim;
  cx = width / 2;
  cy = height / 2;
  clockDim = radius * 1.8;
  var radius = min(width, height) / 2;
  secRad = radius * 0.72;
  minutesRadius = radius * 0.60;
  minRad = radius * 0.50;
  
  background(255);
  
  fill(80);
  // noStroke();
  ellipse(cx, cy, clockDim, clockDim)
  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI; 
  var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
  
  // Draw the hands of the clockx
  stroke(0);
  strokeWeight(5);
  line(cx, cy, cx + cos(s) * secRad, cy + sin(s) * secRad);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minRad, cy + sin(m) * minRad);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hRad, cy + sin(h) * hRad);
  
  // Draw the minute ticks
  strokeWeight(12);
  beginShape(POINTS);
  for (var a = 0; a < 360; a+=6) {
    var angle = radians(a);
    var x = cx + cos(angle) * secRad;
    var y = cy + sin(angle) * secRad;
    vertex(x, y);
  }
  endShape();
}