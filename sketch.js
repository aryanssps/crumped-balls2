
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var bin1, bin2,bin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;
	

paper=new Paper(10,500);
bin1= new Bin(1020,547,200,20);
bin2= new Bin(1020,400,20,147);
bin3= new Bin(1200,400,20,147);


ground=new Ground(0,570, 1300,20)
	//Create the Bodies Here.

	Engine.run(engine);
	
  
}


function draw() {
	background("white");
	
	Engine.update(engine);
  
  paper.display();
   
bin1.display();
bin2.display();
bin3.display();
ground.display();



  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode===UP_ARROW){
console.log("up key pressed");
		Matter.Body.applyForce(paper.body,paper.body.position,{x:680,y:-500});
		//x:155,y:-130
	}
}




