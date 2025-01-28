import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface Booking {
  id: string;
  tutor_id: string;
  student_id: string;
  date: string;
  start_time: string;
  end_time: string;
  created_at: string | null;
  updated_at: string | null;
  tutor: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    date_of_birth: string;
    nationality: string;
    speciality: string;
    created_at: string | null;
    updated_at: string | null;
  };
  student: {
    id: string;
    first_name: string;
    last_name: string;
    date_of_birth: string;
    address: string;
    created_at: string | null;
    updated_at: string | null;
  };
}

type ApiResponse = { results: Booking[] };

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  httpclient = inject(HttpClient);

  getAll(): Promise<ApiResponse> {
    console.log('Making API call to fetch bookings'); // Log before making the API call
    return firstValueFrom(
      this.httpclient.get<ApiResponse>('https://test.worldsacross.com/api/booking')
    );
  }

  constructor() { }
}
