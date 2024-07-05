import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableArticlesComponent } from './available-articles.component';

describe('AvailableArticlesComponent', () => {
  let component: AvailableArticlesComponent;
  let fixture: ComponentFixture<AvailableArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableArticlesComponent]
    });
    fixture = TestBed.createComponent(AvailableArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
