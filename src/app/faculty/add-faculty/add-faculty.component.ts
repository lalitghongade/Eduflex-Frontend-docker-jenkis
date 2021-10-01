import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { Faculty } from 'src/app/model/faculty';
import { FacultyService } from 'src/app/service/faculty.service';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {

  faculty: Faculty
  addFacultyForm: FormGroup;
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
    this.addFacultyForm = new FormGroup({
      'facultyName' : new FormControl(null, Validators.required),
      'facultyUsername' : new FormControl(null, Validators.required),
      'facultyPassword' : new FormControl(null, Validators.required),
      'facultyCity' : new FormControl(null, Validators.required),
      'facultyAvatar' : new FormControl(null, Validators.required),
    })
  }

  ngOnInit() {
  }

  public addFaculty() {
    this.faculty.facultyName = this.addFacultyForm.value.facultyName
    this.faculty.facultyCity = this.addFacultyForm.value.facultyCity
    this.faculty.facultyUsername = this.addFacultyForm.value.facultyUsername
    this.faculty.facultyPassword = this.addFacultyForm.value.facultyPassword
    this.faculty.facultyAvatar = this.addFacultyForm.value.facultyAvatar
    
    this.facultyService.addFaculty(this.faculty).subscribe(res => {
      console.log(res)
        this.router.navigate(['/home/manage-faculty'])        
    });
    
  }
}
