import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CardsService {
  cardList: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.cardList = database.list('cards');
  }

  getCards(){
    return this.cardList;
  }

  addCard(newCard) {
    this.cardList.push(newCard);
  }
  getSingleCard(cardId) {
    return this.database.object('cards/' + cardId)
  }

  editCard(card) {
    let cardEntry = this.getSingleCard(card.$key);
    cardEntry.update(card);
  }

  deleteCard(card) {
    let cardEntry = this.getSingleCard(card.$key);
    cardEntry.remove();
  }

}
