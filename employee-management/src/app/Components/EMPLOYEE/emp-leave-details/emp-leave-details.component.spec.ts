import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLeaveDetailsComponent } from './emp-leave-details.component';

describe('EmpLeaveDetailsComponent', () => {
  let component: EmpLeaveDetailsComponent;
  let fixture: ComponentFixture<EmpLeaveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpLeaveDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpLeaveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
