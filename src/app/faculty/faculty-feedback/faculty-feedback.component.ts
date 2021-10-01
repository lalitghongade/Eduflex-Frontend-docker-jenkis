import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FacultyFeedback } from './../../model/faculty-feedback';
import { FacultyFeedbackService } from './../../service/faculty-feedback.service';
import { Component, OnInit } from '@angular/core';
import { Faculty } from 'src/app/model/faculty';
import { FacultyService } from 'src/app/service/faculty.service';

@Component({
  selector: 'app-faculty-feedback',
  templateUrl: './faculty-feedback.component.html',
  styleUrls: ['./faculty-feedback.component.css']
})
export class FacultyFeedbackComponent implements OnInit {
  facultyFeedback: FacultyFeedback
  facultyFeedbackList: FacultyFeedback[]
  facultyList: Faculty[];

  constructor(private facultyFeedbackService: FacultyFeedbackService, private facultyService: FacultyService) {
      this.facultyFeedback = new FacultyFeedback();
   }

  ngOnInit() {
      this.facultyService.getAllFaculties().subscribe(res => {
        this.facultyList = res
        console.log(res)
      })
  }
}
