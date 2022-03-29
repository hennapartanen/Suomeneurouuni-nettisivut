import { Injectable } from '@angular/core'; 
import { Subject } from 'rxjs'; 
import { Item } from './gallery.model'; 
import { Tuote } from '../shared/tuote.model';

@Injectable()
export class GalleryService {
  itemsChanged = new Subject<Item[]>();
  tuotteetChanged = new Subject<Tuote[]>();
  
  private items: Item[] = [];
  private tuotteet : Tuote[] = [];

  constructor() {}


  setItems(items: Item[]) {
    this.items = items;
    this.itemsChanged.next(this.items.slice());
  }

  getItems() {
    return this.items.slice();
  }

  getItem(index: number) {
    return this.items[index];
  }

  addItem(item: Item) {
    this.items.push(item);
    this.itemsChanged.next(this.items.slice());
  }

  updateItem(index: number, newItem: Item) {
    this.items[index] = newItem;
    this.itemsChanged.next(this.items.slice());
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
    this.itemsChanged.next(this.items.slice());
  }

  getTuotteet() {
    return this.tuotteet.slice();
  }

  getTuote(index: number) {
    return this.tuotteet[index];
  }

}
