import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexibleFinancingOverviewComponent } from './flexible-financing-overview.component';

describe('FlexibleFinancingOverviewComponent', () => {
  let component: FlexibleFinancingOverviewComponent;
  let fixture: ComponentFixture<FlexibleFinancingOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexibleFinancingOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexibleFinancingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
