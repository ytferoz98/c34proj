class Ground {
    constructor() {
        var options = {
            isStatic: true
        } 
        this.body = Matter.Bodies.rectangle(1500, 780, 3000, 40, options)
    }

    display() {
        push;
        stroke("white");
        fill("white");
        rectMode(CENTER);
        rect(1500, 780, 3000, 40);
        pop;
    }
}