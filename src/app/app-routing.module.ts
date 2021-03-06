import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentComponent } from './components/dashboard/student/student.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { AddSComponent } from './components/dashboard/student/add-s/add-s.component';
import { AttendanceComponent } from './components/dashboard/attendance/attendance.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ResultsComponent } from './components/homepage/results/results.component';
import { NoticeComponent } from './components/dashboard/notice/notice.component';
import { PublishNComponent } from './components/dashboard/notice/publish-n/publish-n.component';
import { ViewNComponent } from './components/dashboard/notice/view-n/view-n.component';
import { UpdateUnenrollComponent } from './components/dashboard/student/update-unenroll/update-unenroll.component';
import { TeacherComponent } from './components/dashboard/teacher/teacher.component';
import { AddTComponent } from './components/dashboard/teacher/add-t/add-t.component';
import { ManageTComponent } from './components/dashboard/teacher/manage-t/manage-t.component';
import { SubjectComponent } from './components/dashboard/subject/subject.component';
import { AddsubComponent } from './components/dashboard/subject/addsub/addsub.component';
import { EditsubComponent } from './components/dashboard/subject/editsub/editsub.component';
import { UpdatesubComponent } from './components/dashboard/subject/updatesub/updatesub.component';
import { ClassesComponent } from './components/dashboard/classes/classes.component';
import { AddcComponent } from './components/dashboard/classes/addc/addc.component';
import { ViewcComponent } from './components/dashboard/classes/viewc/viewc.component';
import { EditcComponent } from './components/dashboard/classes/editc/editc.component';
import { SignupComponent } from './components/signup/signup.component';
import { NoticeboardComponent } from './components/homepage/noticeboard/noticeboard.component';
import { TeachersComponent } from './components/dashboard/attendance/teachers/teachers.component';
import { CreateAComponent } from './components/dashboard/attendance/teachers/create-a/create-a.component';
import { ViewAComponent } from './components/dashboard/attendance/teachers/view-a/view-a.component';
import { UpdateAComponent } from './components/dashboard/attendance/teachers/update-a/update-a.component';
import { FeesComponent } from './components/dashboard/fees/fees.component';
import { AddfeesComponent } from './components/dashboard/fees/addfees/addfees.component';
import { UpdatefeesComponent } from './components/dashboard/fees/updatefees/updatefees.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { ViewUsersComponent } from './components/dashboard/users/view-users/view-users.component';
import { HomeComponent } from './components/homepage/home/home.component';
import { ViewStudentComponent } from "./components/dashboard/student/update-unenroll/view-student/view-student.component";
import { StudentArchiveComponent } from './components/dashboard/student/student-archive/student-archive.component';
import { ClasseshomeComponent } from './components/homepage/classes/classes.component';
import { SubjecthomeComponent } from './components/homepage/subject/subject.component';
import { StudentfeesComponent } from './components/homepage/studentfees/studentfees.component';
import { DeletedListComponent } from './components/dashboard/teacher/deleted-list/deleted-list.component';
import { ProfitComponent } from './components/dashboard/fees/profit/profit.component';
import { ViewTComponent } from './components/dashboard/teacher/view-t/view-t.component';
import { Report1Component } from './components/dashboard/teacher/report1/report1.component';
import { PrintNComponent } from './components/dashboard/notice/print-n/print-n.component';
import { SummaryAComponent } from './components/dashboard/attendance/teachers/summary-a/summary-a.component';
import { UserreportComponent } from './components/dashboard/users/userreport/userreport.component';
import { HometeacherComponent } from './components/hometeacher/hometeacher.component';
import { TclassesComponent } from './components/hometeacher/tclasses/tclasses.component';
import { ThomeComponent } from './components/hometeacher/thome/thome.component';
import { TnoticeboardComponent } from './components/hometeacher/tnoticeboard/tnoticeboard.component';
import { TresultsComponent } from './components/hometeacher/tresults/tresults.component';
import { TsubjectComponent } from './components/hometeacher/tsubject/tsubject.component';
import { AddResultComponent } from './components/hometeacher/tresults/add-result/add-result.component';
import { ChartcComponent } from './components/dashboard/classes/chartc/chartc.component';
 
const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "overview" },
      { path: "overview", component: OverviewComponent },
      {
        path: "student",
        component: StudentComponent,
        children: [
          { path: "", pathMatch: "full", redirectTo: "update" },
          { path: "add", component: AddSComponent },
          { path: "update", component: UpdateUnenrollComponent },
          { path: "view", component: ViewStudentComponent },
          { path: "archive", component: StudentArchiveComponent },
        ],
      },
      {
        path: "attendance",
        component: AttendanceComponent,
        children: [
          {
            path: "teachers",
            component: TeachersComponent,
            children: [
              { path: "create", component: CreateAComponent },
              {
                path: "view",
                component: ViewAComponent,
                children: [{ path: "update", component: UpdateAComponent }],
              },
              {
                path: "summary",
                component: SummaryAComponent,
              }
            ],
          },
        ],
      },
      {
        path: "fees",
        component: FeesComponent,
        children: [
          { path: "addfees", component: AddfeesComponent },
          { path: "updatefees1", component: UpdatefeesComponent },
          { path: "profit", component: ProfitComponent }
        ],
      },
      {
        path: "notice",
        component: NoticeComponent,
        children: [
          { path: 'publish', component: PublishNComponent},
          { path: 'view', component: ViewNComponent},
          { path: 'print', component: PrintNComponent}
        ]},

      { 
        path: 'teacher',
        component: TeacherComponent,
        children: [
          { path: 'add', component: AddTComponent},
          { path: 'manage', component: ManageTComponent},
          { path: 'history', component: DeletedListComponent},
          { path: 'view', component: ViewTComponent},
          { path: 'report1', component: Report1Component},
        ]},
        { path: 'subject',

        component: SubjectComponent,
        children: [
          { path: "addsub", component: AddsubComponent },
          { path: "updatesub", component: UpdatesubComponent },
          { path: "editsub", component: EditsubComponent },
        ],
      },
      {
        path: "classes",
        component: ClassesComponent,
        children: [
          { path: 'addc', component: AddcComponent },
          { path: 'viewc', component: ViewcComponent },
          { path: 'editc', component: EditcComponent },
          { path: 'chartc', component: ChartcComponent }
        ]
      },
      {
        path: 'cl',
        component: UsersComponent,
        children: [
          { path: 'viewu', component: ViewUsersComponent },
          { path: 'userreport', component: UserreportComponent }
        ]
      }
    ]
  },


  { 
    path: 'homepage', 
    component: HomepageComponent,
    children:[
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'noticeboard', component: NoticeboardComponent },
      { path: 'results',  component: ResultsComponent },
      { path: 'classes', component: ClasseshomeComponent },
      { path: 'subject', component: SubjecthomeComponent },
      { path: 'studentfees', component: StudentfeesComponent }
    ]
  },

  {
    path: 'hometeacher',
    component: HometeacherComponent,
    children:[
      { path: '', pathMatch: 'full', redirectTo: 'thome' },
      { path: 'thome', component:ThomeComponent },
      { path: 'tnoticeboard', component:TnoticeboardComponent },
      { path: 'tresult', component:TresultsComponent },
      { path: 'taddresult', component:AddResultComponent},
      { path: 'tclasses', component:TclassesComponent },
      { path: 'tsubject', component:TsubjectComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
