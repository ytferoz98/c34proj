var backGround, superheroIMG;
var hero, ground;
var myWorld, myEngine;

function preload() {
//preload the images here
  backGround = loadImage("images/GamingBackground.png");
  superheroIMG = loadImage("images/Superhero-01.png");
}

function setup() {
  createCanvas(3000, 800);
  myEngine = Matter.Engine.create();
  myWorld = myEngine.world;



  // create sprites here
  ground = new Ground();
  hero = new Hero();

  var options = {
    bodyA: hero.body,
    pointB: {x:300, y:100},
    length: 1,
    stiffness: 0.02
}
  flight = Matter.Constraint.create(options);

}

function draw() {
  background(backGround);
  Matter.Engine.update(myEngine);




  ground.display();
  hero.display();

}

