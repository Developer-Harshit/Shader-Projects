
precision highp float;

uniform float time;

varying vec2 uv;

void main(){
    float off = 1.0/500.0*50.0;

    vec4 c0 = vec4(uv,1.0,1.0);
    vec4 c1 = vec4(uv+vec2(off,0.0),1.0,1.0);
    vec4 c2 = vec4(uv-vec2(off,0.0),1.0,1.0);
    vec4 c3 = vec4(uv+vec2(0.0,off),1.0,1.0);
    vec4 c4 = vec4(uv-vec2(0.0,off),1.0,1.0);
    c0 = (c0+c1+c2+c3+c4)/5.0;
    gl_FragColor = c0;
}