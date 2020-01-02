console.log("Character file are oped")



function Character(_name, _lives) {
    this.name =_name
    //this.health = _health;
    this.lives = _lives;
   // this.startPositionX= {x:0,y:0};
    this.startPosition = {x:30,y:30};
    this.Noshuriken = 3;
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
  
  Character.prototype.Attcked = function() {
    this.lives -=1;
    console.log("dropPionts Function from character class");
  };

  Character.prototype.Die=function() {
    if(this.lives==0)
    {console.log("die")}
    else
    {
      console.log("I `m  a live")
    }
  }


  Character.prototype.ChangeDirection =function () {
    // if(this.)
  }

  Character.prototype.GetData =function () {
    return this.name;
  }
 
  
