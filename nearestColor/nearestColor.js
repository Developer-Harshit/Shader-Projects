
let sample;
let myshader;
let palette;
function preload(){
    myshader = loadShader("shaders/shader.vert","shaders/shader.frag")
    sample = loadImage("sample0.jpg")
    palette = [
    1,1,1,1,1,1,
    ]

}

function setup() {
    
    
    createCanvas(250,250,WEBGL)
    sample.resize(width,height)    
    
    
    
}
function draw() {
    myshader.setUniform("utexture",sample)
    myshader.setUniform("upalette",palette)
    
    shader(myshader)
    rect(0,0,width,height)
    
}
