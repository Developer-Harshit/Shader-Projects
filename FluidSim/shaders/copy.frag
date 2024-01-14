precision highp float;
uniform sampler2D utex;
uniform sampler2D utex1;
uniform vec2 ures;
void main() {
    vec2 uv = gl_FragCoord.xy/ures.xy;
    vec2 offset = 1.0/ ures.xy;
    vec4 c0 = texture2D(utex,uv);
    
    vec4 c1 = texture2D(utex1,uv);
    
    vec4 c3 = max(c0,c1);
    
    gl_FragColor = c3;
}

