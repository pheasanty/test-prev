import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainPage implements OnInit {
  tutorCount: number = 0;
  userCount: number = 0;
  bookingCount: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadCounts();
  }

  loadCounts() {
    this.http.get<any[]>('https://test.worldsacross.com/api/tutors').subscribe(
      (data) => this.tutorCount = data.length,
      (error) => console.error('Error fetching tutors count', error)
    );

    this.http.get<any[]>('https://test.worldsacross.com/api/users').subscribe(
      (data) => this.userCount = data.length,
      (error) => console.error('Error fetching users count', error)
    );

    this.http.get<any[]>('https://test.worldsacross.com/api/booking').subscribe(
      (data) => this.bookingCount = data.length,
      (error) => console.error('Error fetching bookings count', error)
    );
  }
}

export default MainPage;
