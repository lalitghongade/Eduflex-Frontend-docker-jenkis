import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  student: Student
  studentId: number
  course: Course
  courseList: Course[];
  updateStudentForm: FormGroup;

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

  constructor(private studentService: StudentService, private router: Router) { 
    this.student = new Student();
    this.updateStudentForm = new FormGroup({
      'studentId' : new FormControl(null, Validators.required),
      'studentName' : new FormControl(null, Validators.required),
      'studentUsername' : new FormControl(null, Validators.required),
      'studentPassword' : new FormControl(null, Validators.required),
      'studentCity' : new FormControl(null, Validators.required),
      'studentAvatar' : new FormControl(null, Validators.required),
      'course' : new FormControl(null, Validators.required)
    })
  }

  ngOnInit() {
    this.studentService.getStudentByStudentId(history.state.studentId).subscribe(async res => {
      console.log(res);
      
    this.updateStudentForm.patchValue({
        'studentId': history.state.studentId,
        'studentName': res.studentName,
        'studentUsername': res.studentUsername,
        'studentPassword': res.studentPassword,
        'studentCity': res.studentCity,
        'studentAvatar': res.studentAvatar,
      });
    })
  }

  updateStudent() {
    this.student.studentId = this.updateStudentForm.value.studentId
    this.student.studentName = this.updateStudentForm.value.studentName
    this.student.studentCity = this.updateStudentForm.value.studentCity
    this.student.studentUsername = this.updateStudentForm.value.studentUsername
    this.student.studentPassword = this.updateStudentForm.value.studentPassword
    this.student.studentAvatar = this.updateStudentForm.value.studentAvatar
    
    console.log(this.student)

    this.studentService.updateStudent(this.student).subscribe(res => {
      console.log("Updated Student : " +res)
    })
    this.router.navigate(['/manage-student'])    
  }
}
