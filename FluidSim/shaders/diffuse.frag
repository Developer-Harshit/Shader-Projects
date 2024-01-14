precision highp float;
uniform sampler2D utex;
uniform vec2 ures;



void main() {
    float k =5000.0;
    vec2 uv = gl_FragCoord.xy/ures.xy;
    vec2 offset = 1.0/ ures.xy;
    vec4 c0 = texture2D(utex,uv);
    vec4 cL = texture2D(utex,uv - vec2(offset.x,0.0));
    vec4 cR = texture2D(utex,uv + vec2(offset.x,0.0));
    vec4 cT = texture2D(utex,uv + vec2(0.0,offset.y));
    vec4 cD = texture2D(utex,uv - vec2(0.0,offset.y));


    vec4 cNew = (c0 + k*(cL+cR+cT+cD)/4.0)/(1.0+k);

    gl_FragColor = cNew;
}

