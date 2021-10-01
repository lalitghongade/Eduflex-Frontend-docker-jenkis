import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/model/subject';
import { SubjectService } from 'src/app/service/subject.service';


@Component({
  selector: 'app-manage-subject',
  templateUrl: './manage-subject.component.html',
  styleUrls: ['./manage-subject.component.css']
})
export class ManageSubjectComponent implements OnInit {
  subjectList: Subject[];

  constructor(private subjectService: SubjectService, private route: Router) { }

  ngOnInit() {
    this.subjectService.getAllSubjects().subscribe(async res => {
      this.subjectList = res;
    });
  }

  deleteSubject(subject: { subjectId: number; }) {
    this.subjectService.deleteSubject(subject.subjectId).subscribe(res => {
      console.log(res)
      this.ngOnInit();
    });
  }

}
