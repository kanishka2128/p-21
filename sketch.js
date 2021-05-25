var canvas;
var music;
var ob1, ob2, ob3, ob4, ob5

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    var ob1 = createSprite(750,550,200,20)
    ob1.shapeColor = rgb(255,28,0)
   
    

    var ob2 = createSprite(550,550,150,20)
    ob2.shapeColor = "orange"
  
    

    var ob3 = createSprite(380,550,150,20)
    ob3.shapeColor = "blue"
   
 

    var ob4 = createSprite(220,550,150,20)
    ob4.shapeColor = "green"

   

    var ob5 = createSprite(50,550,150,20)
    ob5.shapeColor = "magenta"
 




    //create box sprite and give velocity

    var box = createSprite(Math.round(random(100,600)),Math.round(random(100,450)),50,50)
    box.shapeColor = "white"
    createEdgeSprites()

    box.velocityX = 5
    box.velocityY = 5


   
    console.log(box.x)
    console.log(box.y)

    box.bounceOff(ob1)
    box.bounceOff(ob2)
    box.bounceOff(ob3)
    box.bounceOff(ob4)
    box.bounceOff(ob5)

  

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   createEdgeSprites()
   box.bouceOffEdges()

    //add condition to check if box touching surface and make it box
    if (box.isTouching(ob1) && box.bounceOff(Ob1)) {
        box.shapeColor = "red"
    }

    if (box.isTouching(ob2) && box.bounceOff(Ob2)) {
        box.shapeColor = "orange"

        box.velocityX = 0
        box.velocityY = 0
    }
    if (box.isTouching(ob3) && box.bounceOff(Ob3)) {
        box.shapeColor = "blue"
    }
    if (box.isTouching(ob4) && box.bounceOff(Ob4)) {
        box.shapeColor = "green"
    }
    if (box.isTouching(ob5) && box.bounceOff(Ob5)) {
        box.shapeColor = "magenta"
    }
    drawSprites()
}
