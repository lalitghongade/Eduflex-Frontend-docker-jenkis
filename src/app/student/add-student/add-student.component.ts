import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/model/course';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student: Student
  course: Course
  courseList: Course[];
  addStudentForm: FormGroup;
  cities: { id: string, name: string, state: string}[] = [
    {
        "id": "1",
        "name": "Mumbai",
        "state": "Maharashtra"
    },
    {
        "id": "2",
        "name": "Delhi",
        "state": "Delhi"
    },
    {
        "id": "3",
        "name": "Bengaluru",
        "state": "Karnataka"
    },
    {
        "id": "4",
        "name": "Ahmedabad",
        "state": "Gujarat"
    },
    {
        "id": "5",
        "name": "Hyderabad",
        "state": "Telangana"
    },
    {
        "id": "6",
        "name": "Chennai",
        "state": "Tamil Nadu"
    },
    {
        "id": "7",
        "name": "Kolkata",
        "state": "West Bengal"
    },
    {
        "id": "8",
        "name": "Pune",
        "state": "Maharashtra"
    },
    {
        "id": "9",
        "name": "Jaipur",
        "state": "Rajasthan"
    },
    {
        "id": "10",
        "name": "Surat",
        "state": "Gujarat"
    },
    {
        "id": "11",
        "name": "Lucknow",
        "state": "Uttar Pradesh"
    },
    {
        "id": "12",
        "name": "Kanpur",
        "state": "Uttar Pradesh"
    },
    {
        "id": "13",
        "name": "Nagpur",
        "state": "Maharashtra"
    },
    {
        "id": "14",
        "name": "Patna",
        "state": "Bihar"
    },
    {
        "id": "15",
        "name": "Indore",
        "state": "Madhya Pradesh"
    }
  ];


  constructor(private studentService: StudentService, private courseService: CourseService, private router: Router) { 
    this.student = new Student();
    this.addStudentForm = new FormGroup({
      'studentName' : new FormControl(null, Validators.required),
      'studentUsername' : new FormControl(null, Validators.required),
      'studentPassword' : new FormControl(null, Validators.required),
      'studentCity' : new FormControl(null, Validators.required),
      'studentAvatar' : new FormControl(null, Validators.required),
      'course' : new FormControl(null, Validators.required)
    })
  }

  ngOnInit() {
    this.courseService.getAllCourses().subscribe(res => {
      this.courseList = res;
    });
  }

  public addStudent() {
    this.student.studentName = this.addStudentForm.value.studentName
    this.student.studentCity = this.addStudentForm.value.studentCity
    this.student.studentUsername = this.addStudentForm.value.studentUsername
    this.student.studentPassword = this.addStudentForm.value.studentPassword
    this.student.studentAvatar = this.addStudentForm.value.studentAvatar
    console.log(this.addStudentForm.value.course.courseId);

    this.studentService.addStudent(this.student).subscribe(res => {
      console.log(res)
      this.studentService.addCourseToStudent(res.studentId, this.addStudentForm.value.course.courseId).subscribe(data => {
        console.log(data)
          this.router.navigate(['/home/manage-student'])        
      });
    });
    
  }
  
}
