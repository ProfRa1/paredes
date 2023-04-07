const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var btn1;
var btn2;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    ground_options = {
        isStatic: true,
    };
    ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
    World.add(world, ground);

    ground2 = Bodies.rectangle(10, 200, 20, 400, ground_options);
    World.add(world, ground2);

    ground3 = Bodies.rectangle(390, 200, 20, 400, ground_options);
    World.add(world, ground3);

    ground4 = Bodies.rectangle(200, 10, 400, 20, ground_options);
    World.add(world, ground4);

    rectMode(CENTER);
    ellipseMode(RADIUS);
}

function draw() {
    background(51);
    fill("orange");
    rect(ground.position.x, ground.position.y, 400, 20);
    rect(ground2.position.x, ground2.position.y, 20, 400);
    rect(ground3.position.x, ground3.position.y, 20, 400);
    rect(ground4.position.x, ground4.position.y, 400, 20);
    Engine.update(engine);
}
