

<<<<<<< HEAD
    Character.call(this,_name, _lives);
    this.visualRange = 150; //bigger than attack range defined in character    
};

Enemy.prototype = new Character();
Enemy.prototype.constructor = Character;

Enemy.prototype.Die =  function(){
    Character.prototype.Die.call(this);
    console.log("died from player");
}
=======
function Enemy(_name,_lives,_VisualRange) {
    character.call(this,_name,_lives);
  
    this.visualRange = _VisualRange ;
  }


  Enemy.prototype = Object.create(Character.prototype);
// Enemy.prototype.Die =  function(){
//     Character.prototype.Die.call(this);
//     console.log("died from player");
// }
>>>>>>> 3363a5787ab3b4cf4be5bcd618f20e2cd33dfff6

Enemy.prototype.setvisualRange= function(x){
    this.visualRange= x;
};

Enemy.prototype.getvisualRange= function(){
   
    return this.visualRange;
};
