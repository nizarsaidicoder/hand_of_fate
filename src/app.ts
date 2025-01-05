import { PrincessCard } from "./models/cards/PrincessCard";

export function hi(): void {
  const card1 = new PrincessCard();
  console.log("Nom de la carte : " + card1.name);
  console.log("Description de la carte : " + card1.description);
  console.log("Puissance de la carte : " + card1.power);
  card1.applyEffect();
}
