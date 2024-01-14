precision mediump float;
uniform sampler2D utexture;
uniform  float upalette[20];
varying vec2 vTexCoord;

void main() {
  vec2 uv = vTexCoord;
  vec4 c0 = texture2D(utexture,uv);
    float sum=0.0;
  for(int i = 0;i < 20; i++){
        sum +=upalette[i];
  }

  gl_FragColor = c0 ;
}
