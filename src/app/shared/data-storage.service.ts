import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Item } from '../gallery/gallery.model';
import { GalleryItemitService } from '../gallery-itemit/gallery-itemit.service';
import { GalleryService } from '../gallery/gallery.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
 
  constructor(private http: HttpClient, 
     
              private galleryService: GalleryService, ) {}

  storeItems() {
    const items = this.galleryService.getItems();

    this.http
      .put(
        'https://eurouuni-ced0b-default-rtdb.europe-west1.firebasedatabase.app/gallery.json',
        items 
      )
      .subscribe(response => {
        console.log(response);
      });
    }
    
    fetchItems() {
      return this.http
        .get<Item[]>(
          'https://eurouuni-ced0b-default-rtdb.europe-west1.firebasedatabase.app/gallery.json'
        )
        .pipe(
          map(items => {
            return items.map(item => {
              return {
                ...item,
                tuotteet: item.tuotteet ? item.tuotteet : []
              };
            });
          }),
          tap(items => {
            this.galleryService.setItems(items);
          })
        )
    }
  }
  