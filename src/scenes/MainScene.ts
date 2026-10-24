import * as Phaser from 'phaser';
import { projectName } from '../index.js';

const CARD_WIDTH = 140;
const CARD_HEIGHT = 200;

export class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  create(): void {
    const { width, height } = this.scale;

    this.add
      .text(width / 2, 80, projectName, {
        fontFamily: 'system-ui, sans-serif',
        fontSize: '48px',
        color: '#f5f5f5',
      })
      .setOrigin(0.5);

    // Platzhalter-Hand: drei Karten, die beim Hovern angehoben werden
    const spacing = CARD_WIDTH + 30;
    for (let i = 0; i < 3; i++) {
      this.createCard(width / 2 + (i - 1) * spacing, height / 2 + 60, `Karte ${i + 1}`);
    }
  }

  private createCard(x: number, y: number, label: string): Phaser.GameObjects.Container {
    const background = this.add
      .rectangle(0, 0, CARD_WIDTH, CARD_HEIGHT, 0x2b3a4a)
      .setStrokeStyle(3, 0xc9a227);
    const text = this.add
      .text(0, 0, label, {
        fontFamily: 'system-ui, sans-serif',
        fontSize: '20px',
        color: '#f5f5f5',
      })
      .setOrigin(0.5);

    const card = this.add.container(x, y, [background, text]);
    card.setSize(CARD_WIDTH, CARD_HEIGHT).setInteractive({ useHandCursor: true });

    card.on('pointerover', () => {
      this.tweens.add({ targets: card, y: y - 20, duration: 120, ease: 'Sine.easeOut' });
    });
    card.on('pointerout', () => {
      this.tweens.add({ targets: card, y, duration: 120, ease: 'Sine.easeOut' });
    });

    return card;
  }
}
