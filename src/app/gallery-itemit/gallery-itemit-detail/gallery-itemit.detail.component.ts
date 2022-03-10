import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tuote } from 'src/app/shared/tuote.model';
import { GalleryItemitService } from '../gallery-itemit.service';

@Component({
  selector: 'app-gallery-itemit-detail',
  templateUrl: './gallery-itemit-detail.component.html',
  styleUrls: ['./gallery-itemit-detail.component.css']
})

export class GalleryItemitDetailComponent implements OnInit {
 tuote: Tuote;
 id: number;

  constructor(private galleryItemitService: GalleryItemitService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id1'];
          this.tuote = this.galleryItemitService.getTuote(this.id);
        }
      );
  }


  onEditTuote() {
    this.router.navigate(['edit'], {relativeTo: this.route});

  }

  onDeleteTuote() {
    this.galleryItemitService.deleteTuote(this.id);
    this.router.navigate(['../'], {relativeTo: this.route}); 
  }
  
  onCancel() { 

    this.router.navigate(['../'], {relativeTo: this.route}); 
  
  } 
  
  
}