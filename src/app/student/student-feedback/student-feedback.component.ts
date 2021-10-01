import { Component, OnInit } from '@angular/core';
import { StudentFeedback } from 'src/app/model/student-feedback';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-feedback',
  templateUrl: './student-feedback.component.html',
  styleUrls: ['./student-feedback.component.css']
})
export class StudentFeedbackComponent implements OnInit {

  studentFeedback: StudentFeedback
  studentFeedbackList: StudentFeedback[]
  studentList: Student[];

  constructor(private studentService: StudentService) {
      this.studentFeedback = new StudentFeedback();
   }

  ngOnInit() {
      this.studentService.getAllStudents().subscribe(res => {
        this.studentList = res
        console.log(res)
      })
  }
}
