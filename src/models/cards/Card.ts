export abstract class Card {
  power: number;
  name: string;
  description: string;

  constructor(power: number, name: string, description: string) {
    this.power = power;
    this.name = name;
    this.description = description;
  }

  abstract applyEffect(): void;
}
