import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data.storage.service';

@Component({
  selector: 'app-gallery-div',
  templateUrl: './gallery-div.component.html',
  styleUrls: ['./gallery-div.component.css']
})
export class GalleryDivComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    
  }
  
  onFetchData() {
    this.dataStorageService.fetchItems().subscribe();
  }
   
}
