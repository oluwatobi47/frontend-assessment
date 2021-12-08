import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPieChartComponent } from './data-pie-chart.component';

describe('DataPieChartComponent', () => {
  let component: DataPieChartComponent;
  let fixture: ComponentFixture<DataPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
