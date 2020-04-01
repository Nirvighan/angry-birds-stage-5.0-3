class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;

  }
//create the display function
  display()
  {

   //make the pigs vanish according to their speed
  if(this.body.speed<3)
  {
    super.display();

  } else
  {

  
  World.remove(world,this.body);

  push();
  //give the pigs a vanishing effect
  this.Visiblity = this.Visiblity - 5;
  tint(255,this.Visiblity);
  image(this.image,this.body.position.x,this.body.position.y,50,50);
  pop();
  }
  

  }
};