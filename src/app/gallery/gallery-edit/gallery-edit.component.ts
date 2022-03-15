import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Params, Router } from '@angular/router'; 
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'; 
import { GalleryService } from '../gallery.service'; 


@Component({ 

  selector: 'app-gallery-edit', 
  templateUrl: './gallery-edit.component.html', 
  styleUrls: ['./gallery-edit.component.css'] 

}) 

export class GalleryEditComponent implements OnInit { 

  id: number; 
  editMode = false; 
  itemForm: FormGroup; 

  constructor(private route: ActivatedRoute, 
              private galleryService: GalleryService, 
              private router: Router) { 

  } 

 
  ngOnInit() { 

    this.route.params 
      .subscribe( 
        (params: Params) => { 
          this.id = +params['id']; 
          this.editMode = params['id'] != null; 
          this.initForm(); 

        } 
      ); 
      
  } 


  onSubmit() { 

    if (this.editMode) { 
      this.galleryService.updateItem(this.id, this.itemForm.value); 
    } else { 
      this.galleryService.addItem(this.itemForm.value); 
    } 
    this.onCancel(); 

  } 
  
  onAddTuote() {
    (<FormArray>this.itemForm.get('tuotteet')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        imagePath: new FormControl(null, Validators.required),
        description: new FormControl(null, Validators.required),
      })
    );
  }

  onDeleteTuote(index: number) {
    (<FormArray>this.itemForm.get('tuotteet')).removeAt(index);
  }
  

  onCancel() { 
    this.router.navigate(['../'], {relativeTo: this.route}); 
  } 

  private initForm() { 
    let itemName = ''; 
    let itemImagePath = ''; 
    let itemTuotteet = new FormArray([]);

    if (this.editMode) {
      const item = this.galleryService.getItem(this.id);
      itemName = item.name;
      itemImagePath = item.imagePath;
      if (item['tuotteet']) {
        for (let tuote of item.tuotteet) {
          itemTuotteet.push(
            new FormGroup({
              name: new FormControl(tuote.name, Validators.required),
              imagePath: new FormControl(tuote.imagePath, Validators.required),
              description: new FormControl(tuote.description, Validators.required),
     
            })
          );
        }
      }
    }

    this.itemForm = new FormGroup({ 
      name: new FormControl(itemName, Validators.required), 
      imagePath: new FormControl(itemImagePath, Validators.required), 
      tuotteet: itemTuotteet
    }); 
  } 

} 
