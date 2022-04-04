 

import { Component, OnInit, OnDestroy } from '@angular/core';  

import { Subscription } from 'rxjs';  

import { TekstiService } from '../gallery/teksti.service';
import { Teksti } from '../gallery/teksti.model';
import { Input } from '@angular/core';

@Component({  

  selector: 'app-topics',  
  templateUrl: './topics.component.html',  
  styleUrls: ['./topics.component.css']  

})  

export class TopicsComponent implements OnInit {  

  tekstit: Teksti[]; 
  subscription: Subscription;  
  @Input() index: number; 
 
  constructor(private tekstiService: TekstiService, ) {  }  


  ngOnInit() {  
      this.subscription = this.tekstiService.tekstitChanged  
    .subscribe(  
      (tekstit: Teksti[]) => {  
        this.tekstit = tekstit;  
      }  

    );  

  this.tekstit = this.tekstiService.getTekstit();  

  }  


} 