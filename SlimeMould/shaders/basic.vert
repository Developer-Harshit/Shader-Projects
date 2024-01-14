precision highp float;

attribute vec3 aPosition;

attribute vec2 aTexCoord;

varying vec2 uv;

void main(){
    uv = aTexCoord;
    vec4 posv4 = vec4(aPosition,1.0);
    posv4.y = 1.0 - posv4.y;
    posv4.xy = posv4.xy * 2.0 - 1.0;
    gl_Position = posv4;
}
