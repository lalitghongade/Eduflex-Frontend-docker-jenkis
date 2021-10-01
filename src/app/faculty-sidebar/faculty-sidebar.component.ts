import { Component, OnInit } from '@angular/core';
import { Faculty } from '../model/faculty';
import { SubjectService } from '../service/subject.service';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-faculty-sidebar',
  templateUrl: './faculty-sidebar.component.html',
  styleUrls: ['./faculty-sidebar.component.css']
})
export class FacultySidebarComponent implements OnInit {
  faculty : Faculty
    
  constructor() {
    this.faculty = new Faculty();
   }

  ngOnInit() {
    var jsonString  = localStorage.getItem('faculty')
    this.faculty = JSON.parse(jsonString);
  }

}
