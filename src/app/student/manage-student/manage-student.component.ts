import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css']
})
export class ManageStudentComponent implements OnInit {
  studentId: number
  studentList: Student[];

  constructor(private studentService: StudentService, private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
      this.studentService.getAllStudents().subscribe(async res => {
        this.studentList = res;
      });
  }
  
  deleteStudent(student: { studentId: number; }) {
    this.studentService.deleteStudent(student.studentId).subscribe(res => {
      console.log(res)
      this.ngOnInit()
    })
  }

  updateStudent(student: { studentId: any; }) {
    this.router.navigateByUrl('./update-student', { state: {studentId : student.studentId}});
  }

}
