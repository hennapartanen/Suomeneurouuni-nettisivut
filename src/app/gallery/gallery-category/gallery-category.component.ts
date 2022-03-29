import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tuote } from 'src/app/shared/tuote.model';
import { Item } from '../gallery.model';
import { GalleryService } from '../gallery.service';
import { Input } from '@angular/core';


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

  constructor(private galleryService: GalleryService,
              private route: ActivatedRoute,
              ) { } 


  ngOnInit(){ 

    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.item = this.galleryService.getItem(this.id);
      }
    );
  } 

  getelementData(tuote){
 
    console.log(tuote.name);
    console.log(tuote.imagePath);
    console.log(tuote.description);
  
  
   }

   onSelect(tuote: Tuote): void {
    this.selectedTuote = tuote;
  }


  } 
 


 
 