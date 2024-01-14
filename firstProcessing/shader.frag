
#ifdef GL_ES

precision highp float;

#endif

uniform vec2 resolution;



void main(void) {
  // now because of the varying vTexCoord, we can access the current texture coordinate
  vec2 uv = gl_FragCoord.xy / resolution.xy;


  // and now these coordinates are assigned to the color output of the shader
  gl_FragColor = vec4(uv.y,uv.x,uv.x,1.0);
}
