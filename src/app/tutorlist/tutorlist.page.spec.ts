import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutorlistPage } from './tutorlist.page';

describe('TutorlistPage', () => {
  let component: TutorlistPage;
  let fixture: ComponentFixture<TutorlistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
