import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrPasswordComponent } from './hr-password.component';

describe('HrPasswordComponent', () => {
  let component: HrPasswordComponent;
  let fixture: ComponentFixture<HrPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
