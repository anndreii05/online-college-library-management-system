import { Component } from '@angular/core';

@Component({
  selector: 'app-header-student',
  templateUrl: './header-student.component.html',
  styleUrls: ['./header-student.component.css']
})
export class HeaderStudentComponent {

  username: string = '';

  ngOnInit(){
    this.getUsername();
  }

  getUsername() {
    const loggedUser = localStorage.getItem('storedUser');
    this.username = loggedUser || '';
  }
}
