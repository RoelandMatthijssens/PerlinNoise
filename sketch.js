var width, height;
function setup() {
    width = 500;
    height = 500;
    createCanvas(width, height);
}

function draw() {
    loadPixels();
    var incr = 0.005;
    var yoff = 0;
    for(var y = 0; y < height; y++) {
        var xoff = 0;
        for (var x = 0; x < width; x++) {
            var color = map(noise(xoff, yoff), 0, 1, 0, 255);
            var pixel = (x + y*width) * 4;
            colorPixel(pixel, color);
            xoff += incr;
        }
        yoff += incr;
    }
    updatePixels();
}

function colorPixel(pixel, color){
    pixels[pixel+0] = color;
    pixels[pixel+1] = color;
    pixels[pixel+2] = color;
    pixels[pixel+3] = 255;
}
