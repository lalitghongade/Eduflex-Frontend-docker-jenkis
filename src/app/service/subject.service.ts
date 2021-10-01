import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'src/app/model/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  subjectUrl:string

  constructor(private http: HttpClient) {
    this.subjectUrl = 'http://localhost:2020/subject'
   }

  public addSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(this.subjectUrl, subject)
  }

  public updateSubject(subject: Subject): Observable<Subject> {
    return this.http.put<Subject>(this.subjectUrl, subject)
  }

  public getAllSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.subjectUrl+'s');
  }

  public deleteSubject(subjectId: number) {
    return this.http.delete(this.subjectUrl+'/'+subjectId)
  }

  public getSubjectBySubjectId(subject: number): Observable<Subject> {
    return this.http.get<Subject>(this.subjectUrl+'/'+subject)
  }

  public addSubjectToFaculty(subjectId: number, facultyId: number): Observable<Subject> {
    return this.http.put<Subject>(this.subjectUrl+'/'+subjectId+'/faculty/'+facultyId, subjectId);
  }
}
