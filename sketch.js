var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage2.png","images/fairyImage2.png");
	bgImg = loadImage("images/starryNight.jpg");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650, 30,5,{restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x=starBody.position.x
  star.y=starBody.position.y

  if(star.y>450 && starBody.position.y>450){
   Matter.Body.setStatic(starBody,true);
}

  if (keyDown("left")) {
  fairy.x = fairy.x-6;
 }
 
 if (keyDown("right")) {
fairy.x = fairy.x+6;
 }
drawSprites();
}
//keycode===leftArROW
function keyPressed(){
if(keyCode===DOWN_ARROW){
	Matter.Body.setStatic(starBody,false);
}


}