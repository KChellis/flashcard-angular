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
  cardList = [];
  filter: string;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.cardsService.getCards().subscribe(data => {
      for(var i =0; i< data.length; i++) {
        let card = new Card (data[i].term, data[i].definition, data[i].section);
        this.cardList.push(card);
      }
    });
  }

  showDefinition(card) {
    if(card.show) {
      card.show = false;
    } else {
      card.show = true;
    }

  }

  onChange(input) {
    this.filter = input;
  }

}
