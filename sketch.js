var pt
var edges
function preload() {}
function setup() {
  createCanvas(400, 400);
  pt = createSprite(200,200,20,20)
}
function draw() {
  background("lightgray")

  if(keyDown("up")){
    pt.addSpeed(0.2,pt.rotation - 90)
  }
   if(keyDown("down")){
    pt.addSpeed(0.2,pt.rotation + 90)
  }
   if(keyDown("left")){
    pt.rotation = pt.rotation-10
   }
   if(keyDown("right")){
    pt.rotation = pt.rotation+10
   }
   edges = createEdgeSprites()
   pt.bounceOff(edges)

  drawSprites();
}
