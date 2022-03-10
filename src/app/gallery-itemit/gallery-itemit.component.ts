import { Component, OnInit } from '@angular/core';
import { Tuote } from '../shared/tuote.model';

@Component({
  selector: 'app-gallery-itemit',
  templateUrl: './gallery-itemit.component.html',
  styleUrls: ['./gallery-itemit.component.css']
})
export class GalleryItemitComponent implements OnInit {
  selectedTuote: Tuote;
  
  constructor() { }

  ngOnInit(): void {
  }

}
