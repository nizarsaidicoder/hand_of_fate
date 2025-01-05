import { Card } from "./Card";

export class PriestCard extends Card {
  constructor() {
    super(2, "Prêtre", "Choisissez un autre joueur et regardez sa main.");
  }

  applyEffect(): void {
    console.log("Regarder la main de l'autre joueur");
  }
}
