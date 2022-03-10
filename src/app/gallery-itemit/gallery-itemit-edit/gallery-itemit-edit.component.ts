import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Params, Router } from '@angular/router'; 
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'; 
import { GalleryItemitService } from '../gallery-itemit.service'; 


@Component({ 

  selector: 'app-gallery-itemit-edit', 
  templateUrl: './gallery-itemit-edit.component.html', 
  styleUrls: ['./gallery-itemit-edit.component.css'] 

}) 

export class GalleryItemitEditComponent implements OnInit { 

  id: number; 
  editMode = false; 
  toinenitemForm: FormGroup; 


  constructor(private route: ActivatedRoute, 
              private galleryItemitService: GalleryItemitService, 
              private router: Router) { 

  } 

  ngOnInit() { 

    this.route.params 
      .subscribe( 
        (params: Params) => { 
          this.id = +params['id1']; 
          console.log(this.id);
          this.editMode = params['id1'] != null;
          this.initForm(); 

        } 
      ); 
  } 

  onSubmit() { 

    if (this.editMode) { 
      this.galleryItemitService.updateTuote(this.id, this.toinenitemForm.value); 
    } else { 
      this.galleryItemitService.addTuote(this.toinenitemForm.value); 
    } 
    this.onCancel(); 

  } 

  onCancel() { 

    this.router.navigate(['../'], {relativeTo: this.route}); 

  } 


  private initForm() { 
    let tuoteName = ''; 
    let tuoteImagePath = ''; 
    let tuoteDescription = ''; 
 
    if (this.editMode) { 
      const tuote = this.galleryItemitService.getTuote(this.id); 
      tuoteName = tuote.name; 
      tuoteImagePath = tuote.imagePath; 
      tuoteDescription = tuote.description;


    } 


    this.toinenitemForm = new FormGroup({ 
      'name': new FormControl(tuoteName, Validators.required), 
      'imagePath': new FormControl(tuoteImagePath, Validators.required), 
      'description': new FormControl(tuoteDescription, Validators.required), 

    }); 

  } 

 
} 