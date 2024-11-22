function setup() {
    createCanvas(600, 600);
  background("black")
  }
  function draw() {
    stroke("black")
    fill("grey")
    
    // console.log(mouseIsPressed)
    
    if(mouseIsPressed) {
        rect(mouseX, mouseY, 10, 10)
    } 
  }
  