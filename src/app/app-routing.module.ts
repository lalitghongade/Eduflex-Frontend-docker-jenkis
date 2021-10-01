import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HodDashboardComponent } from './hod-dashboard/hod-dashboard.component';
import { AddFacultyComponent } from './faculty/add-faculty/add-faculty.component';
import { ManageFacultyComponent } from './faculty/manage-faculty/manage-faculty.component';
import { UpdateFacultyComponent } from './faculty/update-faculty/update-faculty.component';
import { FacultyFeedbackComponent } from './faculty/faculty-feedback/faculty-feedback.component';
import { FacultyLeaveComponent } from './faculty/faculty-leave/faculty-leave.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ManageStudentComponent } from './student/manage-student/manage-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { StudentFeedbackComponent } from './student/student-feedback/student-feedback.component';
import { StudentLeaveComponent } from './student/student-leave/student-leave.component';
import { AttendanceComponent } from './student/attendance/attendance.component';
import { AddClassYearComponent } from './curriculum/add-class-year/add-class-year.component';
import { ManageClassYearComponent } from './curriculum/manage-class-year/manage-class-year.component';
import { AddCourseComponent } from './curriculum/add-course/add-course.component';
import { ManageSubjectComponent } from './curriculum/manage-subject/manage-subject.component';
import { AddSubjectComponent } from './curriculum/add-subject/add-subject.component';
import { ManageCourseComponent } from './curriculum/manage-course/manage-course.component';
import { AppComponent } from './app.component';
import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SubHomeComponent } from './sub-home/sub-home.component';
import { ErrorComponent } from './error/error.component';
import { AddFacultyFeedbackComponent } from './add-faculty-feedback/add-faculty-feedback.component';
import { AddStudentFeedbackComponent } from './add-student-feedback/add-student-feedback.component';
import { ApplyFacultyLeaveComponent } from './apply-faculty-leave/apply-faculty-leave.component';
import { ApplyStudentLeaveComponent } from './apply-student-leave/apply-student-leave.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';


const routes: Routes = [  {
  path: 'login', component: LoginComponent
}, {
  path: 'home', component: HomeComponent, 

  children : [ {
    path: '', component: HodDashboardComponent
    }, {
      path: 'faculty-dashboard', component: FacultyDashboardComponent
    }, {
      path:'add-faculty', component: AddFacultyComponent
    }, {
      path: 'manage-faculty', component: ManageFacultyComponent
    }, {
      path: 'update-faculty', component: UpdateFacultyComponent
    }, {
      path: 'faculty-feedback', component: FacultyFeedbackComponent
    }, {
      path: 'faculty-leave', component: FacultyLeaveComponent
    }, {
      path:'add-student', component: AddStudentComponent
    }, {
      path: 'manage-student', component: ManageStudentComponent
    }, {
      path: 'update-student', component: UpdateStudentComponent
    }, {
      path: 'student-feedback', component: StudentFeedbackComponent
    }, {
      path: 'student-leave', component: StudentLeaveComponent
    }, {
      path: 'hod-dashboard', component: HodDashboardComponent
    }, {
      path: 'student-attendance', component: AttendanceComponent
    }, {
      path: 'add-class-year', component: AddClassYearComponent
    }, {
      path: 'manage-class-year', component: ManageClassYearComponent
    }, {
      path: 'add-course', component: AddCourseComponent
    }, {
      path: 'manage-subject', component: ManageSubjectComponent
    }, {
      path: 'add-subject', component: AddSubjectComponent
    }, {
      path: 'manage-course', component: ManageCourseComponent
    }, {
        path: 'error', component: ErrorComponent
    }, {
      path: 'add-faculty-feedback', component: AddFacultyFeedbackComponent
    }, {
      path: 'add-student-feedback', component: AddStudentFeedbackComponent
    }, {
      path: 'apply-faculty-leave', component: ApplyFacultyLeaveComponent
    }, {
      path : 'apply-student-leave', component: ApplyStudentLeaveComponent
    }, {
      path: 'student-dashboard', component: StudentDashboardComponent
    }
    
  ]
}, {
  path : '', redirectTo: 'home', pathMatch : 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
