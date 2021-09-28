i = 1.85 // upper mouth radian
x = 0.2 // lower mouth radian
speed = 0.01 // speed of mouth opening & closing

function setup() {
  createCanvas(400, 400);
  frameRate (80) 

}

function draw() {
  background(95, 215, 236);


rectMode (CENTER);
line (0, 50, 400, 300);
fill (255, 255, 255);

rect (200, 150, 150, 150);
fill (252, 108, 133);

      ellipse(200, 190, 10, 10);

arc(frameCount, 180, 80, 80, 100, PI + QUARTER_PI);
arc(50, frameCount, 80, 80, 0, PI + QUARTER_PI, PIE);
arc(50, 50, 80, 80, 0, PI + QUARTER_PI);
arc(200, 320,80, 80, 100, PI + QUARTER_PI);

fill (255, 255, 0)

stroke ("green)")

ellipse (200, 280, 40, 40)
ellipse (200, 140, 40, 40)
stroke ("yellow)")
ellipse (200, 70, 40, 40)





fill(255, 255, 0);
  ellipse(200, 200, 50, 50);

  fill(0);
  if (i >= 2 || i <= 1.8) {
    speed = speed*(-1) 
  }
  arc(200, 200, 50, 50, 
      (i+=speed)*PI, (x-=speed)*PI, PIE);

      ellipse(200, 190, 5, 5);
      
}