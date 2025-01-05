import { Player } from "./Player";
import { Card } from "./cards/Card";
import { PrincessCard } from "./cards/PrincessCard";
import { CountessCard } from "./cards/CountessCard";
import { KingCard } from "./cards/KingCard";
import { ChancellorCard } from "./cards/ChancellorCard";
import { PrinceCard } from "./cards/PrinceCard";
import { ServantCard } from "./cards/ServantCard";
import { BaronCard } from "./cards/BaronCard";
import { PriestCard } from "./cards/PriestCard";
import { GuardCard } from "./cards/GuardCard";
import { SpyCard } from "./cards/SpyCard";

export class Round {
  player1: Player;
  player2: Player;
  deck: Card[] = [];

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
    this.addAllCards();
  }

  addAllCards() {
    this.deck.push(
      new PrincessCard(),
      new CountessCard(),
      new KingCard(),
      new ChancellorCard(),
      new ChancellorCard(),
      new PrinceCard(),
      new PrinceCard(),
      new ServantCard(),
      new ServantCard(),
      new BaronCard(),
      new BaronCard(),
      new PriestCard(),
      new PriestCard(),
      new GuardCard(),
      new GuardCard(),
      new GuardCard(),
      new GuardCard(),
      new GuardCard(),
      new GuardCard(),
      new SpyCard(),
      new SpyCard()
    );
  }
}
