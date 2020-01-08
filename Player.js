
function Player(_name, _lives,_Noshuriken)  {

    Character.call(this,_name,_lives);
    this.Noshuriken = _Noshuriken;

};

Player.prototype = Object.create(Character.prototype);

Player.prototype.Attackedbyshuriken =  function(){
    this.Noshuriken--;
    if(Noshuriken>0){
    Character.prototype.Die.Attackedbyshuriken(this);
    }
}

Player.prototype.GainShuriken()
{
    if(Noshuriken<=0)
        {
            Noshuriken=1;
        }
    else
        {
            Noshuriken++;
        }
}



