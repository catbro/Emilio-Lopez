var demo = {};


var demo = {};
var speed = 6;
demo.state0 = function(){};


demo.state0.prototype = {
	preload: function(){
		game.load.image('trees', 'assets/background/treeBG.png');
		game.load.spritesheet('adam', 'assets/spritesheets/adamSpritesheet.png', 240, 370);
	},

	create: function(){
        game.world.setBounds(0,0,2813,1000);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        var tree = game.add.sprite(0, 0, 'trees');
        adam = game.add.sprite(0, 450, 'adam');
        adam.animations.add('walk', [0, 1, 2, 3, 4]);
        
        game.physics.enable(adam);
        adam.body.collideWorldBounds = true;
	},

	update: function(){
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            adam.x = adam.x +speed; adam.animation.play('walk',20,true);
       
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            adam.x = adam.x -speed;
         adam.x = adam.x +speed; adam.animation.play('walk',20,true);
        
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            adam.y = adam.y -speed;
       if(adam .y < 400){
           adam.y = 400;}
        else {adam.animations.play('walk, 20, ture);
        
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            adam.y = adam.y +speed;
        }
    }

};

