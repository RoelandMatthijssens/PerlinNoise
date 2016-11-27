var width, height, size;
var fr;
var flowField;
function setup() {
    size = 600;
    width = size;
    height = size;
    var scl = 10;
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    var perlinIncr = 0.07;
    createCanvas(width, height);
    fr = createP();
    flowField = new FlowField(cols, rows, scl, perlinIncr);
    flowField.populateVectors();
    flowField.populateParticles(750);
    background(255);
}

function draw() {
    flowField.update();
    flowField.show();
    fr.html(floor(frameRate()));
}

