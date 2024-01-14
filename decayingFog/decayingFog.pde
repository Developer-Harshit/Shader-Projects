PShader myshader;
float size = 20;

PImage surf;
void setup() {
  size(900, 900, P2D);
  frameRate(1000);
  noCursor();
  colorMode(HSB, 255);
  strokeWeight(40);
  noSmooth();
  background(0);
  pixelDensity(1);

  myshader = loadShader("shader.frag");
  surf = createImage(width, height, RGB);
}


float hu = 0;
void draw() {
  hu = (hu+0.1) % 255;
  stroke(hu, 255, 255);
  line(pmouseX+ random(-10, 10), pmouseY+ random(-10, 10), mouseX, mouseY);
  loadPixels();
  surf.pixels = pixels;
  surf.updatePixels();
  renderShader();

  //System.out.println(frameRate);
}

void renderShader() {
  myshader.set("resolution", float(width), float(height));
  myshader.set("tex0", surf);
  shader(myshader);
  noStroke();
  rect(0, 0, width, height);
  resetShader();
}
