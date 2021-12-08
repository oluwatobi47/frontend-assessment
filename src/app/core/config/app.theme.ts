import {Theme} from "../../shared/theme.model";

export const AppThemes: {[key:string]: Theme} = {
  LIGHT: {
    name: 'light',
    themeColors: {
      '--primary': '#7459D9',
      '--primary-dark': '#7459D9',
      '--secondary': '#ECE9F1',
      '--accent': '',
      '--grey-100': '#ECE9F1',
      '--background': '#F8F9FE',
      '--background-el-sec': '#ffffff',
      '--background-el-tet': '#F2F2F7',
      '--text-color': '#11263C',
      '--text-color-light': '#D0D1D2',
      '--asset-color': '#7459D9',
      '--border-opacity': '1'
    }
  },
  DARK:       {
    name: 'dark',
    themeColors: {
      '--primary': '#5E5CE6',
      '--primary-dark': '#5E5CE6',
      '--secondary': '#ECE9F1',
      '--accent': '',
      '--grey-100': '#ECE9F1',
      '--background': '#1C1C1E',
      '--background-el-sec': '#2C2C2E',
      '--background-el-tet': '#3A3A3C',
      '--text-color': '#ffffff',
      '--text-color-light': '#EBEBF57F',
      '--asset-color': '#EBEBF57F',
      '--border-opacity': '.3'
    }
  }
}

