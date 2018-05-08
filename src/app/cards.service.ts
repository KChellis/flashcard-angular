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

}
