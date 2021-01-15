class Box{
    constructor(x,y,width,height){
      var options={
          restitution:0.5
      }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.visiblity=255
        this.image = loadImage("image/block.jpg")
        World.add(world,this.body);
    }
    display(){
    if(this.body.speed<7){
        var angle=this.body.angle
        push ()
        translate(this.body.position.x,this.body.position.y)
        angleMode(RADIANS)
        rotate (angle)
        imageMode(CENTER)
        fill(255,192,203)
        image(this.image,0,0,this.width,this.height)
        pop()
    }else{
     World.remove(world, this.body);
     push();
     this.visiblity = this.visiblity - 5;
     tint(255,this.visiblity);
     image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
     pop();
    }    

    }
}