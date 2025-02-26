import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopImageComponent } from './laptop-image.component';

describe('LaptopImageComponent', () => {
  let component: LaptopImageComponent;
  let fixture: ComponentFixture<LaptopImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaptopImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
