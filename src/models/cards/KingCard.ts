import { Card } from "./Card";

export class KingCard extends Card {
  constructor() {
    super(7, "Roi", "Choisissez un autre joueur et échangez vos mains.");
  }

  applyEffect(): void {
    console.log("Echange de cartes avec l'autre joueur choisit");
  }
}
