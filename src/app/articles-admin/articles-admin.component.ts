import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles-admin',
  templateUrl: './articles-admin.component.html',
  styleUrls: ['./articles-admin.component.css']
})
export class ArticlesAdminComponent {
  articles: any[] = [];
  articleTitle: string = '';
  articleAuthor: string = '';
  articleCategory: string = '';
  articleISBN: string = '';
  articleNumber: number | undefined;
  
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(){
    this.showArticles().subscribe(
      (obtainedData) =>{
        this.articles = obtainedData;
        console.log(this.articles);
      }
    );
  }

  registerArticle(){
    this.http.post(
      'http://localhost/online-college-library-management-system/src/app/api/register_article.php', 
      { articleTitle: this.articleTitle, articleAuthor: this.articleAuthor, articleCategory: this.articleCategory, articleISBN: this.articleISBN, articleNumber: this.articleNumber }, 
      { responseType: 'text' })
      .subscribe(
        response => {
          window.location.reload();
          console.log(response);
        },
        error => {
          console.error('Error while add', error);
        }
    );
  }

  showArticles(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost/online-college-library-management-system/src/app/api/view_articles.php');
  }

  deleteArticle(id: number){
    this.http.delete('http://localhost/online-college-library-management-system/src/app/api/delete_article.php?id=' + id)
    .subscribe((response) => {
      alert("Article deleted succesfully! This page will be reloaded");
      window.location.reload();
    }, error => {
      console.error('Error while deleting: ', error);
    });
  }
}
