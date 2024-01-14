PShader myshader;

void setup() {
  size(500, 500, P2D);

myshader = loadShader("shader.frag");
  frameRate(1000);
  noSmooth();
}

void draw() {
  



  myshader.set("resolution", float(width), float(height));
  shader(myshader);

  rect(0, 0, width, height);
  System.out.println(frameRate);
}
