// Prototipo de web App para Tigo Sports App - Aplicación mobile para ver los partidos de la Liga
// La idea es utilizar el micrófono del móvil para que el usuario grite el Gol
// Mientras más fuerte grita el usuario el balón más avanza. 
// Cuando el usuario mete un gol en el arco rival debería ser redireccionado a la web para descargar la App. 
 


var input;
var analyzer;
var move = 0;
var gol = false;
var cancha; 
var myFont;

function preload(){
  cancha = loadImage("/images/cancha.png");
  balon = loadImage("/images/balon.png");
  myFont = loadFont("font/Champion-Bantamweght.otf")
}

function setup() {
  createCanvas(300, 500);
  background(125);
  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
  
}

function draw() {
  
  // Get the overall volume (between 0 and 1.0)
  background(125);
  var vol = mic.getLevel();
  var vel = round(vol*10);
  var acc = 0.01;
  print(vel);
  image(cancha,0,0);

  var pos = createVector(width/2 -15, height - 30);
  image(balon, pos.x, pos.y - move + acc);
  
  if (vel > 2){
      move = move + vel - 0.1 ;
      
  }

  if (move > 500){
    gol = true;
  }
  
  if (gol == true){
    fill(0);
    ellipse(width/2, height/2, 30,30);
    fill('#000000');
    textFont(myFont);
    textSize(100);
    text('Goooool', width/2-85, height/2 +30);
    fill('#FEC10D');
    text('Goooool', width/2-83, height/2 +28);
    
  }

}
  