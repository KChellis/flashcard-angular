import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { Card } from '../card.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [CardsService]
})
export class CardsComponent implements OnInit {
  cardList: FirebaseListObservable<any[]>;
  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.cardList = this.cardsService.getCards();
  }

  showDefinition(card) {
    if(card.show) {
      card.show = false;
    } else {
      card.show = true;
    }

  }

}
