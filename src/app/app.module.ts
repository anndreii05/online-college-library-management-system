import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InvalidComponent } from './invalid/invalid.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { StudentsComponent } from './students/students.component';
import { RegisterComponent } from './register/register.component';
import { ArticlesAdminComponent } from './articles-admin/articles-admin.component';
import { HeaderStudentComponent } from './header-student/header-student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestedArticlesComponent } from './requested-articles/requested-articles.component';
import { AvailableArticlesComponent } from './available-articles/available-articles.component';
import { ReservedArticlesComponent } from './reserved-articles/reserved-articles.component';
import { StudentsSituationComponent } from './students-situation/students-situation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    InvalidComponent,
    DashboardAdminComponent,
    HeaderAdminComponent,
    StudentsComponent,
    RegisterComponent,
    ArticlesAdminComponent,
    HeaderStudentComponent,
    DashboardComponent,
    RequestedArticlesComponent,
    AvailableArticlesComponent,
    ReservedArticlesComponent,
    StudentsSituationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
