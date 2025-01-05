import { Card } from "./Card";

export class SpyCard extends Card {
  constructor() {
    super(
      0,
      "Espionne",
      "À la fin de la manche, si vous êtes le seul joueur encore en lice qui a joué ou défaussé une Espionne, vous gagner 1 pion Faveur."
    );
  }

  applyEffect(): void {
    console.log("Gagner 1 pion Faveur");
  }
}
