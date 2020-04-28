// You could have multiple flags like: start, launch to indicate the state of the game.
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var engine,world;
var angle=0;
var ball1,ball2,ball3;
var launcherX,launcherY;
var canonBall;
var shot;
var tanker;
var ground;
 var  flag="start"
function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
var canvas=createCanvas(800,500);

engine=Engine.create();
world=engine.world;
ball1=new Ball(400,40,20);
ball2=new Ball(300,40,20);
ball3=new Ball(500,30,20);
tanker = new Tanker(75,height- 110, 60, 30);
ground=new Ground(400,490,800,40);
canonBall = new CanonBall(20, 20);


shot = new ShootBall(canonBall.body, { x: 70, y: height - 220 });
}

function draw() {
// Remember to update the Matter Engine and set the background.
background("red");
Engine.update(engine);

tanker.display();
ball1.display();
ball2.display();
ball3.display();
ground.display();
canonBall.display();
shot.display();

if (keyIsDown(DOWN_ARROW)) {
    shot.attach(canonBall.body)
}



}


function keyReleased() {
    // Call the shoot method for the cannon.
    if (keyCode === UP_ARROW) {
        flag = "launch"

        shot.shoot()
    }

}