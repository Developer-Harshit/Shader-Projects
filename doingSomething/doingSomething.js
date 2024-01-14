let myshader;
function preload(){
    myshader = loadShader("data/shader.vert","data/shader.frag");

}
function setup() {
    createCanvas(500,500,WEBGL);
    pixelDensity(1);
}


function draw() {
clear();
    myshader.setUniform("millis",millis());
    shader(myshader);        
    ellipse(width/2,height/2,100,100,150);

    resetShader();

}
