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

  submitForm(term: string, definition: string, section: string){
    let newCard = new Card(term, definition, section);
    this.cardsService.addCard(newCard);
  }

}
 
