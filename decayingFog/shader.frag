
precision highp float;

uniform sampler2D tex0;

uniform vec2 resolution;



vec4 lerp(inout vec4 a,vec4 b ,float t){

  return a + (b-a)*t ;

}

void main(void) {
  
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec2 off = 1.0 / resolution.xy;
  uv.y = 1.0 - uv.y;
  vec4 c0 = texture2D(tex0,uv );
  vec4 b = vec4(-0.1,-0.1,-0.1,0.0);
  c0 = lerp(c0,b,0.08);

 vec4 c1 = texture2D(tex0,uv + vec2(0.0,off.y) );
 vec4 c2 = texture2D(tex0,uv + vec2(0.0,1.1*off.y));
 vec4 c3 = texture2D(tex0,uv + vec2(0.0,2.2*off.y));
 vec4 c4 = texture2D(tex0,uv + vec2(0.0,3.3*off.y));
 
 c0 = (c0 + c1 + c2 + c3 + c4 )/ 5.0;
 
  gl_FragColor = c0;
 
}

