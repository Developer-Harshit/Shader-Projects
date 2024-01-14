precision highp float;

uniform sampler2D utex_0;
uniform sampler2D utex_1;

varying vec2 uv;


void main() {
 
    
    vec4 a0  = texture2D(utex_0,uv); 
    vec4 a1  = texture2D(utex_1,uv); 

    gl_FragColor = a0 + a1;
}

