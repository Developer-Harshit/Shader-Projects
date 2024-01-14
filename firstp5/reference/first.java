
import processing.core.*;
import processing.data.*;
import processing.event.*;
import processing.opengl.*;
import java.util.HashMap;
import java.util.ArrayList;
import java.io.File;
import java.io.BufferedReader;
import java.io.PrintWriter;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.IOException;

/** first */
public class first {
let shad;
function preload(){
  shad = loadShader("vert.glsl","frag.glsl");
}
function setup() {
  createCanvas(250,250,WEBGL);
  
}


function draw() {
  shader(shad);
  // setUniform can then be used to pass data to our shader variable, myColor
  //myShader.setUniform('myColor', [1.0,0.0,0.0]); // send red as a uniform
  // apply the shader to a rectangle taking up the full canvas
  rect(0,0,width,height);
}<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- PLEASE NO CHANGES BELOW THIS LINE (UNTIL I SAY SO) -->
  <script language="javascript" type="text/javascript" src="libraries/p5.min.js"></script>
  <script language="javascript" type="text/javascript" src="first.js"></script>
  <!-- OK, YOU CAN MAKE CHANGES BELOW THIS LINE AGAIN -->

  <style>
    body {
      padding: 0;
      margin: 0;
    }
  </style>
</head>

<body>
</body>
</html>
}

