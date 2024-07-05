import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = "BibOnline"
  username: string = '';
  password: string = '';
  memberType: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  navigateToDashboard(declaredRoute: string){
    this.http.post(
      'http://localhost/online-college-library-management-system/src/app/api/login.php', 
      { username: this.username, password: this.password }
      )
      .subscribe(
        (response:any) => {
          if (response.message === "Wrong password!"){
            alert("Username and password do not match!");
          }
          else if (response.message === "User not present in database!"){
            alert("The provided username doesn't exist!");
          }
          else{
            localStorage.setItem('storedUser', this.username);
            this.router.navigate([declaredRoute]);
          }
        },
        error => {
          console.error('Login failed', error);
        }
    );
  }

  verifyData() {
    if(this.username && this.password){
      const loginData = { username: this.username, password: this.password };
      
      if (this.username == "admin")
        this.navigateToDashboard('/dashboard-admin')
      
      else
        this.navigateToDashboard('/dashboard')
    }
    else if (this.username && !this.password){
      alert("The password was not provided!");
    }
    else if (!this.username && this.password){
      alert("The username was not provided!");
    }
    else{
      alert("Provide username and password!");
    }
}
}
