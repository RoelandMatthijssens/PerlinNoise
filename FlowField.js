function FlowField(cols, rows, scl, perlinIncr){
    this.scl = scl;
    this.cols = cols;
    this.rows = rows;
    this.perlinIncr = perlinIncr;
    this.vectors = [];
    this.particles = [];
    this.zoff = 0;

    this.newVector = function newVector(x, y){
        this.vectors.push(new FlowFieldVector(x, y, this.scl, this.perlinIncr));
    };

    this.show = function(){
        //this.vectors.map(function(i, index){
        //    i.show();
        //});
        this.particles.map(function(i, index){
            i.show();
        });
    };

    this.update = function update(){
        this.zoff+=this.perlinIncr/50;
        var self = this;
        this.vectors.map(function(i, index){
            i.update(self.zoff);
        });
        this.particles.map(function(i, index){
            i.wrapAround(); // make sure the indexes are within bounds
            var x = floor(i.pos.x/self.scl);
            var y = floor(i.pos.y/self.scl);
            var vectorIndex = x + y * self.cols;
            var vector = self.vectors[vectorIndex];
            i.update(vector);
        });
    };

    this.populateParticles = function populateParticles(amount){
        while(amount>0){
            this.particles.push(new Particle());
            amount--;
        }
    };

    this.populateVectors = function populateVectors(){
        for(var y = 0; y < this.rows; y++) {
            for (var x = 0; x < this.cols; x++) {
                this.newVector(x, y);
            }
        }
    }
}

function FlowFieldVector(x, y, scl, incr){
    this.x = x;
    this.y = y;
    this.scl = scl;
    this.incr = incr;
    this.xoff = this.x*this.incr;
    this.yoff = this.y*this.incr;
    this.zoff = 0;
    this.magnitude = 0.4;

    this.update = function update(zoff){
        this.zoff = zoff;
    };

    this.getDirection = function getDirection(){
        var angle = noise(this.xoff, this.yoff, this.zoff) * TWO_PI * 4;
        var v = p5.Vector.fromAngle(angle);
        v.setMag(this.magnitude);
        return v;

    };

    this.show = function(){
        stroke(0, 50);
        strokeWeight(1);
        push();
        translate(this.x * this.scl, this.y * this.scl);
        rotate(this.getDirection().heading());
        line(0, 0, this.scl, 0);
        pop();
    };
}
