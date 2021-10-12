import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faculty } from 'src/app/model/faculty';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  facultyUrl: string

  constructor(private http: HttpClient) { 
    this.facultyUrl = 'http://54.146.205.172:2020/faculty'
  }

  public addFaculty(faculty: Faculty): Observable<Faculty> {
    return this.http.post<Faculty>(this.facultyUrl, faculty)
  }

  public updateFaculty(faculty: Faculty): Observable<Faculty>  {
    return this.http.put<Faculty>(this.facultyUrl, faculty)
  }

  public getAllFaculties(): Observable<Faculty[]> {
    return this.http.get<Faculty[]>('http://54.146.205.172:2020/faculties');
  }

  public deleteFaculty(facultyId: number) {
    return this.http.delete(this.facultyUrl+'/'+facultyId)
  }

  public getFacultyByFacultyId(faculty: number): Observable<Faculty> {
    return this.http.get<Faculty>(this.facultyUrl+'/'+faculty)
  }

  public getFacultyByFacultyUsernameAndAndFacultyPassword(facultyUsername: string, facultyPassword: string): Observable<Faculty> {
    return this.http.get<Faculty>(this.facultyUrl+'/'+facultyUsername+'/'+facultyPassword)
  }

}
