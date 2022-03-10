import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'; 

import { Tuote } from 'src/app/shared/tuote.model';

@Component({ 

  selector: 'app-gallery-itemit-item', 
  templateUrl: './gallery-itemit-item.component.html', 
  styleUrls: ['./gallery-itemit-item.component.css'] 

}) 



export class GalleryItemitItemComponent implements OnInit { 
  @Input() index: number; 
  @Input() tuote: Tuote; 

  ngOnInit() { 

  } 

} 