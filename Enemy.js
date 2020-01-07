

function Enemy(_name,_lives,_VisualRange) {
    character.call(this,_name,_lives);
  
    this.visualRange = _VisualRange ;
  }


  Enemy.prototype = Object.create(Character.prototype);
// Enemy.prototype.Die =  function(){
//     Character.prototype.Die.call(this);
//     console.log("died from player");
// }

Enemy.prototype.setvisualRange= function(x){
    this.visualRange= x;
};

Enemy.prototype.getvisualRange= function(){
   
    return this.visualRange;
};
