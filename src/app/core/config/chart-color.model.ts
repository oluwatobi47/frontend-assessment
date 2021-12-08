export interface ChartColorModel {
  pointerColor: string;
  pointerBorderColor: string;
  chartColor: string;
  secondaryColor: string;
  backgroundColor: string;
  complementaryColorSet?: Array<ChartColorModel>; //for multi parameter charts
}
