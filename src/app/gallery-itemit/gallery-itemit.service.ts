import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Tuote } from '../shared/tuote.model';

@Injectable()
export class GalleryItemitService {
  tuotteetChanged = new Subject<Tuote[]>();

  private tuotteet: Tuote[] = [];

  constructor() {}

  setTuotteet(tuotteet: Tuote[]) {
    this.tuotteet = tuotteet;
    this.tuotteetChanged.next(this.tuotteet.slice());
  }
  getTuotteet() {
    return this.tuotteet.slice();
  }

  getTuote(index: number) {
    return this.tuotteet[index];
  }

  addTuote(tuote: Tuote) {
    this.tuotteet.push(tuote);
    this.tuotteetChanged.next(this.tuotteet.slice());
    
  }

  updateTuote(index: number, newTuote: Tuote) {
    this.tuotteet[index] = newTuote;
    this.tuotteetChanged.next(this.tuotteet.slice());
  }

  deleteTuote(index: number) {
    this.tuotteet.splice(index, 1);
    this.tuotteetChanged.next(this.tuotteet.slice());
  }
}
