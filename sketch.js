//Create variables here
var dog, happyDog, database, foodS, foodStock,dogimage,happyDogimage,food;
function preload()
{
 dogimage= loadImage("images/Dog.png");
 happyDogimage= loadImage("images/happyDog.png");


}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on('value',readstock);

  dog = createSprite(265, 390,20,20);
  dog.addImage(dogimage);
  dog.scale = 0.3;

}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDogimage);
}
  drawSprites();
  fill("darkblue");
  text("note, tap the up arrow to feed the puppy",150,20);
  text("puppy food left:"+foodS ,200,200);

}

function readstock(data){
  foodS=data.val();
}


function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-1;
}
  database.ref("/").update({
    Food : x
  })
}



