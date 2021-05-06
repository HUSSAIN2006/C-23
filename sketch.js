const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var B1,B2;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,380,400,20);
    B1 = new Box(200,10,50,50);
    B2 = new Box(230,100,50,80);
}
  
   

  
function draw(){
    background("white");
    Engine.update(engine);
    ground.display()
    B1.display()
    B2.display()
}
