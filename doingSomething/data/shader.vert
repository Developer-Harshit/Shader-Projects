
precision highp float;


attribute vec3 aPosition;
attribute vec2 aTexCoord;

uniform float millis;
varying vec2 uv;
void main(){
    uv = aTexCoord;
    vec4 pos4 = vec4(aPosition,1.0);
    // idk if i should invert the y axis or not
    // pos4.y = 1.0 - pos4.y;
    pos4.xy = pos4.xy * 2.0 - 1.0; 
    float px = pos4.x;
    pos4.x = sin(pos4.y * (sin(millis/10000.0) * 10.0 + 1.0) )/2.0;
    pos4.y = sin(px * (sin(millis/10000.0) * 10.0 + .0) )/2.0;
    gl_Position = pos4;

}
