import { Component, OnInit, Output, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tuote } from 'src/app/shared/tuote.model';
import { Item } from '../gallery.model';
import { GalleryService } from '../gallery.service';

@Component({ 

  selector: 'app-gallery-category', 
  templateUrl: './gallery-category.component.html', 
  styleUrls: ['./gallery-category.component.css'] 

}) 

export class GalleryCategoryComponent implements OnInit { 
  selectedTuote?: Tuote;
  item: Item;
  id: number;

  @Input() tuote: Tuote; 
  @Input() index: number; 

  constructor(private router: Router,
              private route: ActivatedRoute) { } 


  ngOnInit(){ 

  } 

   onSelect(tuote: Tuote): void {
    this.selectedTuote = tuote;
    console.log(tuote)


  }


  } 
 


 
