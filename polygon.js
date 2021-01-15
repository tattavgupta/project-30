class Polygon{
    constructor(x,y,radius){
       var options={
           isStatic:false,
           restitution : 0.9,
           friction  : 1.0,
           density : 1.0
        }
        this.polygon=Bodies.circle(x,y,radius,options)
        this.radius=radius
        this.polygonIMG=loadImage("polygon.png")
        World.add(world,this.polygon)
    }

    display(){
        var pos=this.polygon.position
        imageMode(CENTER)
        image(this.polygonIMG,pos.x,pos.y,this.radius*2.5,this.radius*2.5)
    }
}