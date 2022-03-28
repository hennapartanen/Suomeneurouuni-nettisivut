import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Item } from '../gallery.model';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.css']
})
export class GalleryDetailComponent implements OnInit {
  item: Item;
  id: number;
  isAuthenticated = false;
  subscription: Subscription; 
  private userSub: Subscription;


  constructor(private galleryService: GalleryService,
               private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.item = this.galleryService.getItem(this.id);
        }
      );
      this.userSub = this.authService.user.subscribe(user => {
        this.isAuthenticated = !!user;
      
      });
  }

  ngOnDestroy() { 
  
    this.userSub.unsubscribe();
  } 

  onEditItem() {
    this.router.navigate(['edit'], {relativeTo: this.route});

  }


  onDeleteItem() {
    this.galleryService.deleteItem(this.id);
    this.router.navigate(['/gallery']);
  }
  
  onCancel() { 

    this.router.navigate(['../'], {relativeTo: this.route}); 
  
  } 
  
  
}
