let diffuseShader;
let advectShader;
let copyShader;
let velocityBuffer;
let densityBuffer;
let drawBuffer;
const n = 5;
function preload() {
  diffuseShader = loadShader('shaders/basic.vert', 'shaders/diffuse.frag');
  advectShader = loadShader('shaders/basic.vert', 'shaders/advect.frag');
  copyShader = loadShader('shaders/basic.vert', 'shaders/copy.frag');
}
function setup() {
  createCanvas(400, 400, WEBGL);
  pixelDensity(1);
  drawBuffer = createFramebuffer();
  drawBuffer.pixelDensity(1);
  densityBuffer = createFramebuffer();
  densityBuffer.pixelDensity(1);
  velocityBuffer = createFramebuffer();
  velocityBuffer.pixelDensity(1);

  densityBuffer.draw(function () {
    fill(0);
    noStroke();
    rect(-width / 2, -height / 2, width, height);
  });

  velocityBuffer.draw(function () {
    fill(70);
    noStroke();
    rect(-width / 2, -height / 2, width, height);
  });
}
function _copybuffer(b1, b2) {
  copyShader.setUniform('utex', b1);
  copyShader.setUniform('utex1', b2);
  copyShader.setUniform('ures', [width, height]);
  b1.draw(function () {
    shader(copyShader);
    rect(0, 0, width, height);
  });
}
function _diffuse(b1) {
  diffuseShader.setUniform('utex', b1);
  diffuseShader.setUniform('ures', [width, height]);
  b1.draw(function () {
    shader(diffuseShader);
    rect(0, 0, width, height);
  });
}
function _advect(b1, b2) {
  advectShader.setUniform('utex', b1);
  advectShader.setUniform('utex1', b2);
  advectShader.setUniform('ures', [width, height]);
  b1.draw(function () {
    shader(advectShader);
    rect(0, 0, width, height);
  });
}
function addDensity() {
  drawBuffer.draw(function () {
    clear();
    if (mouseIsPressed) {
      noStroke();
      let x = mouseX - width / 2;
      let y = mouseY - height / 2;
      fill(255);

      ellipse(x, y, 15, 15);
    }
  });
}

function applyForce() {
  if (mouseIsPressed) {
    drawBuffer.draw(function () {
      clear();
      noStroke();
      let mx = mouseX - width / 2;
      let my = mouseY - height / 2;
      let pmx = pmouseX - width / 2;
      let pmy = pmouseY - height / 2;

      let vx = mx - pmx;
      let vy = my - pmy;
      console.log(vx, vy);
      vx = map(vx, -width, width, -1, 1);
      vx = map(vx, -1, 1, 0, 255);
      vy = map(vy, -height, height, -1, 1);
      vy = map(vy, -1, 1, 0, 255);
      fill(vx, vy);
      ellipse(mx, my, 15, 15);
    });
  }
}
function draw() {
  addDensity();
  _copybuffer(densityBuffer, drawBuffer);
  for (let i = 0; i < n; i++) {
    _diffuse(densityBuffer);
  }

  image(densityBuffer, -width / 2, -height / 2, width, height);
  // image(velocityBuffer, -width / 2, -height / 2, width, height);
}
