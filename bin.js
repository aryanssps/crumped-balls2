class Bin{
    constructor(x,y,width,height){

        var options={
            'isStatic':true
            
        }
        this.width=width;
        this.height=height;
        
        this.image=loadImage("bin.png");
        this.body=Matter.Bodies.rectangle(x,y,width,height,options );
        World.add(world, this.body);
        

    }
    display(){
   
       
        image(this.image,1020,370, 200, 200);
    }
}