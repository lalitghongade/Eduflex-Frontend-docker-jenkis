import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FacultyFeedback } from '../model/faculty-feedback';

@Injectable({
  providedIn: 'root'
})
export class FacultyFeedbackService {

  facultyFeedbackUrl: string

  constructor(private http: HttpClient) { 
    this.facultyFeedbackUrl = 'http://localhost:2020/faculty'
  }
  
  public addFacultyFeedbackToFaculty(facultyId: number, facultyFeedback: FacultyFeedback): Observable<FacultyFeedback> {
    return this.http.put<FacultyFeedback>(this.facultyFeedbackUrl+'/'+facultyId+'/facultyFeedback', facultyFeedback)
  }
 
  public getFacultyFeedbackByFacultyFeedbackId(facultyFeedbackId: number): Observable<FacultyFeedback> {
    return this.http.get<FacultyFeedback>(this.facultyFeedbackUrl+'/facultyFeedback/'+facultyFeedbackId)
  }

  public getFacultyFeedbacksByFacultyId(facultyId: number): Observable<FacultyFeedback[]> {
    return this.http.get<FacultyFeedback[]>(this.facultyFeedbackUrl+'/'+facultyId+'/facultyFeedbacks')
  }

  public getAllFacultyFeedbacks(): Observable<FacultyFeedback[]> {
    return this.http.get<FacultyFeedback[]>('http://localhost:2020/facultyFeedbacks')
  }

  public  deleteFacultyFeedbackByFacultyFeedbackId(facultyFeedbackId: number) {
    return this.http.delete<FacultyFeedback>(this.facultyFeedbackUrl+'/facultyFeedback/'+facultyFeedbackId)
  }

}
