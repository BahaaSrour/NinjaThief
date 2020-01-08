var config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y:300 },
            debug: false
        }
    },

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
<<<<<<< HEAD
    this.load.image('background', 'assets/background.jpg');
    this.load.image('box', 'assets/box.png');
    this.load.image('key', 'assets/key.png');
    this.load.image('spikes', 'assets/spikes.png');
    this.load.image('ground', 'assets/platform.png');
    
    this.load.spritesheet('door', 'assets/door.png', { frameWidth:266.6666666666667 , frameHeight: 400 });
    this.load.spritesheet('ninja', 'assets/ninja.png', { frameWidth: 108, frameHeight: 140 });
}

function create ()
{
    this.add.image(750, 350, 'background').setScale(0.7);
    
    platforms = this.physics.add.staticGroup();
    platforms.create(100, 250, 'ground').setScale(1,0.2).refreshBody();
    platforms.create(1300, 220, 'ground').setScale(1,0.2).refreshBody();
    platforms.create(750, 350, 'ground').setScale(1,0.2).refreshBody();
    platforms.create(250, 500, 'ground').setScale(1,0.2).refreshBody();
    platforms.create(1050, 530, 'ground').setScale(1,0.2).refreshBody();
    platforms.create(500, 690, 'ground').setScale(5,0.2).refreshBody();

    
=======
    //character and trying creating an object
   var person= new Character("ali",3)
   console.log("name: "+ person.GetData())
>>>>>>> 3363a5787ab3b4cf4be5bcd618f20e2cd33dfff6

    door = this.add.sprite(1450, 630, 'door').setScale(0.25);
    
    game.anims.create({
        key:'doorOpen',
        frames: this.anims.generateFrameNumbers('door', { start: 0, end: 0 }),
        frameRate:10,
    });
    
    game.anims.create({
        key:'doorClose',
        frames: this.anims.generateFrameNumbers('door', { start: 3, end: 4 }),
        frameRate:10,
    });
    
   

    player = this.physics.add.sprite(200, 100, 'ninja').setScale(0.5);
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, platforms)

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('ninja', { start: 10, end: 16 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{ key: 'ninja', frame: 4 }],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('ninja', { start: 0, end: 7}),
        frameRate: 10,
        repeat: -1
    });

    spikes = this.physics.add.staticGroup();
    this.physics.add.collider(player, spikes, hitSpikes, null, this);
    function hitSpikes(player, spikes) {
        this.physics.pause();
        player.setTint(0xff0000);

    }

    spikes.create(1020, 523, 'spikes').setScale(0.1).refreshBody();
    spikes.create(1050, 523, 'spikes').setScale(0.1).refreshBody();
    spikes.create(1080, 523, 'spikes').setScale(0.1).refreshBody();
    spikes.create(1100, 523, 'spikes').setScale(0.1).refreshBody();

    spikes.create(520, 680, 'spikes').setScale(0.1).refreshBody();
    spikes.create(550, 680, 'spikes').setScale(0.1).refreshBody();
    spikes.create(580, 680, 'spikes').setScale(0.1).refreshBody();
    spikes.create(610, 680, 'spikes').setScale(0.1).refreshBody();
    
    key = this.physics.add.staticGroup();
    key.create(1450, 195, 'key').setScale(0.04).refreshBody();
    this.physics.add.collider(key, platforms)
    this.physics.add.overlap(player, key, collectkey, null, this);

    function collectkey(player, key) {
        console.log("collected key");
        key.disableBody(true, true);
        door.anims.play('doorClose',true);
    }

<<<<<<< HEAD
=======
    this.load.image('red', 'Assets/sky.png')
    
>>>>>>> 3363a5787ab3b4cf4be5bcd618f20e2cd33dfff6
}

function update ()
{
<<<<<<< HEAD
    //door.anims.play('doorOpen',true);
//    door.anims.play('doorClose',true);
    cursors = this.input.keyboard.createCursorKeys();
    if (cursors.left.isDown) {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }
=======
 this.add.image(100,100,"red").setScale(2);
 //if(keyinut == space)
 //{ player.attack();}
>>>>>>> 3363a5787ab3b4cf4be5bcd618f20e2cd33dfff6
}