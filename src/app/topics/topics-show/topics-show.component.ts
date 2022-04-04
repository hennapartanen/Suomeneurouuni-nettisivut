import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';  
import { Teksti } from 'src/app/gallery/teksti.model';

@Component({  

  selector: 'app-topics-show',  
  templateUrl: './topics-show.component.html',  
  styleUrls: ['./topics-show.component.css']  

})  

export class TopicsShowComponent implements OnInit {  

  @Input() teksti: Teksti; 
  @Input() index: number;

  
  constructor() { } 

  ngOnInit() {  


 }  


}  