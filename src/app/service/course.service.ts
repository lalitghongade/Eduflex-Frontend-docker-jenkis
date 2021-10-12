import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseAPI: string;

  constructor(private http: HttpClient) { 
    this.courseAPI = 'http://54.146.205.172:2020/course';
  }

  public addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.courseAPI, course);
  } 

  public getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.courseAPI+'s');
  }

  public getCourseByCourseId(courseId: number) {
    return this.http.get<Course>(this.courseAPI+'/'+courseId);
  }
}
