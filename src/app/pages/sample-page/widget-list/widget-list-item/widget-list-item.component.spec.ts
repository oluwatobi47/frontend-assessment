import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetListItemComponent } from './widget-list-item.component';

describe('WidgetListItemComponent', () => {
  let component: WidgetListItemComponent;
  let fixture: ComponentFixture<WidgetListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
