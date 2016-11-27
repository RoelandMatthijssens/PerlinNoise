function Particle(){
    this.pos = createVector(random(width), random(height));
    this.previousPos = this.pos;
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 2.5;

    this.update = function update(vector){
        this.resetPrevious();
        this.applyForce(vector.getDirection());
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    };

    this.applyForce = function applyForce(forceVector){
        this.acc.add(forceVector);
    };

    this.show = function(){
        stroke(0, 15);
        strokeWeight(1);
        line(this.pos.x, this.pos.y, this.previousPos.x, this.previousPos.y);
    };

    this.resetPrevious = function resetPrevious(){
        this.previousPos = this.pos;
    };

    this.wrapAround = function wrapAround(){
        var wrapped = false;
        if(this.pos.x >= width){
            this.pos.x = 0;
            wrapped = true;
        }
        if(this.pos.x < 0){
            this.pos.x = width-1;
            wrapped = true;
        }
        if(this.pos.y >= height){
            this.pos.y = 0;
            wrapped = true;
        }
        if(this.pos.y < 0){
            this.pos.y = height-1;
            wrapped = true;
        }
        return wrapped;
    }
}
