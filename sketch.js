
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,paperObject,groundObject
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	dustbinObj = new dustbin(1200,650);
	paperObject = new paper(100,450,40);
	groundObject = new ground(width/2,670,width,20);

	var options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0.5,
		density: 1.2
	}

	//Create the Bodies Here.
var render = Render.create({
	element : document.body,
	engine : engine,
	options : {
		width : 1200,
		height : 700,
		wireframes : false
	}
});

    dustbinPosition=width/2-100
 	dustbinY=610;

 	dustbinleftSprite=createSprite(dustbinPosition, dustbinY, 20,100);
 	dustbinleftSprite.shapeColor=color(255,0,0);

 	dustbinLeftBody = Bodies.rectangle(dustbinPosition+20, dustbinY, 20,100 , {isStatic:true} );
 	World.add(world, dustbinLeftBody);

 	dustbinBase=createSprite(dustbinPosition+100, dustbinY+40, 200,20);
 	dustbinBase.shapeColor=color(255,0,0);

 	dustbinBottomBody = Bodies.rectangle(dustbinPosition+100, dustbinY+45-20, 200,20 , {isStatic:true} );
 	World.add(world,dustbinBottomBody);

 	dustbinleftSprite=createSprite(dustbinPosition+200 , dustbinY, 20,100);
 	dustbinleftSprite.shapeColor=color(255,0,0);

 	dustbinRightBody = Bodies.rectangle(dustbinPosition+200-20 ,dustbinY, 20,100 , {isStatic:true} );
 	World.add(world, bdustbinRightBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  drawSprites();
 
}



