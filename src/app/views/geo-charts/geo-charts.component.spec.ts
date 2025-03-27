import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoChartsComponent } from './geo-charts.component';

describe('GeoChartsComponent', () => {
  let component: GeoChartsComponent;
  let fixture: ComponentFixture<GeoChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoChartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeoChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
