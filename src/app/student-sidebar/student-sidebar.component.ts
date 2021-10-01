import { Component, OnInit } from '@angular/core';
import { Student } from '../student/student';

@Component({
  selector: 'app-student-sidebar',
  templateUrl: './student-sidebar.component.html',
  styleUrls: ['./student-sidebar.component.css']
})
export class StudentSidebarComponent implements OnInit {
  student:Student

  constructor() { 
    this.student = new Student()
  }

  ngOnInit() {
    var jsonString  = localStorage.getItem('student')
    this.student = JSON.parse(jsonString);
  }

}
