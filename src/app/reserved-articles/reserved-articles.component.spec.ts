import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedArticlesComponent } from './reserved-articles.component';

describe('ReservedArticlesComponent', () => {
  let component: ReservedArticlesComponent;
  let fixture: ComponentFixture<ReservedArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservedArticlesComponent]
    });
    fixture = TestBed.createComponent(ReservedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
