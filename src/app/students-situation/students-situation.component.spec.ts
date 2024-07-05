import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsSituationComponent } from './students-situation.component';

describe('StudentsSituationComponent', () => {
  let component: StudentsSituationComponent;
  let fixture: ComponentFixture<StudentsSituationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsSituationComponent]
    });
    fixture = TestBed.createComponent(StudentsSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
