import { Component, OnInit, Input } from '@angular/core';
import { Teksti } from 'src/app/gallery/teksti.model';

@Component({
  selector: 'app-muutpalvelut-text',
  templateUrl: './muutpalvelut-text.component.html',
  styleUrls: ['./muutpalvelut-text.component.css']
})
export class MuutpalvelutTextComponent implements OnInit {

  @Input() teksti: Teksti; 
  @Input() index: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
