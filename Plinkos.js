class Plinkos{
    constructor(x,y,r) {
        var options = {
            restitution:1,
            friction:0,
            isStatic:true
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);

    }
    display() {
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r);
        pop();

    }
}