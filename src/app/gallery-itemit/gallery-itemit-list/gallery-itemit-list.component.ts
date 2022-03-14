import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { Subscription } from 'rxjs'; 
import { GalleryItemitService } from '../gallery-itemit.service'; 
import { Tuote } from 'src/app/shared/tuote.model';

@Component({ 
  selector: 'app-gallery-itemit-list', 
  templateUrl: './gallery-itemit-list.component.html', 
  styleUrls: ['./gallery-itemit-list.component.css'] 

}) 

export class GalleryItemitListComponent implements OnInit, OnDestroy { 
  tuotteet: Tuote[]; 
  subscription: Subscription; 


  constructor(private galleryItemitService: GalleryItemitService, 
              private router: Router,
              private route: ActivatedRoute) { 

  } 


  ngOnInit() { 
    this.subscription = this.galleryItemitService.tuotteetChanged 
      .subscribe( 
        (tuotteet: Tuote[]) => { 
          this.tuotteet = tuotteet; 
        } 
      ); 
    this.tuotteet = this.galleryItemitService.getTuotteet(); 

  } 

  onNewTuote() { 
    this.router.navigate(['new'], {relativeTo: this.route}); 
  } 

  ngOnDestroy() { 
    this.subscription.unsubscribe(); 
  } 

} 