import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentFeedback } from '../model/student-feedback';

@Injectable({
  providedIn: 'root'
})
export class StudentFeedbackService {

  studentFeedbackUrl: string

  constructor(private http: HttpClient) { 
    this.studentFeedbackUrl = 'http://54.146.205.172:2020/student'
  }
  
  public addStudentFeedbackToStudent(studentId: number, studentFeedback: StudentFeedback): Observable<StudentFeedback> {
    return this.http.put<StudentFeedback>(this.studentFeedbackUrl+'/'+studentId+'/studentFeedback', studentFeedback)
  }
 
  public getStudentFeedbackByStudentFeedbackId(studentFeedbackId: number): Observable<StudentFeedback> {
    return this.http.get<StudentFeedback>(this.studentFeedbackUrl+'/studentFeedback/'+studentFeedbackId)
  }

  public getStudentFeedbacksByStudentId(studentId: number): Observable<StudentFeedback[]> {
    return this.http.get<StudentFeedback[]>(this.studentFeedbackUrl+'/'+studentId+'/studentFeedbacks')
  }

  public getAllStudentFeedbacks(): Observable<StudentFeedback[]> {
    return this.http.get<StudentFeedback[]>('http://54.146.205.172:2020/studentFeedbacks')
  }
  

  public  deleteStudentFeedbackByStudentFeedbackId(studentFeedbackId: number) {
    return this.http.delete<StudentFeedback>(this.studentFeedbackUrl+'/studentFeedback/'+studentFeedbackId)
  }

}
