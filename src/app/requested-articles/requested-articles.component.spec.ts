import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedArticlesComponent } from './requested-articles.component';

describe('RequestedArticlesComponent', () => {
  let component: RequestedArticlesComponent;
  let fixture: ComponentFixture<RequestedArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestedArticlesComponent]
    });
    fixture = TestBed.createComponent(RequestedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
