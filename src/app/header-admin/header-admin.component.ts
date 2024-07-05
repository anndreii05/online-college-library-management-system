import { Component } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent {
  title = "BibOnline";
  username: string = '';

  ngOnInit(){
    this.getUsername();
  }
  
  getUsername() {
    const loggedUser = localStorage.getItem('storedUser');
    this.username = loggedUser || '';
  }
}
