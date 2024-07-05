import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{

  users: any[] = [];
  constructor(private http: HttpClient, private router: Router) {}

  firstName: string = '';
  lastName: string = '';
  studentCode: string = '';

  ngOnInit(){
    this.showStudents().subscribe(
      (obtainedData) =>{
        this.users = obtainedData;
      }
    );
  }

  registerStudent(){
    this.http.post(
      'http://localhost/online-college-library-management-system/src/app/api/register_student.php', 
      { firstname: this.firstName, lastname: this.lastName, studentcode: this.studentCode }, 
      { responseType: 'text' })
      .subscribe(
        response => {
          window.location.reload();
          console.log(response)
        },
        error => {
          console.error('Error while add: ', error);
        }
    );
  }

  deleteStudent(id: number){
    this.http.delete('http://localhost/online-college-library-management-system/src/app/api/delete_user.php?id=' + id)
    .subscribe((response) => {
      confirm("Student deleted succesfully! This page will be reloaded");
      window.location.reload();
    }, error => {
      console.error('Error while deleting: ', error);
    });
  }

  showStudents(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost/online-college-library-management-system/src/app/api/view_students.php');
  }
}
