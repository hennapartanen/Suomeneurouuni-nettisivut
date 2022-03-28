import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'; 

import { Item } from '../../gallery.model'; 
import { DataStorageService } from 'src/app/shared/data-storage.service';
 

@Component({ 

  selector: 'app-gallery-item', 
  templateUrl: './gallery-item.component.html', 
  styleUrls: ['./gallery-item.component.css'] 

}) 

export class GalleryItemComponent implements OnInit { 
  @Input() item: Item; 
  @Input() index: number; 



  constructor(private dataStorageService: DataStorageService,) { }

  ngOnInit() { 

    
  } 

  onFetchData() {
    this.dataStorageService.fetchItems().subscribe();
  }
} 
