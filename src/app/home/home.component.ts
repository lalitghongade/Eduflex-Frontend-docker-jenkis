import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isHod: boolean
  isFaculty: boolean
  isStudent: boolean

  constructor() { }

  ngOnInit() {
    const role = localStorage.getItem('role')
    if(role == 'hod') {
      this.isHod = true
    }   
    
    if(role == 'faculty') {
      this.isFaculty = true
    }

    if(role == 'student') {
      this.isStudent = true
    }
  }

}
