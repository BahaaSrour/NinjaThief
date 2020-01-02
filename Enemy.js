
function Enemy(_name, _lives)  {

    Character.call(this,_name, _lives);

    this.visualRange = 150; //bigger than attack range defined in character
    
};

Enemy.prototype.Die =  function(){
    Character.prototype.Die.call(this);
    console.log("died from player");
}

Enemy.prototype.setvisualRange= function(x){
    this.visualRange= x;
};

Enemy.prototype.getvisualRange= function(){
   
    return this.visualRange;
};
