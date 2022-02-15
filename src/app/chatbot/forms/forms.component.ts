import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @Input() showForm1: boolean;
  @Input() showForm2: boolean;
  @Input() showForm3: boolean;

  faExclamationTriangle = faExclamationTriangle;

  exform: FormGroup;

  constructor() { }


  ngOnInit() {

    this.exform = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email])
    })
  }

}
