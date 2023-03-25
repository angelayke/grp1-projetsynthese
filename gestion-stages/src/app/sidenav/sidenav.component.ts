import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }

  sideMenuOpen = false;
  sideMenuContext = '';

  toggleSideMenu(context: string) {
    this.sideMenuOpen = !this.sideMenuOpen;
    this.sideMenuContext = context;
  }

}
