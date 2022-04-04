import { Component, OnInit, Input } from '@angular/core';
import { Palvelu } from '../../muutpalvelut.model';

@Component({
  selector: 'app-muutpalvelut-item',
  templateUrl: './muutpalvelut-item.component.html',
  styleUrls: ['./muutpalvelut-item.component.css']
})
export class MuutpalvelutItemComponent implements OnInit {

  @Input() palvelu: Palvelu; 
  @Input() index: number; 


  constructor() { }

  ngOnInit(): void {
  }

}
