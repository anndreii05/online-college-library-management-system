import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardAdminComponent } from './dashboard-admin.component';

describe('DasboardAdminComponent', () => {
  let component: DasboardAdminComponent;
  let fixture: ComponentFixture<DasboardAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DasboardAdminComponent]
    });
    fixture = TestBed.createComponent(DasboardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
