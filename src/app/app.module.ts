import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddFacultyComponent } from './faculty/add-faculty/add-faculty.component';
import { HodDashboardComponent } from './hod-dashboard/hod-dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HodSidebarComponent } from './hod-sidebar/hod-sidebar.component';
import { LoginComponent } from './login/login.component';
import { ManageFacultyComponent } from './faculty/manage-faculty/manage-faculty.component';
import { UpdateFacultyComponent } from './faculty/update-faculty/update-faculty.component';
import { FacultyFeedbackComponent } from './faculty/faculty-feedback/faculty-feedback.component';
import { FacultyLeaveComponent } from './faculty/faculty-leave/faculty-leave.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { StudentFeedbackComponent } from './student/student-feedback/student-feedback.component';
import { StudentLeaveComponent } from './student/student-leave/student-leave.component';
import { ManageStudentComponent } from './student/manage-student/manage-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { AttendanceComponent } from './student/attendance/attendance.component';
import { ManageCourseComponent } from './curriculum/manage-course/manage-course.component';
import { AddCourseComponent } from './curriculum/add-course/add-course.component';
import { ManageSubjectComponent } from './curriculum/manage-subject/manage-subject.component';
import { AddSubjectComponent } from './curriculum/add-subject/add-subject.component';
import { ManageClassYearComponent } from './curriculum/manage-class-year/manage-class-year.component';
import { AddClassYearComponent } from './curriculum/add-class-year/add-class-year.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student/student.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseService } from './service/course.service';
import { FacultyService } from './service/faculty.service';
import { SubjectService } from './service/subject.service';
import { FacultySidebarComponent } from './faculty-sidebar/faculty-sidebar.component';
import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';
import { TakeAttendanceComponent } from './take-attendance/take-attendance.component';
import { FacultyFeedbackService } from './service/faculty-feedback.service';
import { HomeComponent } from './home/home.component';
import { SubHomeComponent } from './sub-home/sub-home.component';
import { ErrorComponent } from './error/error.component';
import { AddFacultyFeedbackComponent } from './add-faculty-feedback/add-faculty-feedback.component';
import { AddStudentFeedbackComponent } from './add-student-feedback/add-student-feedback.component';
import { ApplyFacultyLeaveComponent } from './apply-faculty-leave/apply-faculty-leave.component';
import { ApplyStudentLeaveComponent } from './apply-student-leave/apply-student-leave.component';
import { StudentSidebarComponent } from './student-sidebar/student-sidebar.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AddResultComponent } from './add-result/add-result.component';
import { ViewResultComponent } from './view-result/view-result.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFacultyComponent,
    HodDashboardComponent,
    FooterComponent,
    HeaderComponent,
    HodSidebarComponent,
    LoginComponent,
    ManageFacultyComponent,
    UpdateFacultyComponent,
    FacultyFeedbackComponent,
    FacultyLeaveComponent,
    AddStudentComponent,
    StudentFeedbackComponent,
    StudentLeaveComponent,
    ManageStudentComponent,
    UpdateStudentComponent,
    AttendanceComponent,
    ManageCourseComponent,
    AddCourseComponent,
    ManageSubjectComponent,
    AddSubjectComponent,
    ManageClassYearComponent,
    AddClassYearComponent,
    FacultySidebarComponent,
    FacultyDashboardComponent,
    TakeAttendanceComponent,
    HomeComponent,
    SubHomeComponent,
    ErrorComponent,
    AddFacultyFeedbackComponent,
    AddStudentFeedbackComponent,
    ApplyFacultyLeaveComponent,
    ApplyStudentLeaveComponent,
    StudentSidebarComponent,
    StudentDashboardComponent,
    AddResultComponent,
    ViewResultComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [StudentService, CourseService, FacultyService, SubjectService, FacultyFeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
