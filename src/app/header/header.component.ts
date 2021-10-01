import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  role : string

  constructor(private router: Router) { }

  ngOnInit() {
    this.role = localStorage.getItem('role')
  }
  
  logOut() {
    localStorage.setItem('isAuthenticated', 'false')
    localStorage.removeItem('role')
    localStorage.removeItem('student')
    localStorage.removeItem('faculty')
    localStorage.removeItem('hod')
    this.router.navigate(['/login'])
  }
  

}
