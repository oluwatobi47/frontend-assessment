import { Injectable } from '@angular/core';
import {ChartColorModel} from "../config/chart-color.model";
import {AppThemes} from "../config/app.theme";

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private chartColorPalette: Map<string, ChartColorModel> = new Map<string, ChartColorModel>();
  constructor() {
    this.init();
  }

  init() {
    this.chartColorPalette.set('light', {
      pointerColor: '#7459D9',
      pointerBorderColor: '#fff',
      chartColor: '#7459D9',
      secondaryColor: '#ECE9F1',
      backgroundColor: '#7459D9',
      complementaryColorSet: [
        {
          pointerColor: '#ECE9F1',
          pointerBorderColor: '#fff',
          chartColor: '#ECE9F1',
          secondaryColor: '#7459D9',
          backgroundColor: '#ECE9F1',
        }
      ]
    });

    this.chartColorPalette.set('dark', {
      pointerColor: AppThemes['DARK'].themeColors['--primary'],
      pointerBorderColor: '#fff',
      chartColor: AppThemes['DARK'].themeColors['--primary'],
      secondaryColor: AppThemes['DARK'].themeColors['--secondary'],
      backgroundColor: '#5E5CE6',
      complementaryColorSet: [
        {
          pointerColor: '#ECE9F1',
          pointerBorderColor: '#fff',
          chartColor: '#3D3C41',
          secondaryColor: '#7459D9',
          backgroundColor: '#3D3C41',
        }
      ]
    });
  }

//  Utitlity/Factory Methods to lighten or darken colors

  hexToRgb(hexCode: string){
    let c:any;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexCode)){
      c= hexCode.substring(1).split('');
      if(c.length== 3){
        c= [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c= '0x'+c.join('');
      return [(c>>16)&255, (c>>8)&255, c&255].join(',');
    }
    throw new Error('Bad Hex');
  }

  getChartColors(theme: string): ChartColorModel | undefined{
    return this.chartColorPalette.get(theme);
  }
}
