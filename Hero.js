class Hero{
    constructor() {
        this.body = Matter.Bodies.circle(300, 200, 30, {isStatic: false});
        this.image = loadImage("images/Superhero-01.png");

        Matter.World.add(myWorld, this.body);
    }

    display() {
        push;
        image(this.image, 300, 200);
        pop;
    }
}