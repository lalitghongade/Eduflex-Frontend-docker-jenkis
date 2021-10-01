import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'eduflex-frontend';
  isLogin:boolean;
  isHodLoggedIn:boolean
  isFacultyLoggedIn: boolean
  showLogin: boolean;
  isAuthenticated : string

  constructor(private router: Router) {
    this.isLogin  = false
    this.isHodLoggedIn = false
    this.isFacultyLoggedIn = false
    this.showLogin = true;
  }
  
  ngOnInit() {
    this.isAuthenticated = localStorage.getItem('isAuthenticated');
    if(this.isAuthenticated != 'true') {
      this.router.navigate(['/login'])
    }
  }
}
