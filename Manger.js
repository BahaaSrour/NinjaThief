
var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    //character and trying creating an object
   var person= new Character("ali",3)
   console.log("name: "+ person.GetData())


    this.load.image('red', 'Assets/sky.png')
    
}

function create ()
{
 this.add.image(100,100,"red").setScale(2);
 //if(keyinut == space)
 //{ player.attack();}
}