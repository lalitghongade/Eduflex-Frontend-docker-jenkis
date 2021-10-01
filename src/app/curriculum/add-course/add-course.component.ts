import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  course: Course;
  addCourseForm: FormGroup;


  constructor(private courseService: CourseService, private route: Router) { 
    this.course = new Course();
    this.addCourseForm = new FormGroup({
      'courseName' : new FormControl(null, Validators.required),
    })
  }

  public addCourse() {
    this.course.courseName = this.addCourseForm.value.courseName;

    this.courseService.addCourse(this.course).subscribe(res => {
      console.log(res);
    });
    this.route.navigate(['/home/manage-course']);
  }

}
