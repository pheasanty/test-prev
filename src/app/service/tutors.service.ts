import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface tutor {
"id" : string;
"first_name" : string;
"last_name" : string;
"email" : string;
"date_of_birth" : string;
"nationality" : string;
"speciality" : string;
"created_at" : string;
"updated_at" : string;
}

type ApiResponse = {  results : tutor[]};

@Injectable({
  providedIn: 'root'
})
export class TutorsService {

  httpclient = inject(HttpClient);

  getAll(): Promise<ApiResponse> {
    return firstValueFrom(
      this.httpclient.get<ApiResponse>('https://test.worldsacross.com/api/tutors')
    );
  }
}
