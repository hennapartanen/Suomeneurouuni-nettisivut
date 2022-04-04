import { Component, OnInit, Input } from '@angular/core';
import { Teksti } from 'src/app/gallery/teksti.model';

@Component({
  selector: 'app-remontit-text',
  templateUrl: './remontit-text.component.html',
  styleUrls: ['./remontit-text.component.css']
})
export class RemontitTextComponent implements OnInit {

  @Input() teksti: Teksti; 
  @Input() index: number;
  

  constructor() { }

  ngOnInit(): void {
  }

}
