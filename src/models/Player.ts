import { Card } from "./cards/Card";

export class Player {
  name: string;
  cards: Card[] = [];

  constructor(name: string, cards: Card[]) {
    this.name = name;
    this.cards = cards;
  }

  /**
   * Display the player's name and his card
   */
  toString(): void {
    console.log(`${this.name} a en main :`);
    this.cards.forEach((card) => {
      console.log(`- ${card.name}`);
    });
  }
}
