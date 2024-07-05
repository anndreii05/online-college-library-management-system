import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName:   string = '';
  lastName:    string = '';
  studentCode: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  registerStudent(){
    this.http.post(
      'http://localhost/online-college-library-management-system/src/app/api/register_student.php', 
      { firstname: this.firstName, lastname: this.lastName, studentcode: this.studentCode }, 
      { responseType: 'text' })
      .subscribe(
        response => {
          this.router.navigate(['/dashboard/students']);
          console.log(response)
        },
        error => {
          console.error('Error while add', error);
        }
    );
  }
}
