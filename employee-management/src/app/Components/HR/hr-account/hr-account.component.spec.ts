import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrAccountComponent } from './hr-account.component';

describe('HrAccountComponent', () => {
  let component: HrAccountComponent;
  let fixture: ComponentFixture<HrAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
