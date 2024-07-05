import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  username: string = '';
  password: string = '';
  memberType: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  navigateToDashboard(declaredRoute: string){
    this.http.post(
      'http://localhost/online-college-library-management-system/src/app/api/login.php', 
      { username: this.username, password: this.password }, 
      { responseType: 'text' })
      .subscribe(
        response => {
          this.router.navigate([declaredRoute]);
        },
        error => {
          console.error('Login failed', error);
        }
    );
  }

  verifyData() {
    if(this.username && this.password){
      if (this.username == "admin")
        this.navigateToDashboard('/dashboard')
      else
        this.navigateToDashboard('/dashboard-admin')
    }
    else{
      alert("Username or password were not introduced!")
    }
}
}
