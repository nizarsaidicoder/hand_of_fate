import { Card } from "./Card";

export class BaronCard extends Card {
  constructor() {
    super(
      3,
      "Baron",
      "Choisissez un autre joueur et comparez discrètement vos mains. Celui dont la carte a la plus faible valeur quitte la manche."
    );
  }

  applyEffect(): void {
    console.log("Celui avec plus faible carte dégage");
  }
}
