const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball, ground, ropeObject;

function setup (){
    createCanvas(2000, 800);
    engine = Engine.create();
    world = engine.world;

    circleOptions = {
        frictionAir: 0.005,
        density: 1
    }
    ball = Bodies.circle(500, 100, 50, circleOptions);
    World.add(world, ball);

    groundOptions = {
        isStatic: true
    }
    ground = Bodies.rectangle(600, 600, 1100, 20, groundOptions);
    World.add(world, ground);

    ropeObject = new Rope(this.ball, {x:500, y:50});

    //column 1
    box1 = new Box(700, 100, 70, 70);
    box2 = new Box(700, 100, 70, 70);
    box3 = new Box(700, 100, 70, 70);
    box4 = new Box(700, 100, 70, 70);
    box5 = new Box(700, 100, 70, 70);
    box6 = new Box(700, 100, 70, 70);
    box7 = new Box(700, 100, 70, 70);

    //column 2
    box8 = new Box(800, 100, 70, 70);
    box9 = new Box(800, 100, 70, 70);
    box10 = new Box(800, 100, 70, 70);
    box11 = new Box(800, 100, 70, 70);
    box12 = new Box(800, 100, 70, 70);
    box13 = new Box(800, 100, 70, 70);
    box14 = new Box(800, 100, 70, 70);

    //column 3
    box15 = new Box(900, 100, 70, 70);
    box16 = new Box(900, 100, 70, 70);
    box17 = new Box(900, 100, 70, 70);
    box18 = new Box(900, 100, 70, 70);
    box19 = new Box(900, 100, 70, 70);
    box20 = new Box(900, 100, 70, 70);
}

function draw(){
    background("white");
    Engine.update(engine);
    rectMode(CENTER);
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 50);
    rect(ground.position.x, ground.position.y, 1100, 20);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    ropeObject.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}