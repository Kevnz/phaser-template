module.exports = function (game, options) {
	var player, cursors;
    var playerSpeed = 200; //dunno
    var doSomething = function() {
    	console.log('pew pew');
    }
	return {
		init : function () {
			player = game.add.sprite((400 - 16), 500, 'player');
			player.anchor.setTo(0.5, 0.5);
			player.scale.x= 0.75;
			player.scale.y = 0.75;
    		game.physics.enable(player, Phaser.Physics.ARCADE);
    		cursors =  game.input.keyboard.createCursorKeys();
		},
		update: function () {
            //KEYBOARD MOVEMENT
	        if (cursors.up.isDown)
	        {
	            //  If the shift key is also pressed then the world is rotated
	            if (cursors.up.shiftKey)
	            {
	                //game.world.rotation += 0.05;
	            }
	            else
	            {
	                player.y -= 4;
	            }
	        }
	        else if (cursors.down.isDown)
	        {
	            if (cursors.down.shiftKey)
	            {
	                //game.world.rotation -= 0.05;
	            }
	            else
	            {
	                player.y += 4;
	            }
	        }
	        if (cursors.left.isDown)
	        {
	            player.x -= 4;
	        }
	        else if (cursors.right.isDown)
	        {
	           player.x += 4;
	        }
	        if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
	        {
	            doSomething() ;
	        }


            //GAMEPAD SUPPORT
            if (game.input.joystickLeft) {
                // Move the ufo using the joystick's normalizedX and Y values,
                // which range from -1 to 1.
                player.body.velocity.setTo(game.input.joystickLeft.normalizedX * 200, game.input.joystickLeft.normalizedY * playerSpeed * -1);
            }
            else {
                player.body.velocity.setTo(0, 0);
            }
		}
	}
}