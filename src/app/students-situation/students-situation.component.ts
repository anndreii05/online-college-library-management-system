import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, debounceTime } from 'rxjs';

@Component({
  selector: 'app-students-situation',
  templateUrl: './students-situation.component.html',
  styleUrls: ['./students-situation.component.css']
})
export class StudentsSituationComponent {
  reservedArticles: any[] = [];

  username: string = '';

  valute: string = 'RON';

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.showArticles().subscribe(
      (obtainedData:any) =>{
        this.reservedArticles = obtainedData;
        console.log(obtainedData);
      }
    );
    this.getUsername();
  }

  getUsername() {
    const loggedUser = localStorage.getItem('storedUser');
    this.username = loggedUser || '';
  }

  showArticles(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost/online-college-library-management-system/src/app/api/view_students_situation.php');
  }

  getDifferenceDueAndActual(actualDate: string, dueDate: string) {
    const diffTime = new Date(dueDate).getTime() - new Date().getTime();
    const difference =  Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (difference > 0){
      return '0.00';
    }
    else{
      return (1/2*difference*(-1)).toFixed(2);
    }
  }

  solveSituation(id: number, title: string, isbn: string){
    this.http.post('http://localhost/online-college-library-management-system/src/app/api/solve_student_situation.php?id=' + id + '&&title=' + title + '&&isbn=' + isbn,
      {responseType: 'text'}
    )
    .subscribe((response) => {
      //alert("Request deleted succesfully! This page will be reloaded");
      debounceTime(300);
      window.location.reload();
    }, error => {
      console.error('Error while deleting: ', error);
    });
  }
}
