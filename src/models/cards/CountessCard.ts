import { Card } from "./Card";

export class CountessCard extends Card {
  constructor() {
    super(
      8,
      "Comtesse",
      "Si votre main contient le Roi ou un Prince, vous devez jouer la Comtesse."
    );
  }

  applyEffect(): void {
    console.log("Jouer la carte");
  }
}
