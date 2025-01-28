import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface user {
  "id": string;
  "first_name": string;
  "last_name": string;
  "date_of_birth": string;
  "address": string;
  "created_at": string;
  "updated_at": string;
}

type ApiResponse = { results: user[] };

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpclient = inject(HttpClient);

  getAll(): Promise<ApiResponse> {
    console.log('Making API call to fetch users'); // Log before making the API call
    return firstValueFrom(
      this.httpclient.get<ApiResponse>('https://test.worldsacross.com/api/users')
    );
  }
}
