var pc;
var pcImg;

var npc1;
var npc1Img;

var edges;

////////////////////////////
function preload(){
  pcImg = loadImage("MCSketch1Transparent.png");
  npc1Img = loadImage("TVSketch1Transparent.png");

}

////////////////////////////
function setup(){
  createCanvas(displayWidth,displayHeight-60);

 //PC sprite
  pc = createSprite(displayWidth/2,displayHeight/2);
  //pc.shapeColor = "blue";
  pc.addImage("MCimg",pcImg);
  pc.scale = 2.5;
  //pc.debug=true;
  pc.setCollider("rectangle",0,2,16,pc.width-5, pc.heigth);

 //NPC1 sprite
  npc1 = createSprite(displayWidth/12,displayHeight/8);
  //npc1.shapeColor = "yellow";
  npc1.addImage("TVimg",npc1Img);
  npc1.scale = 2.5;
  //npc1.debug=true;
  npc1.setCollider("rectangle",1,2,22,pc.width-5, pc.heigth);
}

////////////////////////////
function draw(){
  background("grey");

  textSize(15);
  fill("black");
  text("DEMO 1",displayWidth-100,displayHeight/22);

  //edges
  edges = createEdgeSprites();

  //Controls (PC sprite)
   if(keyDown("A")){
     pc.x = pc.x -5;
   }

   if(keyDown("D")){
    pc.x = pc.x +5;
  }

  if(keyDown("W")){
    pc.y = pc.y -5;
  }

  if(keyDown("S")){
    pc.y = pc.y +5;
  }

 //isTouching blue+yellow
  if(pc.isTouching(npc1)){
    textSize(35);
    fill("black");
    text("???: ...Olá",displayWidth/14,displayHeight-150);
    //fill("red")
    //text("tocou",displayWidth/2,displayHeight/2);
  }
  pc.collide(npc1);

  drawSprites();
}