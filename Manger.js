{/* <meta charset="utf-8"/> */}
console.log("Manager file are Opened OF Ninja Game")
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
            , debug:true
        }
    },

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

function preload ()
{
        console.log("preload Function are oped")
        //this.load.image("sky" , "Assets/sky.png");
}
    console.log(this)
preload();
    function create ()
    {
        console.log("create Function are oped")
    }
    
    function update ()
    {
        console.log("update file are oped")
    }