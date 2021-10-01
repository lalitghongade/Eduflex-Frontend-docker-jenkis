import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentFeedback } from '../model/student-feedback';
import { StudentFeedbackService } from '../service/student-feedback.service';
import { Student } from '../student/student';

@Component({
  selector: 'app-add-student-feedback',
  templateUrl: './add-student-feedback.component.html',
  styleUrls: ['./add-student-feedback.component.css']
})
export class AddStudentFeedbackComponent implements OnInit {

  studentFeedback: StudentFeedback
  studentFeedbackList: StudentFeedback[]
  addStudentFeedbackForm : FormGroup
  student: Student;

  constructor(private studentFeedbackService: StudentFeedbackService, private router: Router) {
      this.studentFeedback = new StudentFeedback();
      this.addStudentFeedbackForm = new FormGroup({
        'studentName' : new FormControl(null, Validators.required),
        'studentFeedback' : new FormControl(null, Validators.required)
      })
  }
  
  ngOnInit() {
    var jsonString  = localStorage.getItem('student')
    this.student = JSON.parse(jsonString);

    this.addStudentFeedbackForm.patchValue({
      'studentName' : this.student.studentName
    })

    this.studentFeedbackService.getStudentFeedbacksByStudentId(this.student.studentId).subscribe(async res => {
      this.studentFeedbackList = res;
    })
  }

  addStudentFeedback() {
    this.studentFeedback.studentFeedback = this.addStudentFeedbackForm.value.studentFeedback;
    this.studentFeedbackService.addStudentFeedbackToStudent(this.student.studentId, this.studentFeedback).subscribe(res => {
      console.log(res)
    })
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/home/add-student-feedback']);
  });
  }


}
