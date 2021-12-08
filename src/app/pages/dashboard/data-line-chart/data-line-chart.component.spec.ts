import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLineChartComponent } from './data-line-chart.component';

describe('DataLineChartComponent', () => {
  let component: DataLineChartComponent;
  let fixture: ComponentFixture<DataLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
