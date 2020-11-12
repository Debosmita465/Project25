
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground1;
var paper1;
var side1,side2,side3;
var keyPressed;
var dustbin1,dustbinImg;
function preload()
{
	dustbinImg= loadImage("dustbin.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

  
	//Create the Bodies Here.
ground1 = new ground(500,height-60,1000,20);
paper1 = new paper(100,630,30);
side1 = new dustbin(800,620,160,20);
dustbin1 = createSprite(790,515,20,20);
  dustbin1.addImage(dustbinImg);
  dustbin1.scale = 0.7;
 side2 = new dustbin(710,520,20,220);
 side3 = new dustbin(870,520,20,220);
  Engine.run(engine);
  var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });

}


function draw() {
  rectMode(CENTER);
  background(225);
  ground1.display();
  paper1.display();
  side1.display();
  side2.display();
  side3.display();

  //keyPressed();
  drawSprites();

}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:180,y:-180});
  }
}

