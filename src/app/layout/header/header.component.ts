import { Component, OnInit } from '@angular/core';
import {ThemeService} from "../../core/services/theme.service";
import {Theme} from "../../shared/theme.model";
import {AppContextService} from "../../core/services/app-context.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeTheme: Theme;

  user: any;

  constructor(private themeService: ThemeService, private appContext:AppContextService) {
    this.activeTheme = this.themeService.activeTheme;
  }

  ngOnInit(): void {
    this.themeService.getActiveTheme().pipe().subscribe({
      next: value => {
        if(value) {
          this.activeTheme = value;
        }
      }
    });

    this.user = this.appContext.getUserInfo();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
