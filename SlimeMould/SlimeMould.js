let surf_0
let surf_1
let blurShader
let copyShader
let framePara


function preload() {
  
   
    lineShader = loadShader("./shaders/basic.vert", "./shaders/line.frag")
}
function windowResized(){
    resizeCanvas(window.innerWidth,window.innerHeight)
}
function setup() {
    let c = createCanvas(window.innerWidth,window.innerHeight, WEBGL)
    surf_0 = createGraphics(width, height, WEBGL)
    surf_1 = createGraphics(width, height, WEBGL)

    framePara = createP("")
    surf_1.background(0)
    surf_1.fill(255)
    surf_1.noStroke()
    surf_1.strokeWeight(2)
    surf_1.pixelDensity(1)
    surf_0.pixelDensity(1)
    pixelDensity(1)



}
function lerpFloat(a,b,t){
    return float(a+ (b-a)*t)
}
function drawLine(v1x, v1y, v2x, v2y) {

    
    
    lineShader.setUniform("ures", [float(width), float(height)])    
    lineShader.setUniform("utex_0", surf_1)
    lineShader.setUniform("upos_0", [float(v2x), float(v2y)])
    lineShader.setUniform("upos_1", [float(v1x), float(v1y)])
    surf_1.shader(lineShader)
    surf_1.rect(-width / 2, -height / 2, width, height)

    

}
let pMx = 0
let pMy =0
function draw() {


    // surf_1.clear()
    let mx = lerp(pMx,mouseX,0.1)
    let my = lerp(pMy,mouseY,0.1)
    drawLine(mx , my , pMx,pMy)
    pMx = mx 
    pMy = my 
    
    texture(surf_1)
    rect(-width / 2, -height / 2, width, height)

    framePara.html(frameRate())


}
