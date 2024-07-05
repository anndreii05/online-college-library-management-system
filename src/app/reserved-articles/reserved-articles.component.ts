import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reserved-articles',
  templateUrl: './reserved-articles.component.html',
  styleUrls: ['./reserved-articles.component.css']
})
export class ReservedArticlesComponent {
  reservedArticles: any[] = [];

  username: string = '';

  givenDate: string = '';

  valute: string = 'RON';
new: any;

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
    this.getUsername();
    return this.http.get<any[]>('http://localhost/online-college-library-management-system/src/app/api/view_booked_articles.php?reservedby=' + this.username);
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
}
