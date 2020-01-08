console.log("Character file are oped")

function Character(_name, _lives) {
 
    this.name =_name
    this.lives = _lives;
    this.Position = {x:30,y:30};
    // this.Noshuriken = 3;
    this.AttackRang = 100;
    this.direction = 0;
    
  };

  Character.prototype.setPosition= function(x,y){
   this.startPosition.x= x;
   this.startPosition.y= y;
  }

  Character.prototype.getPosition= function(){
   return this.startPosition;
   }


   Character.prototype.setNoshuriken= function(x){
    this.Noshuriken= x;
   }
   Character.prototype.getNoshuriken= function(){
    return this.Noshuriken;
    }
 
////////////////////////////////
Character.prototype.setAttackRang= function(x){
  this.AttackRang= x;
 }
 Character.prototype.getAttackRang= function(){
  return this.AttackRang;
  }



  Character.prototype.walk = function(speed) {
    this.Position +=speed;
    console.log("Walk Function from character class");
  };
  
  Character.prototype.Attackedbyshuriken= function() 
  {
    return new shuriken.create(direction)
  };

  Character.prototype.Die=function() 
  {
    {console.log("die")}
    
  }


  Character.prototype.ChangeDirection =function () {
    // if(this.)
  }

  Character.prototype.GetData =function () {
    return this.name;
  }
 

  
Player.prototype.TakeDamge= function(){
   
  this.lives--;

  if(this.lives==0)
  {
    this.Die();
  }

};
  
