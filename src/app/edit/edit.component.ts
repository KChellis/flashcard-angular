import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { Card } from '../card.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [CardsService]
})
export class EditComponent implements OnInit {
  cardList: FirebaseListObservable<any[]>;
  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.cardList = this.cardsService.getCards();
  }

  showEdit(card) {
    if(card.show) {
      card.show = false;
    } else {
      card.show = true;
    }
  }

  editCard(card) {
    card.show = false;
    this.cardsService.editCard(card);
  }

  deleteCard(card) {
    this.cardsService.deleteCard(card);
  }
}
