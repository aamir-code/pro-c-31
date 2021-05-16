const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divs = [];
var divHeight = 300;
var particles = [];
var plinkos = [];



var ground;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  engine = Engine.create();
  world = engine.world;

  

  for(var i=0 ; i<=width ; i=i+80){
    divs.push(new Divs(i,450,20,divHeight));
  }

  for(var j = 20;j <= width; j=j+55){
    plinkos.push(new Plinkos(j,35,6));
  }

  for(var b = 20;b <= width; b=b+60) {
    plinkos.push(new Plinkos(b,70,6));
  }
  for(var ci = 20;ci <= width; ci=ci+55) {
    plinkos.push(new Plinkos(ci,105,6));

  
  }
  for(var g = 20;g <= width; g=g+60) {
    plinkos.push(new Plinkos(g,140,6));
  }

  for(var t = 20;t <= width; t=t+55) {
    plinkos.push(new Plinkos(t,175,6));

  }
  for(var jq = 20;jq <= width; jq=jq+60) {
    plinkos.push(new Plinkos(jq,205,6));

  }
  for(var hg = 20;hg <= width; hg=hg+55) {
    plinkos.push(new Plinkos(hg,240,6));

  }
  for(var tl = 20;tl <= width; tl=tl+60) {
    plinkos.push(new Plinkos(tl,275,6));

  }
  
  
  ground = new Ground(400,690,2000,200);

  Engine.run(engine);
}

function draw() {
  background("cyan");

  for(var v = 0;v<divs.length;v++){
    divs[v].display();

  }
  for(var c = 0;c < plinkos.length;c++){
    plinkos[c].display();
  }

  for(var d = 0;d < plinkos.length;d++){
    plinkos[d].display();
  }
  for(var f = 0;f < plinkos.length;f++) {
    plinkos[f].display();
  }
  for(var h = 0;h < plinkos.length;h++) {
    plinkos[h].display();
  }
  for(var ty = 0;ty < plinkos.length;ty++) {
    plinkos[ty].display();

  }
  for(var fg = 0;fg < plinkos.length;fg++) {
    plinkos[fg].display();

  }
  for(var cn = 0;cn < plinkos.length;cn++) {
    plinkos[cn].display();

  }
  for(var df = 0;df < plinkos.length;df++) {
    plinkos[df].display();

  }

  
  if(frameCount%20 === 0) {
    particles.push(new Particles(random(width/2+10,width/3-10),10,10));

  }
  for(var x = 0;x < particles.length;x++) {
    particles[x].display();

  }
  ground.display();
  
  
  
  


  drawSprites();
}