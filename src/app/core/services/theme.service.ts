import {Inject, Injectable} from '@angular/core';
import {Theme} from "../../shared/theme.model";
import {AppThemes} from "../config/app.theme";
import {DOCUMENT} from "@angular/common";
import {BehaviorSubject} from "rxjs";
import {ColorService} from "./color.service";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  activeTheme: Theme = AppThemes['LIGHT'];

  activeThemeObs: BehaviorSubject<Theme | null> = new BehaviorSubject<Theme | null>(null);
  constructor(@Inject(DOCUMENT) private document: Document, private colorService: ColorService) {
    this.init().then(r => {console.log('Theme Initialized')});
  }

  async init(): Promise<any> {
    await this.processThemes();
    this.applyTheme(this.activeTheme);
  }

  processThemes() {
    Object.keys(AppThemes).forEach(themeKey => {
      Object.keys(AppThemes[themeKey].themeColors).forEach(colorKey => {
        try {
          const keyArr = colorKey.split('');
          keyArr.splice(2, 0, 'rgb', '-');
          const rgbKey = keyArr.join('');
          const rgbValue = this.colorService.hexToRgb(AppThemes[themeKey].themeColors[colorKey]);
          AppThemes[themeKey].themeColors[rgbKey] = rgbValue;
        } catch (e) {
          // console.log({e});
        }
      });
    })
  }

  getActiveTheme(){
    return this.activeThemeObs.asObservable();
  }

  toggleTheme() {
    if (this.activeTheme.name == 'light') {
      this.setActiveTheme('DARK');
    } else {
      this.setActiveTheme('LIGHT');
    }
  }

  applyTheme(theme: Theme) {
    this.activeThemeObs.next(theme);
    Object.keys(theme.themeColors).forEach( (key) => {
      this.document.documentElement.style.setProperty(key, this.activeTheme.themeColors[key]);
    })
  }

  setActiveTheme(themeKey: string){
    this.activeTheme = AppThemes[themeKey];
    this.applyTheme(this.activeTheme);
  }

}
