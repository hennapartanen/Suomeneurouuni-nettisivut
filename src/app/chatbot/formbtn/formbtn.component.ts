import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { faHammer } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-formbtn',
  templateUrl: './formbtn.component.html',
  styleUrls: ['./formbtn.component.css']
})
export class FormbtnComponent {

  @Input() showButton: boolean;
  faHammer = faHammer;
  faFire = faFire;
  faQuestion = faQuestion;

  showForm1: boolean = false;
  showForm2: boolean = false;
  showForm3: boolean = false;

  addForm1() {
    this.showForm1 = !this.showForm1;
    this.showButton = false;
  }

  addForm2() {
    this.showForm2 = !this.showForm2;
    this.showButton = false;
  }
  addForm3() {
    this.showForm3 = !this.showForm3;
    this.showButton = false;
  }
  ngOnInit(): void {

  }


}
