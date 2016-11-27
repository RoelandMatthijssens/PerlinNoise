var width, height;
var rows, cols, scl;
var fr, zoff;
function setup() {
    width = 500;
    height = 500;
    scl = 20;
    cols = floor(width/scl);
    rows = floor(height/scl);
    createCanvas(width, height);
    fr = createP();
    zoff = 0;
}

function drawVector(x, y, angle) {
    var direction = p5.Vector.fromAngle(angle);
    stroke(0);
    push();
    translate(x * scl, y * scl);
    rotate(direction.heading());
    line(0, 0, scl, 0);
    pop();
}
function draw() {
    background(255);
    var incr = 0.1;
    var yoff = 0;
    for(var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
            var angle = noise(xoff, yoff, zoff) * TWO_PI;
            drawVector(x, y, angle);
            xoff += incr;
        }
        yoff += incr;
    }
    zoff += incr/10;
    fr.html(floor(frameRate()));
}
