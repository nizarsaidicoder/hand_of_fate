import { Card } from "./Card";

export class PrincessCard extends Card {
  constructor() {
    super(
      9,
      "Princesse",
      "Si vous jouez ou défaussez la princesse, vous quittez la manche."
    );
  }

  applyEffect(): void {
    console.log("Le joueur quitte la manche");
  }
}
