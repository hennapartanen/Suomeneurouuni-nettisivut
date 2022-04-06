import { Component, OnInit, Output } from '@angular/core';

import { Tuote } from 'src/app/shared/tuote.model';
import { Item } from '../../gallery.model';
import { Input } from '@angular/core';


@Component({ 

  selector: 'app-gallery-category-details', 
  templateUrl: './gallery-category-details.component.html', 
  styleUrls: ['./gallery-category-details.component.css'] 

}) 

export class GalleryCategoryDetailsComponent implements OnInit { 



selectedTuote: Tuote; 
@Input() item: Item; 

  constructor() { } 


  ngOnInit(){ 

  } 

  


  } 
 


 