import { Component, OnInit, Input } from '@angular/core';

import { Remontti } from '../../remontit.model';

@Component({
  selector: 'app-remontit-item',
  templateUrl: './remontit-item.component.html',
  styleUrls: ['./remontit-item.component.css']
})
export class RemontitItemComponent implements OnInit {

  @Input() remontti: Remontti; 
  @Input() index: number; 

  constructor() { }

  ngOnInit(): void {
  }

}
