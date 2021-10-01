import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentUrl:string;

  constructor(private http: HttpClient) { 
    this.studentUrl = 'http://localhost:2020/student'
  }

  public addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentUrl, student);
  }

  public getStudentByStudentId(studentId: number): Observable<Student> {
    return this.http.get<Student>(this.studentUrl+'/'+studentId);
  }

  public updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(this.studentUrl, student);
  }

  public deleteStudent(studentId: number) {
    return this.http.delete(this.studentUrl+'/'+studentId);
  }

  public getAllStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.studentUrl+'s');
  }

  public addCourseToStudent(studentId: number, courseId: number): Observable<Student> {
    return this.http.put<Student>(this.studentUrl+'/'+studentId+'/course/'+courseId, studentId);
  }

  public getStudentByStudentUsernameAndStudentPassword(studentUsername: string, studentPassword: string): Observable<Student> {
      return this.http.get<Student>(this.studentUrl+'/'+studentUsername+'/'+studentPassword)
  }
}
