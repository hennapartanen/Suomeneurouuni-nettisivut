
import { Component, OnInit } from '@angular/core'; 
import { DataStorageService } from '../shared/data-storage.service';
import { TekstiStorageService } from '../shared/teksti-storage.service'; 
import { Router } from '@angular/router';

@Component({ 

  selector: 'app-gallery-div', 
  templateUrl: './gallery-div.component.html', 
  styleUrls: ['./gallery-div.component.css'] 
})

export class GalleryDivComponent implements OnInit { 

  display = false;
  display1 = false;
  display2 = false;
  display3 = false;
  
  constructor(private dataStorageService: DataStorageService,
              public router: Router, 
              private tekstiStorageService: TekstiStorageService) { } 

  ngOnInit(): void { 
  } 

  onFetchData() { 
     this.tekstiStorageService.fetchTekstit().subscribe(); 
    this.dataStorageService.fetchItems().subscribe(); 
  } 

 
  onPress() {
    this.display = ! this.display;
  }

  onPress1() {
    this.display1 = ! this.display1;
  }

  onPress2() {
    this.display2 = ! this.display2;
  }

  onPress3() {
    this.display3 = ! this.display3;
  }

} 

 
 

 
 