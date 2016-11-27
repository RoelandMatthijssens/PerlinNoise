function Particle(){
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0, 0);

    this.update = function update(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.pos.x = this.pos.x % width;
        this.pos.y = this.pos.y % height;
        this.acc.mult(0);
    };

    this.applyForce = function applyForce(forceVector){
        this.acc.add(forceVector);
    };

    this.show = function(){
        stroke(0);
        point(this.pos.x, this.pos.y);
    }
}
