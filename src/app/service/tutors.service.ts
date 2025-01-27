import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TutorsService {

  httpclient = inject(HttpClient);

  getAll() {
    return firstValueFrom(
      this.httpclient.get('https://test.worldsacross.com/api/tutors');
    );
  }
}
