var config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y:300 },
            debug: true
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
    this.load.image('background', 'assets/background.jpg');
    this.load.image('box', 'assets/box.png');
    this.load.spritesheet('door', 'assets/door.png', { frameWidth:266.6666666666667 , frameHeight: 400 });
    this.load.image('key', 'assets/key.png');
    this.load.image('spikes', 'assets/spikes.png');
    this.load.image('ground', 'assets/platform.png');

    this.load.spritesheet('ninja', 'assets/ninja.png',
        { frameWidth: 108, frameHeight: 140 });
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
   
    player = this.physics.add.sprite(200, 100, 'ninja').setScale(0.5);
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, platforms)

        door = this.physics.add.sprite(1450, 630, 'door').setScale(0.25);
        door.setCollideWorldBounds(true);
        this.physics.add.overlap(door, player);
        this.physics.add.collider(door, platforms);

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
        frames: this.anims.generateFrameNumbers('ninja', { start: 0, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    var GameOverText;

    spikes = this.physics.add.staticGroup();
    this.physics.add.collider(player, spikes, hitSpikes, null, this);
    function hitSpikes(player, spikes) {
        this.physics.pause();
        player.setTint(0xff0000);
        GameOverText= this.add.text(650, 300, 'Game Over', { fontFamily: "Roboto Condensed",fontSize:50,fill: '#215'});

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
        key.disableBody(true, true);
        this.anims.create({
            key:'doorOpen',
            frames: this.anims.generateFrameNumbers('door', { start: 0, end: 5 }),
            frameRate:10,
        });
         
        door1=this.anims.create({
            key: 'doorClose',
            frames: this.anims.generateFrameNumbers('door', { start: 4, end: 5 }),
            frameRate: 0
        });
        
        function enterDoor(player, door1) {
            this.physics.pause();
            player.setTint(0xff0000);
            WinText= this.add.text(650, 300, 'You WIN', { fontFamily: "Roboto Condensed",fontSize:50,fill: '#215'});
    
        }
    }
    

}

function update ()
{
    door.anims.play('doorOpen',true);
    door.anims.play('doorClose',true);
    
    
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
}