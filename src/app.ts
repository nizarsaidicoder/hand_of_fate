import { PrincessCard } from "./models/cards/PrincessCard";
import { Round } from "./models/Round";

export function testGame(): void {
  const round = new Round();
  console.log("Début de la partie");
  round.displayPlayers();
  round.displayDeck();
  round.displayDiscard();
}
