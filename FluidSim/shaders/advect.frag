precision highp float;
uniform sampler2D utex;
uniform sampler2D utex1;

uniform vec2 ures;

vec4 lerp(vec4 a , vec4 b , float t){
    return a + (b-a)*t;
}

void main() {
    vec2 uv = gl_FragCoord.xy/ures.xy;
    vec2 offset = 1.0/ ures.xy;
    vec4 c0 = texture2D(utex,uv);
    vec4 v = texture2D(utex1,uv) ;
    vec2 f = (uv.xy - v.xy) * ures.xy;
    vec2 i = floor(f);
    vec2 j = fract(f);
    vec4 z1 = lerp(texture2D(utex,i/ures.xy),texture2D(utex,vec2(i.x+1.0,i.y)/ures.xy),j.x);
    vec4 z2 = lerp(texture2D(utex,vec2(i.x,i.y+1.0)/ures.xy),texture2D(utex,(uv + vec2(1.0))/ures.xy),j.y);
    vec4 z3 = lerp(z1,z2,j.y);
    
    gl_FragColor = vec4(z3.xyz,1.0);
}

