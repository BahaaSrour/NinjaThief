console.log("Character file are oped")

function Character(_name, _health, _lives, _startPositionX,_startPositionY, _positionX,_positionY, _Noshuriken, _AttackRang, _direction) {
    this.name =_name
    this.health = _health;
    this.lives = _lives;
    this.startPositionX=_startPositionX;
    this.startPositiony=_startPositionY;
    this.Position = _positionX;
    this.Position = _positionY;
    this.Noshuriken = _Noshuriken;
    this.AttackRang = _AttackRang
    this.direction = _direction
  };

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
 
  
