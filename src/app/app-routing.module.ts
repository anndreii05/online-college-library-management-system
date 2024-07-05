import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InvalidComponent } from './invalid/invalid.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { StudentsComponent } from './students/students.component';
import { RegisterComponent } from './register/register.component';
import { ArticlesAdminComponent } from './articles-admin/articles-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestedArticlesComponent } from './requested-articles/requested-articles.component';
import { AvailableArticlesComponent } from './available-articles/available-articles.component';
import { ReservedArticlesComponent } from './reserved-articles/reserved-articles.component';
import { StudentsSituationComponent } from './students-situation/students-situation.component';

const routes: Routes = [
  /* Route to the principal page */
  {path: '', component: LandingPageComponent, title: 'BibOnline'},

  /* Routes to the pages for librarian dashboard */
  {path: 'dashboard-admin', component: DashboardAdminComponent, title: 'BibOnline - Admin'},
  {path: 'dashboard-admin/students', component: StudentsComponent, title: 'BibOnline - Students list'},
  {path: 'dashboard-admin/articles', component: ArticlesAdminComponent, title: 'BibOnline - Articles list'},
  {path: 'dashboard-admin/requested-articles', component: RequestedArticlesComponent, title: 'BibOnline - Requested articles'},
  {path: 'dashboard-admin/students-situation', component: StudentsSituationComponent, title: 'BibOnline - Students situation'},

  /* Routes to the pages for student dashboard */
  {path: 'dashboard', component: DashboardComponent, title: 'BibOnline - Personal dashboard'},
  {path: 'dashboard/available-articles', component: AvailableArticlesComponent, title: 'BibOnline - Available articles'},
  {path: 'dashboard/reserved-articles', component: ReservedArticlesComponent, title: 'BibOnline - Reserved articles'},

  /* Route to an invalid page */
  {path: '**', component: InvalidComponent, title: 'BibOnline - Invalid Page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
