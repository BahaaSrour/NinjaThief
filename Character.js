console.log("Character file are oped")



function Character(_name, _health) {
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



  Character.prototype.walk = function() {
    this.Position +=10;
    console.log("Walk Function from character class");
  };
  
  Character.prototype.Attcked = function(dropPionts) {
    this.health -=dropPionts;
    console.log("dropPionts Function from character class");
  };

  Character.prototype.ChangeDirection =function () {
    // if(this.)
  }

  Character.prototype.GetData =function () {
    return this.name;
  }
 
  
