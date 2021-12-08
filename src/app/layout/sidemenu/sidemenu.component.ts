import { Component, OnInit } from '@angular/core';
import {DASHBOARD_MENU_OPTIONS, SIDE_MENU_OPTIONS} from "../../core/services/mock-data";
import {AppContextService} from "../../core/services/app-context.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  sideMenus = DASHBOARD_MENU_OPTIONS;

  options = SIDE_MENU_OPTIONS;
  selectedOption: any = 'Category';
  constructor(private router: Router, private appContext: AppContextService) { }

  ngOnInit(): void {
  }

  setSelectedOption(value: any) {
    this.selectedOption = value;
  }

  navigateToPage(menu: any) {
    this.appContext.setActiveDashboardMenu(menu);
    this.router.navigate(['dashboard']);
  }
}
