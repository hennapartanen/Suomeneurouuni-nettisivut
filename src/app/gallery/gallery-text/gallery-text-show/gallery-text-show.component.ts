import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';  
import { Teksti } from '../../teksti.model';

@Component({  

  selector: 'app-gallery-text-show',  
  templateUrl: './gallery-text-show.component.html',  
  styleUrls: ['./gallery-text-show.component.css']  

})  

 
 

export class GalleryTextShowComponent implements OnInit {  

@Input() teksti: Teksti; 
@Input() index: number;

  constructor() { } 

  ngOnInit() {  


 }  


}  