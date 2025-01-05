import { Card } from "./Card";

export class ChancellorCard extends Card {
  constructor() {
    super(
      6,
      "Chancelier",
      "Piochez 2 cartes. Conservez 1 carte et placer les 2 autres dans l'ordre de votre choix sous le paquet."
    );
  }

  applyEffect(): void {
    console.log("Piocher 2 cartes etc.");
  }
}
