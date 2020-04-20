

var canvas;
var brick1, brick2, brick3, brick4, brick5, brick5, brick6, brick7, brick8, brick9, brick10;

function setup() {
  var canvas = createCanvas(1500,1200);

}

function draw() {
  background(0,0,0);  
  brick1 = rect(100, 600, 1000, 40);
  brick2 = rect(300, 300, 150, 300);
  brick3 = rect(800, 300, 150, 300);
  brick4 = rect(450, 400, 350, 200);
  brick5 = rect(580, 200, 100, 200);
  brick6 = rect(275, 250, 200, 50);
  brick7 = rect(775, 250, 200, 50);
  brick8 = rect(555, 200, 150, 50);
  brick9 = rect(595, 130, 70, 70);
  brick10 = triangle(627, 75, 595, 130, 665, 130);

  drawSprites();
}