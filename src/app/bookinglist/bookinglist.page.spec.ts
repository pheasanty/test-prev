import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookinglistPage } from './bookinglist.page';

describe('BookinglistPage', () => {
  let component: BookinglistPage;
  let fixture: ComponentFixture<BookinglistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BookinglistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
