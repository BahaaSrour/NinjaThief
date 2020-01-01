
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
//    var person= new Character("ali",100,3,50,50,80,80,3,15,1)
//    console.log("name: "+ person.GetData())


    this.load.image('red', 'Assets/sky.png')
}

function create ()
{
 this.add.image(100,100,"red").setScale(2);
}