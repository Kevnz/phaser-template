module.exports = function(game) {

  var preloader = {};

  preloader.preload = function () {
    game.load.image('loader', 'assets/loader.gif');
    game.load.image('player', 'assets/player.png');

  };

  preloader.create = function () {
    game.state.start('game');
  };

  return preloader;
};