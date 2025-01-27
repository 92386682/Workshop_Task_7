let square1, square2;
let circle1, circle2, circle3, circle4;
let holepuncharray = [];
let rectx = 25;
let size = 150;
let recty = 225;

class circles {
  constructor(x, y, r) {
      this.x = random(10, 500);
      this.y = random(10, 500);
      this.r = random (1, 45)
          } 

          movement(){
    this.x = this.x - random (1, -1);
    this.y = this.y - random (1, -1.1);
  };
show(){ 
  
    fill(255);
    circle(this.x, this.y, this.r);
    }}

 

function setup() {
  textAlign(CENTER,CENTER);

  text('click for cheese', 200, 200);
// frameRate(1);
  createCanvas(400, 400);
   for (holepunch = 0; holepunch < random(250, 500); holepunch++){    
            let xx = random(0, 425)
            let yy = random(0, 400);
            let holesize = random(3, 60);
            holepuncharray.push(new circles(xx, yy, holesize))}
};

function draw(){
  fill(0);

  background(255);
  noStroke();
   push();
   fill(0)
  rect(25, 25, 150)
  rect(225, 225, 150);
  rect(25, 225, 150);
  rect(225, 25, 150);
    noStroke();
  pop()

for (let x = 0; x < holepuncharray.length; x++) {
  holepuncharray[x].movement();
    holepuncharray[x].show();
  }}

function show(){ 
fill(0);
ellipse(this.x, this.y, 20, 20);

}