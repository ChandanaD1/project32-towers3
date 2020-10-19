class Blocks {
    constructor(x, y, width, height){
      var options = {
        restitution :0.8,
        friction :1.0,
        density :1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color=color(random(0, 255), random(0, 255), random(0, 255));
    World.add(world, this.body);
  }
  display(){
    push();
    if (this.body.speed > 3) {
      this.Visiblity = this.Visiblity - 5
    }
    translate(this.body.position.x, this.body.position.y);
    rotate (this.body.angle)
    fill(this.color)
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }

  score() {
    if(this.Visisbility<0 && this.Visibility>105) {
      score++
    }
  }
  }
      
  