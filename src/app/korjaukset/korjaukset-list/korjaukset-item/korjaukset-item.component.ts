import { Component, OnInit, Input } from '@angular/core';
import { Korjaus } from '../../korjaus.model';

@Component({
  selector: 'app-korjaukset-item',
  templateUrl: './korjaukset-item.component.html',
  styleUrls: ['./korjaukset-item.component.css']
})
export class KorjauksetItemComponent implements OnInit {

  @Input() korjaus: Korjaus; 
  @Input() index: number; 

  constructor() { }

  ngOnInit(): void {
  }

}
