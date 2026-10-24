import * as Phaser from 'phaser';
import { MainScene } from './scenes/MainScene.js';
export const gameConfig = {
    type: Phaser.AUTO,
    parent: 'game',
    backgroundColor: '#101820',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 720,
    },
    scene: [MainScene],
};
new Phaser.Game(gameConfig);
