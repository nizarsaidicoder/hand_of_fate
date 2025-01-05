import { Card } from "./Card";

export class GuardCard extends Card {
  constructor() {
    super(
      1,
      "Garde",
      "Choisissez un autre joueur et nommez un personnage autre que le Garde. Si le joueur choisi a cette carte en main, il quitte la manche."
    );
  }

  applyEffect(): void {
    console.log("Si meme carte, joueur quitte la manche");
  }
}
