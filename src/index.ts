import Phaser from 'phaser'

class StartScene extends Phaser.Scene {
  constructor(_test: any) {
    super({
        key: 'StartScene'
    });
  }
  
  preload()
  {

  }

  create()
  {
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#3498db");
    this.add.text(10, 10, 'StartScene', { font: '48px Arial', fill: '#000000' })
  }
}

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.NONE,
    autoCenter: Phaser.Scale.CENTER_BOTH
},
  scene: [ StartScene ],
  parent: "content"
};

var game = new Phaser.Game(config);