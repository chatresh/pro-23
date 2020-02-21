class Ground {
    constructor(x,y,width,height){
     var option={
         isStatic:true
     }
    this.body=Bodies.rectangle(x,y,width,height,option);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
      push();
    var pos =this.body.position;
    rectMode(CENTER);
    fill(180,45,20);
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
}