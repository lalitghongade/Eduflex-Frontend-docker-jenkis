import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClassYear } from 'src/app/model/class-year';
import { ClassYearService } from 'src/app/service/class-year.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-class-year',
  templateUrl: './add-class-year.component.html',
  styleUrls: ['./add-class-year.component.css']
})
export class AddClassYearComponent {
  classYear: ClassYear;
  addClassYearForm: FormGroup;


  constructor(private classYearService: ClassYearService, private route: Router) { 
    this.classYear = new ClassYear();
    this.addClassYearForm = new FormGroup({
      'classYearStartDate' : new FormControl(null, Validators.required),
      'classYearEndDate' : new FormControl(null, Validators.required)
    })
  }


  public addClassYear() {
    this.classYear.classYearStartDate = this.addClassYearForm.value.classYearStartDate;
    this.classYear.classYearEndDate = this.addClassYearForm.value.classYearEndDate;

    this.classYearService.addClassYear(this.classYear).subscribe(res => {
      console.log(res);
    });
    this.route.navigate(['/manage-classYear']);
  }

}
