let c;
let shad;
let para;
function preload(){
  shad = loadShader("vert.glsl","frag.glsl");
  
  
  
}
function setup() {
  c = createCanvas(500,500,WEBGL);
  
  para = createP("hi");
  para.parent("#mainDiv");
  para.style("font-size","40px");
  c.parent("#mainDiv");
}


function draw() {
  para.html(round(frameRate()));
  shader(shad);
  // setUniform can then be used to pass data to our shader variable, myColor
  //myShader.setUniform('myColor', [1.0,0.0,0.0]); // send red as a uniform
  // apply the shader to a rectangle taking up the full canvas
  
  rect(0,0,width,height);
}
