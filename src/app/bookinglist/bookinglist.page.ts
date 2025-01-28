import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.page.html',
  styleUrls: ['./bookinglist.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BookinglistPage implements OnInit {
  bookings: any[] = [];
  selectedBooking: any = null;
  filterStudentName: string = '';
  filteredBookings: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadBookings();
  }

  loadBookings() {
    this.http.get<any[]>('https://test.worldsacross.com/api/booking').subscribe(
      (data) => {
        this.bookings = data;
        this.applyFilter();
      },
      (error) => {
        console.error('Error fetching tutors', error);
      }
    );
  }

  applyFilter() {
    if (this.filterStudentName) {
      this.filteredBookings = this.bookings.filter(booking =>
        booking.student.first_name.toLowerCase().includes(this.filterStudentName.toLowerCase()) ||
        booking.student.last_name.toLowerCase().includes(this.filterStudentName.toLowerCase())
      );
    } else {
      this.filteredBookings = this.bookings;
    }
  }

  clearFilter() {
    this.filterStudentName = '';
    this.applyFilter();
  }

  trackById(index: number, booking: any): string {
    return booking.id;
  }

  selectBooking(booking: any) {
    this.selectedBooking = booking;
  }

  clearSelection() {
    this.selectedBooking = null;
  }
}

export default BookinglistPage;
