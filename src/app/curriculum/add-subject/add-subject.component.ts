import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacultyService } from 'src/app/service/faculty.service';
import { Faculty } from 'src/app/model/faculty';
import { Subject } from 'src/app/model/subject';
import { SubjectService } from 'src/app/service/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  subject: Subject
  faculty: Faculty
  facultyList: Faculty[]
  addSubjectForm: FormGroup


  constructor(private facultyService: FacultyService, private subjectService: SubjectService, private router: Router) { 
    this.subject = new Subject();
    this.addSubjectForm = new FormGroup({
      'subjectName' : new FormControl(null, Validators.required),
      'faculty' : new FormControl(null, Validators.required)
    })
  }

  ngOnInit() {
    this.facultyService.getAllFaculties().subscribe(res => {
      this.facultyList = res;
    });
  }

  public addSubject() {
    this.subject.subjectName = this.addSubjectForm.value.subjectName

    this.subjectService.addSubject(this.subject).subscribe(res => {
      console.log(res)
      this.subjectService.addSubjectToFaculty(res.subjectId, this.addSubjectForm.value.faculty.facultyId).subscribe(data => {
        console.log(data)
          this.router.navigate(['/home/manage-subject'])        
      });
    });
  }

}
