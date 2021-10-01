import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Faculty } from '../model/faculty';
import { FacultyService } from '../service/faculty.service';
import { Student } from '../student/student';
import { StudentService } from '../student/student.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup
  student: Student
  faculty: Faculty


  constructor(private router: Router, private facultyService: FacultyService, private studentService : StudentService) {
    this.loginForm = new FormGroup({
      'username' : new FormControl(null,Validators.required),
      'password' : new FormControl(null, Validators.required),
      'role' : new FormControl(null)
    })
  }

  ngOnInit() {
  }

  login() {
    
    if(this.loginForm.value.role == 'student') {
      this.studentService.getStudentByStudentUsernameAndStudentPassword(this.loginForm.value.username, this.loginForm.value.password).subscribe(async (studentData:Student) => {
          this.student = studentData
      })

      if(this.student != null) {
        localStorage.setItem('isAuthenticated', 'true')
        localStorage.setItem('role', this.loginForm.value.role)
        localStorage.setItem("student", JSON.stringify(this.student));
        this.router.navigateByUrl('/home')
      } else {
        this.loginForm.reset()
        alert("Invalid Creadentials!!!")
        this.router.navigateByUrl('/login')
      }
      
    } else if(this.loginForm.value.role == 'faculty') {
      this.facultyService.getFacultyByFacultyUsernameAndAndFacultyPassword(this.loginForm.value.username, this.loginForm.value.password).subscribe(async (facultyData: null) => {
        this.faculty = facultyData
      })

      if(this.faculty != null) {
        localStorage.setItem('isAuthenticated', 'true')
        localStorage.setItem('role', this.loginForm.value.role)
        localStorage.setItem("faculty", JSON.stringify(this.faculty));
        this.router.navigateByUrl('/home')
      } else {
        this.loginForm.reset()
        alert("Invalid Creadentials!!!")
        this.router.navigateByUrl('/login')
      }

    } else if(this.loginForm.value.role == 'hod') {
        if(this.loginForm.value.username == 'admin' && this.loginForm.value.password == 'admin') {
          localStorage.setItem('isAuthenticated', 'true')
          localStorage.setItem('role', this.loginForm.value.role)
          this.router.navigateByUrl('/home')
        } else {
          this.loginForm.reset()
          alert("Invalid Creadentials!!!")
          this.router.navigateByUrl('/login')
        }
    } else {
        this.loginForm.reset()
        alert("Invalid Creadentials!!!")
        this.router.navigateByUrl('/login')
    }
  }
}
