import { async } from '@angular/core/testing';
import { ClassYearService } from './../../service/class-year.service';
import { Component, OnInit } from '@angular/core';
import { ClassYear } from 'src/app/model/class-year';

@Component({
  selector: 'app-manage-class-year',
  templateUrl: './manage-class-year.component.html',
  styleUrls: ['./manage-class-year.component.css']
})
export class ManageClassYearComponent implements OnInit {

  classYearList: ClassYear[]

  constructor(private classYearService: ClassYearService) {
  }

  ngOnInit() {
    this.classYearService.getAllClassYears().subscribe(async res => {
      this.classYearList = res;
    })
  }

  deleteStudent(classYear){

  }
}
