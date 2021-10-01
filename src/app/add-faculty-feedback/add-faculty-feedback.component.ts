import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Faculty } from '../model/faculty';
import { FacultyFeedback } from '../model/faculty-feedback';
import { FacultyFeedbackService } from '../service/faculty-feedback.service';

@Component({
  selector: 'app-add-faculty-feedback',
  templateUrl: './add-faculty-feedback.component.html',
  styleUrls: ['./add-faculty-feedback.component.css']
})
export class AddFacultyFeedbackComponent implements OnInit {

  facultyFeedback: FacultyFeedback
  facultyFeedbackList: FacultyFeedback[]
  addFacultyFeedbackForm : FormGroup
  faculty: Faculty;

  constructor(private facultyFeedbackService: FacultyFeedbackService, private router: Router) {
      this.facultyFeedback = new FacultyFeedback();
      this.addFacultyFeedbackForm = new FormGroup({
        'facultyName' : new FormControl(null, Validators.required),
        'facultyFeedback' : new FormControl(null, Validators.required)
      })
  }
  
  ngOnInit() {
    var jsonString  = localStorage.getItem('faculty')
    this.faculty = JSON.parse(jsonString);

    this.addFacultyFeedbackForm.patchValue({
      'facultyName' : this.faculty.facultyName
    })

    this.facultyFeedbackService.getFacultyFeedbacksByFacultyId(this.faculty.facultyId).subscribe(async res => {
      this.facultyFeedbackList = res;
    })
  }

  addFacultyFeedback() {
    this.facultyFeedback.facultyFeedback = this.addFacultyFeedbackForm.value.facultyFeedback;
    this.facultyFeedbackService.addFacultyFeedbackToFaculty(this.faculty.facultyId, this.facultyFeedback).subscribe(res => {
      console.log(res)
    })
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/home/add-faculty-feedback']);
  });
  }

}
