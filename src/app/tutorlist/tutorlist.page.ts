import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-tutorlist',
  templateUrl: './tutorlist.page.html',
  styleUrls: ['./tutorlist.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TutorlistPage implements OnInit {
  tutors: any[] = [];
  filteredTutors: any[] = [];
  specialities: string[] = [];
  filterSpeciality: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadTutors();
  }

  loadTutors() {
    this.http.get<any[]>('https://test.worldsacross.com/api/tutors').subscribe(
      (data) => {
        this.tutors = data;
        this.specialities = [...new Set(data.map(tutor => tutor.speciality))];
        this.applyFilter();
      },
      (error) => {
        console.error('Error fetching tutors', error);
      }
    );
  }

  applyFilter() {
    if (this.filterSpeciality) {
      this.filteredTutors = this.tutors.filter(tutor =>
        tutor.speciality.toLowerCase().includes(this.filterSpeciality.toLowerCase())
      );
    } else {
      this.filteredTutors = this.tutors;
    }
  }

  clearFilter() {
    this.filterSpeciality = '';
    this.applyFilter();
  }

  trackById(index: number, tutor: any): number {
    return tutor.id;
  }
}
