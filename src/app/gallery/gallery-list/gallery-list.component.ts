import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { Subscription } from 'rxjs'; 
import { Item } from '../gallery.model'; 
import { GalleryService } from '../gallery.service'; 
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({ 
  selector: 'app-gallery-list', 
  templateUrl: './gallery-list.component.html', 
  styleUrls: ['./gallery-list.component.css'] 

}) 

export class GalleryListComponent implements OnInit, OnDestroy { 
  items: Item[]; 
  isAuthenticated = false;
  subscription: Subscription; 
  private userSub: Subscription;

 
 

  constructor(private galleryService: GalleryService, 
              private router: Router,
              private authService: AuthService, 
              private route: ActivatedRoute) { 

  } 

 
 

  ngOnInit() { 

    this.subscription = this.galleryService.itemsChanged 
    .subscribe( 
      (items: Item[]) => { 
        this.items = items; 
      } 
    ); 
  this.items = this.galleryService.getItems(); 

    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    
    });

   
  } 

  

  onNewItem() { 
    this.router.navigate(['new'], {relativeTo: this.route}); 
  } 

 
  ngOnDestroy() { 
    this.subscription.unsubscribe(); 
    this.userSub.unsubscribe();
  } 

} 
