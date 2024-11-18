let myCars = [];

function setup() {
  createCanvas(800,600);
  for (let i =0 ; i <100; i++ ){
    myCars[i]= new Car(color(255,0,0),
random(width), random(height),1, random(360));
  
}
}
function draw() {
  background(220);
   for (let j = 0; j <100; j++){
  myCars [j] .drive();   //Call methods on the object.
  myCars [j] .display();
     myCars[j].flip();
     
  
}
}