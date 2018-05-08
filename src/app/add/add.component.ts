import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { Card } from '../card.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [CardsService]
})
export class AddComponent implements OnInit {

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
  }

  submitForm(term: string, definition: string, section){
    let course: string;
    if(section === "1") {
      course = 'intro';
    }else if(section === "2") {
      course = 'javascript';
    }
    let newCard = new Card(term, definition, course);
    this.cardsService.addCard(newCard);
  }

}
