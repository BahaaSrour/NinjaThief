var config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y:1800},
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

function preload (){

    this.load.image('background', 'assets/background.jpg');
    this.load.image('enemy1','assets/enemyTest.png');
    this.load.image('ground', 'assets/platform.png');
    
    this.load.spritesheet('ninja', 'assets/ninja.png', { frameWidth: 108, frameHeight: 140 });
}

Enemy1 = new Enemy('enemy1',0);


var eStart ={
    x:900,
    y:100
};

var eEnd={
    x:700,
    y:100
}

Enemy1.setvisualRange(50);
var visualRange = Enemy1.getvisualRange();

Enemy1.setPosition(eStart.x,eStart.y);
var eSpeed=100;

var enemyDir = new Phaser.Math.Vector2();

function create (){
    
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
    this.physics.add.collider(player, platforms);

    //Enemy1.Die();
    
    
    Enemy1 = this.physics.add.sprite(Enemy1.getPosition().x,Enemy1.getPosition().y,'enemy1');
    Enemy1.setCollideWorldBounds(true);

    Enemy1.body.setSize(50,40);
    Enemy1.body.offset.x = -visualRange;
    this.physics.add.collider(Enemy1, platforms);

    //this.physics.add.collider(Enemy1, player);

    this.physics.add.overlap(player, Enemy1, Attack, null, this);

    function Attack(){
        console.log("in range");
    }

    
    enemyDir.set(eEnd.x-Enemy1.x,eEnd.y-Enemy1.y);
    enemyDir.normalize();
    console.log(enemyDir);

    game.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('ninja', { start: 10, end: 16 }),
        frameRate: 10,
        repeat: -1
    });

    game.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('ninja', { start: 0, end: 7}),
        frameRate: 10,
        repeat: -1
    });

    game.anims.create({
        key: 'turn',
        frames: [{ key: 'ninja', frame: 4 }],
        frameRate: 20
    });
}

function update (){
   
    //r = Enemy1.getPosition().x;

    //Enemy1.setVelocityX(-eSpeed);  

    Enemy1.setVelocityX(eSpeed*(enemyDir.x));  
    console.log(eSpeed*(enemyDir.x));
    Enemy1.body.offset.x=-visualRange;
    //console.log(enemyDir);

    // if( Enemy1.x <= eEnd.x){
    //     console.log("hit");
    //     Enemy1.x+=2;
    //      eSpeed*=-1;
    //     //(enemyDir.x)*=-1;
    //     visualRange*=-1;
    // }

    // if(Enemy1.x >= eStart.x){
    //     console.log("hit2");
    //     Enemy1.x-=2;
    //     eSpeed*=-1;
    //    //(enemyDir.x)*=-1;
    //     visualRange*=-1;
    // }

    cursors = this.input.keyboard.createCursorKeys();
    if (cursors.left.isDown) {
        player.setVelocityX(-500);
        
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(500);

        player.anims.play('right', true);
    }
    else {
        player.setVelocityX(0);
        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-400);
    }
 
}