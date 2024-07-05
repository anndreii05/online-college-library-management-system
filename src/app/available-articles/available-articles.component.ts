import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-available-articles',
  templateUrl: './available-articles.component.html',
  styleUrls: ['./available-articles.component.css']
})
export class AvailableArticlesComponent {
  articles: any[] = [];

  titleReqArticle: string = '';
  categoryReqArticle: string = '';
  authorReqArticle: string = '';

  username: string = '';

  actualDate: string = '';
  dueDate: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.showArticles().subscribe(
      (obtainedData) =>{
        this.articles = obtainedData;
      }
    );
    this.getUsername();
  }

  getUsername() {
    const loggedUser = localStorage.getItem('storedUser');
    this.username = loggedUser || '';
  }

  showArticles(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost/online-college-library-management-system/src/app/api/view_articles.php');
  }

  bookItem(id: number, numberOfArticles: number){
    if (numberOfArticles <= 0){
      alert("No available article!");
    }
    else{
      const currentDate = new Date();
      this.actualDate = currentDate.toISOString().split('T')[0];

      const dueDateObj = new Date();
      dueDateObj.setDate(currentDate.getDate() + 14);
      this.dueDate = dueDateObj.toISOString().split('T')[0];

      this.http.post('http://localhost/online-college-library-management-system/src/app/api/book_article.php?id=' + id, 
        {username: this.username, actualDate: this.actualDate, dueDate: this.dueDate})
        .subscribe((response:any) =>{
          if(response.message === "You have already requested this article!"){
            alert('The article was already booked by you!')
          }
          else{
            alert('You have successfully reserved this article!');
            window.location.reload();
          }
        }
        )
    }
  }

  requestArticle(){
    this.http.post(
      'http://localhost/online-college-library-management-system/src/app/api/request_article.php', 
      { titleReqArticle: this.titleReqArticle, categoryReqArticle: this.categoryReqArticle, authorReqArticle: this.authorReqArticle }, 
      { responseType: 'text' })
      .subscribe(
        (response:any) => {
          console.log(response);
          if (response.message == "Article already requested!"){
            alert("Article already requested!");
          }
          alert("Article requested succesfully!");
        },
        error => {
          console.error('Unexpected error: ', error);
        }
    );
  }
}
