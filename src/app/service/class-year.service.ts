import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassYear } from '../model/class-year';

@Injectable({
  providedIn: 'root'
})
export class ClassYearService {

  classYearUrl: string

  constructor(private http: HttpClient) { 
    this.classYearUrl = 'http://localhost:2020/classYear'
  }

  public addClassYear(classYear: ClassYear): Observable<ClassYear> {
    return this.http.post<ClassYear>(this.classYearUrl, classYear)
  }

  public getAllClassYears(): Observable<ClassYear[]> {
    return this.http.get<ClassYear[]>(this.classYearUrl+'s');
  }

  public deleteClassYear(classYearId: number) {
    return this.http.delete(this.classYearUrl+'/'+classYearId)
  }

  public getClassYearByClassYearId(classYear: number): Observable<ClassYear> {
    return this.http.get<ClassYear>(this.classYearUrl+'/'+classYear)
  }
}
