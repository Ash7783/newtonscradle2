
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var pend1;
var sling1;

function setup() {
	createCanvas(windowWidth / 2, windowHeight / 2);
	engine = Engine.create();
	world = engine.world;

	pend1 = new Pendulum(400, 600, "black")
	pend2 = new Pendulum(500, 600, "black")
	pend3 = new Pendulum(600, 600, "black")
	pend4 = new Pendulum(300, 600, "black")
	pend5 = new Pendulum(200, 600, "black")

	sling = new Sling(pend1.body, { x: 400, y: 150 });
	sling2 = new Sling(pend2.body, { x: 500, y: 150 });
	sling3 = new Sling(pend3.body, { x: 600, y: 150 });
	sling4 = new Sling(pend4.body, { x: 300, y: 150 });
	sling5 = new Sling(pend5.body, { x: 200, y: 150 });

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(255);

	pend1.display();
	pend2.display();
	pend3.display();
	pend4.display();
	pend5.display();

	sling1.display();
	sling2.display();
	sling3.display();
	sling4.display();
	sling5.display();

}

function keyPressed(){
	if (keyCode===32){
	Matter.Body.applyForce(pend5.body,pend5.body.position,{x:-100,y:100});
}
}