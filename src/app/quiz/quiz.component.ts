import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { Card } from '../card.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [CardsService]
})
export class QuizComponent implements OnInit {
  cardList = [];
  selectedCard: Card = null;
  filteredList= [];
  start: boolean = false;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.cardsService.getCards().subscribe(data => {
      for(var i =0; i< data.length; i++) {
        let card = new Card (data[i].term, data[i].definition, data[i].section);
        this.cardList.push(card);
      }
    });
  }

  onChange(filter) {
    this.filteredList = [];
    if(filter) {
      for(var i = 0; i < this.cardList.length; i++) {
        if(this.cardList[i].section === filter){
          this.filteredList.push(this.cardList[i]);
        }
      }
    }else {
      this.filteredList = this.cardList;
    }
  }

  showDefinition(card) {
    card.show = true;
  }

  getQuestion() {
    this.start = true;
    let list;
    if(this.filteredList.length > 0){
      list = this.filteredList;
    }else {
      list = this.cardList;
    }
    let max = list.length - 1;
    let index = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    this.selectedCard = list[index];
  }

}
