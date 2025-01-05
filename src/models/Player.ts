import { Card } from "./cards/Card";

export class Player {
  name: string;
  card: Card;

  constructor(name: string, card: Card) {
    this.name = name;
    this.card = card;
  }
}
