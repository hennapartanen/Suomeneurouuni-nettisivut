import { Component, OnInit, Input } from '@angular/core';
import { Teksti } from 'src/app/gallery/teksti.model';

@Component({
  selector: 'app-korjaukset-text',
  templateUrl: './korjaukset-text.component.html',
  styleUrls: ['./korjaukset-text.component.css']
})
export class KorjauksetTextComponent implements OnInit {

  @Input() teksti: Teksti; 
  @Input() index: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
