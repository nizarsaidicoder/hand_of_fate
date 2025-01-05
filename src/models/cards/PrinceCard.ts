import { Card } from "./Card";

export class PrinceCard extends Card {
  constructor() {
    super(
      5,
      "Prince",
      "Choisissez n'importe quel joueur, y compris vous-même. Le joueur choisi défausse sa main et en pioche une nouvelle."
    );
  }

  applyEffect(): void {
    console.log("Défausser joueur ciblé");
  }
}
