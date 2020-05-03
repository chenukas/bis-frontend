import { TeacherService } from 'src/app/services/teacher.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/dashboard/student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { AddSComponent } from './components/dashboard/student/add-s/add-s.component';
import { MatDatepickerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AttendanceComponent } from './components/dashboard/attendance/attendance.component';
import { FeesComponent } from './components/dashboard/fees/fees.component';
import { AddfeesComponent } from './components/dashboard/fees/addfees/addfees.component';
import { UpdatefeesComponent } from './components/dashboard/fees/updatefees/updatefees.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NoticeComponent } from './components/dashboard/notice/notice.component';
import { PublishNComponent } from './components/dashboard/notice/publish-n/publish-n.component';
import { ViewNComponent } from './components/dashboard/notice/view-n/view-n.component';
import { UpdateUnenrollComponent, DialogBox } from './components/dashboard/student/update-unenroll/update-unenroll.component';
import { TeacherComponent } from './components/dashboard/teacher/teacher.component';
import { AddTComponent } from './components/dashboard/teacher/add-t/add-t.component';
import { ManageTComponent } from './components/dashboard/teacher/manage-t/manage-t.component';
import { StudentfeesComponent } from './components/homepage/studentfees/studentfees.component';
import { SubjectComponent } from './components/dashboard/subject/subject.component';
import { AddsubComponent } from './components/dashboard/subject/addsub/addsub.component';
import { UpdatesubComponent } from './components/dashboard/subject/updatesub/updatesub.component';
import { SubjectServices } from './services/subject.service';
import { ResultsService } from './services/addResults.service';


import { NoticeService } from './services/notice.service';
import { StudentService } from './services/student.service';
import { ClassServices } from './services/classes.service';
import { AddcComponent } from './components/dashboard/classes/addc/addc.component';
import { ViewcComponent } from './components/dashboard/classes/viewc/viewc.component';
import { ClassesComponent } from './components/dashboard/classes/classes.component';
import { SignupComponent } from './components/signup/signup.component';
import { EditsubComponent } from './components/dashboard/subject/editsub/editsub.component';
import { EditcComponent } from './components/dashboard/classes/editc/editc.component';
import { NoticeboardComponent } from './components/homepage/noticeboard/noticeboard.component';
import { TeachersComponent } from './components/dashboard/attendance/teachers/teachers.component';
import { CreateAComponent } from './components/dashboard/attendance/teachers/create-a/create-a.component';
import { ViewAComponent } from './components/dashboard/attendance/teachers/view-a/view-a.component';
import { UpdateAComponent } from './components/dashboard/attendance/teachers/update-a/update-a.component';
import { ResultsComponent } from './components/homepage/results/results.component';
import { AddResultsComponent } from './components/homepage/results/add-results/add-results.component';
import { StudentResComponent } from './components/homepage/results/student-res/student-res.component';
import { StudentArchiveComponent } from './components/dashboard/student/student-archive/student-archive.component';
import { AttendanceService } from './services/attendance.service';
import { DatePipe } from '@angular/common';
import { HomeComponent } from './components/homepage/home/home.component';


@NgModule({
  entryComponents: [
    UpdateUnenrollComponent, 
    DialogBox
  ],
  
  declarations: [
    AppComponent,
    StudentComponent,
    DashboardComponent,
    LoginComponent,
    OverviewComponent,
    AddSComponent,
    UpdateUnenrollComponent,
    DialogBox,
    StudentArchiveComponent,
    AttendanceComponent,
    FeesComponent,
    AddfeesComponent,
    UpdatefeesComponent,
    HomepageComponent,
    NoticeComponent,
    PublishNComponent,
    ViewNComponent,
    TeacherComponent,
    AddTComponent,
    ManageTComponent,
    StudentfeesComponent,
    SubjectComponent,
    AddsubComponent,
    UpdatesubComponent,
    AddcComponent,
    ViewcComponent,
    ClassesComponent,
    SignupComponent,
    EditsubComponent,
    EditcComponent,
    NoticeboardComponent,
    TeachersComponent,
    CreateAComponent,
    ViewAComponent,
    UpdateAComponent,
    ResultsComponent,
    AddResultsComponent,
    StudentResComponent,
    HomeComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ChartsModule


    ],
  providers: [
    DatePipe,
    MatDatepickerModule,
    AttendanceService,
    NoticeService,
    SubjectServices,
    StudentService,
    ClassServices,
    TeacherService,
    ResultsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
