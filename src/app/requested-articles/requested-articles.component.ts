import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-requested-articles',
  templateUrl: './requested-articles.component.html',
  styleUrls: ['./requested-articles.component.css']
})
export class RequestedArticlesComponent {
  requestedArticles: any[] = [];
  articleTitle: string = '';
  articleAuthor: string = '';
  articleCategory: string = '';
  articleISBN: string = '';
  articleNumber: number | undefined;
  
  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.showArticles().subscribe(
      (obtainedData) =>{
        this.requestedArticles = obtainedData;
      }
    );;
  }

  showArticles(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost/online-college-library-management-system/src/app/api/view_requested_articles.php');
  }

  acceptArticle(id: number){
    this.http.post('http://localhost/online-college-library-management-system/src/app/api/accept_requested_article.php?id=' + id,
      {responseType: 'text'}
    )
    .subscribe((response) => {
      alert("Article accepted succesfully! This page will be reloaded");
      window.location.reload();
    }, error => {
      console.error('Error while deleting: ', error);
    }); 
  }
  deleteArticle(id: number){
    this.http.delete('http://localhost/online-college-library-management-system/src/app/api/delete_requested_article.php?id=' + id)
    .subscribe((response) => {
      alert("Request deleted succesfully! This page will be reloaded");
      window.location.reload();
    }, error => {
      console.error('Error while deleting: ', error);
    });
  }
}
