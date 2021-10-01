import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { Faculty } from 'src/app/model/faculty';
import { FacultyService } from 'src/app/service/faculty.service';

@Component({
  selector: 'app-update-faculty',
  templateUrl: './update-faculty.component.html',
  styleUrls: ['./update-faculty.component.css']
})
export class UpdateFacultyComponent implements OnInit {
  faculty: Faculty
  facultyId: number
  course: Course
  courseList: Course[];
  updateFacultyForm: FormGroup;

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

  constructor(private facultyService: FacultyService, private router: Router) { 
    this.faculty = new Faculty();
    this.updateFacultyForm = new FormGroup({
      'facultyId' : new FormControl(null, Validators.required),
      'facultyName' : new FormControl(null, Validators.required),
      'facultyUsername' : new FormControl(null, Validators.required),
      'facultyPassword' : new FormControl(null, Validators.required),
      'facultyCity' : new FormControl(null, Validators.required),
      'facultyAvatar' : new FormControl(null, Validators.required),
      'course' : new FormControl(null, Validators.required)
    })
  }

  ngOnInit() {
    this.facultyService.getFacultyByFacultyId(history.state.facultyId).subscribe(async res => {
      console.log(res);
      
    this.updateFacultyForm.patchValue({
        'facultyId': history.state.facultyId,
        'facultyName': res.facultyName,
        'facultyUsername': res.facultyUsername,
        'facultyPassword': res.facultyPassword,
        'facultyCity': res.facultyCity,
        'facultyAvatar': res.facultyAvatar,
      });
    })
  }

  updateFaculty() {
    this.faculty.facultyId = this.updateFacultyForm.value.facultyId
    this.faculty.facultyName = this.updateFacultyForm.value.facultyName
    this.faculty.facultyCity = this.updateFacultyForm.value.facultyCity
    this.faculty.facultyUsername = this.updateFacultyForm.value.facultyUsername
    this.faculty.facultyPassword = this.updateFacultyForm.value.facultyPassword
    this.faculty.facultyAvatar = this.updateFacultyForm.value.facultyAvatar
    
    console.log(this.faculty)

    this.facultyService.updateFaculty(this.faculty).subscribe(res => {
      console.log("Updated Faculty : " +res)
    })
    this.router.navigate(['./manage-faculty'])    
  }

}
