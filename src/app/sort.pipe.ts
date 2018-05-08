import {Pipe, PipeTransform} from '@angular/core';
import {Card} from './card.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Pipe({
  name: "sort",
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(input, filter) {

      let results = [];
      if(filter) {
        for(var i = 0; i < input.length; i++) {
          if(input[i].section === filter){
            results.push(input[i]);
          }
        }
        return results;
      }else {
        return input;
      }

    }
}
