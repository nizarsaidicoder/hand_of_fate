import { Card } from "./Card";

export class ServantCard extends Card {
  constructor() {
    super(
      4,
      "Servante",
      "Jusqu'à votre prochain tour, les effets de cartes des autres joueurs ne peuvent pas vous cibler."
    );
  }

  applyEffect(): void {
    console.log("Immunité jusqu'au prochain tour");
  }
}
