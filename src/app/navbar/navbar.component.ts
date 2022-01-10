import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/navbar/menu-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Verkkokauppa',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Tarjoukset',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    
    {
      label: 'Yhteistiedot',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Yhteydenotto',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Galleria',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
  ];

  
  constructor() { }

  ngOnInit(): void {
  }

}
