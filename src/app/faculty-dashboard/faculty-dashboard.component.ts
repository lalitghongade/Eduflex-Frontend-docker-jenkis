import { Component, OnInit } from '@angular/core';
import { Faculty } from '../model/faculty';
import { SubjectService } from '../service/subject.service';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent implements OnInit {
  totalStudents : number
  totalSubjects: number
  faculty : Faculty
  
  constructor(private studentServie: StudentService, private studejectService: SubjectService) { }

  ngOnInit() {
    var jsonString  = localStorage.getItem('faculty')
    this.faculty = JSON.parse(jsonString);
    this.studejectService.getAllSubjects().subscribe(res => {
      this.totalSubjects = res.length 
    })
    this.studentServie.getAllStudents().subscribe(res => {
      this.totalStudents = res.length
    });
  }
}
