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
  players: Player[] = [];
  deck: Card[] = [];
  discard: Card[] = [];

  constructor() {
    this.addAllCards();
    this.shuffleDeck();
    this.addPlayer("J1");
    this.addPlayer("J2");
  }

  /**
   * Add all the cards to the deck
   */
  addAllCards() {
    this.addCards(new PrincessCard(), 1);
    this.addCards(new CountessCard(), 1);
    this.addCards(new KingCard(), 1);
    this.addCards(new ChancellorCard(), 2);
    this.addCards(new PrinceCard(), 2);
    this.addCards(new ServantCard(), 2);
    this.addCards(new BaronCard(), 2);
    this.addCards(new PriestCard(), 2);
    this.addCards(new GuardCard(), 6);
    this.addCards(new SpyCard(), 2);
  }

  /**
   * Add a type of card to the deck
   * @param card type of card
   * @param count number of cards of this type to add
   */
  addCards(card: Card, count: number) {
    for (let i = 0; i < count; i++) {
      this.deck.push(card);
    }
  }

  /**
   * Shuffle the deck of cards
   */
  shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

  /**
   * Add a player to the game
   */
  addPlayer(name: string) {
    this.players.push(new Player(name, this.deck.splice(0, 2)));
  }

  /**
   * Display the players and their cards
   */
  displayPlayers() {
    this.players.forEach((player) => player.toString());
  }

  /**
   * Display the number of cards in the deck
   */
  displayDeck() {
    console.log(this.deck.length);
  }

  /**
   * Display the number of cards in the discard pile
   */
  displayDiscard() {
    console.log(this.discard.length);
  }
}
