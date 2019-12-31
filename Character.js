console.log("Character file are oped")

function Character(name, age, health, lives,startPosition) {
    this.name =name
    this.age = age;
    this.health = health;
    this.lives = lives;
    this.startPosition=startPosition;
  };

  Character.prototype.walk = function() {
    console.log("Walk Function from character class");
  };

  Character.prototype.Attack = function() {
    console.log("Walk Function from character class");
  };

