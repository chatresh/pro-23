class Box {
  constructor(x, y,width,height) {
    var options = {
        'restitution':0.1,
        'friction':5.0,
        'density':0.2
    }
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(25,96,125);
    rect(0, 0, this.width, this.height);
    pop();
  }
};

  