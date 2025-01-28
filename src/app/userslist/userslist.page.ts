import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserslistPage implements OnInit {
  users: any[] = [];
  selectedUser: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
      this.http.get<any[]>('https://test.worldsacross.com/api/users').subscribe(
        (data) => {
          this.users = data;
        },
        (error) => {
          console.error('Error fetching users', error);
        }
      );
    }

  trackById(index: number, user: any): string {
    return user.id;
  }

  selectUser(user: any) {
    this.selectedUser = user;
  }

  clearSelection() {
    this.selectedUser = null;
  }
}

