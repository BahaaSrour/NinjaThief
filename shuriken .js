function shuriken(){
    this.range=0;
}

shuriken.prototype.setRangeX()=function(rng){
    this.range=rng;
}

shuriken.prototype.getRange()=function(){
    return this.range;
}

/*************************** */

// Attack = function(startPos){

//     var sh = new shuriken();
//     sh.setVelocityX(5);
    
//     if(overlap with character){
//         player.takeDamage(); 
//         enemy.takeDamage();

//         hide(sh);
//     }

//     if(sh.x == startPos+sh.range)
//     {
//         hide(sh);
//     }

// }