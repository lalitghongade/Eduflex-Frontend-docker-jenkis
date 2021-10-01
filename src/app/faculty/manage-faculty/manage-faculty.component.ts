import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Faculty } from 'src/app/model/faculty';
import { FacultyService } from 'src/app/service/faculty.service';

@Component({
  selector: 'app-manage-faculty',
  templateUrl: './manage-faculty.component.html',
  styleUrls: ['./manage-faculty.component.css']
})
export class ManageFacultyComponent implements OnInit {

  facultyId: number
  facultyList: Faculty[];

  constructor(private facultyService: FacultyService, private router: Router) { }

  ngOnInit() {
      this.facultyService.getAllFaculties().subscribe(async res => {
        this.facultyList = res;
      });
  }
  
  deleteFaculty(faculty: { facultyId: number; }) {
    this.facultyService.deleteFaculty(faculty.facultyId).subscribe(res => {
      console.log(res)
      this.ngOnInit()
    })
  }

  updateFaculty(faculty: { facultyId: any; }) {
    this.router.navigateByUrl('./update-faculty', { state: {facultyId : faculty.facultyId}});
  }
}
