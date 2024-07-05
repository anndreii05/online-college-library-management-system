import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  username: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.getUsername();
  }

  getUsername() {
    const loggedUser = localStorage.getItem('storedUser');
    this.username = loggedUser || '';
  }
}
