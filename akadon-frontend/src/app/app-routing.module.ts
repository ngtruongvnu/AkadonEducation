import { AdminDashboardStudentRequestComponent } from './admin-dashboard/admin-dashboard-student-request/admin-dashboard-student-request.component';
import { AdminDashboardPayForTutorComponent } from './admin-dashboard/admin-dashboard-pay-for-tutor/admin-dashboard-pay-for-tutor.component';
import { AdminDashboardFinanceComponent } from './admin-dashboard/admin-dashboard-finance/admin-dashboard-finance.component';
import { AdminDashboardLevelManageComponent } from './admin-dashboard/admin-dashboard-level-manage/admin-dashboard-level-manage.component';
import { AdminDashboardSubjectManageComponent } from './admin-dashboard/admin-dashboard-subject-manage/admin-dashboard-subject-manage.component';
import { AdminDashboardStudentAccountComponent } from './admin-dashboard/admin-dashboard-student-account/admin-dashboard-student-account.component';
import { AdminDashboardTutorAccountComponent } from './admin-dashboard/admin-dashboard-tutor-account/admin-dashboard-tutor-account.component';
import { AdminDashboardHomeComponent } from './admin-dashboard/admin-dashboard-home/admin-dashboard-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TutorRequestDetailComponent } from './student-dashboard/student-dashboard-request/tutor-request-detail/tutor-request-detail.component';
import { StudentRequestDetailComponent } from './tutor-dashboard/student-request-detail/student-request-detail.component';
import { TutorChatAreaComponent } from './tutor-dashboard/tutor-dashboard-system-message/tutor-chat-area/tutor-chat-area.component';
import { TutorDashboardSystemMessageComponent } from './tutor-dashboard/tutor-dashboard-system-message/tutor-dashboard-system-message.component';
import { TutorDashboardNotetipComponent } from './tutor-dashboard/tutor-dashboard-notetip/tutor-dashboard-notetip.component';
import { TutorDashboardNewsComponent } from './tutor-dashboard/tutor-dashboard-news/tutor-dashboard-news.component';
import { TutorDashboardFinancePaymentComponent } from './tutor-dashboard/tutor-dashboard-finance-payment/tutor-dashboard-finance-payment.component';
import { TutorDashboardFinanceBankingComponent } from './tutor-dashboard/tutor-dashboard-finance-banking/tutor-dashboard-finance-banking.component';
import { TutorDashboardFinanceRevenueComponent } from './tutor-dashboard/tutor-dashboard-finance-revenue/tutor-dashboard-finance-revenue.component';
import { TutorDashboardFinanceComponent } from './tutor-dashboard/tutor-dashboard-finance/tutor-dashboard-finance.component';
import { TutorDashboardCalendarComponent } from './tutor-dashboard/tutor-dashboard-calendar/tutor-dashboard-calendar.component';
import { TutorDashboardCourseComponent } from './tutor-dashboard/tutor-dashboard-course/tutor-dashboard-course.component';
import { TutorDashboardRequestReceiveComponent } from './tutor-dashboard/tutor-dashboard-request/tutor-dashboard-request-receive/tutor-dashboard-request-receive.component';
import { TutorDashboardRequestSendComponent } from './tutor-dashboard/tutor-dashboard-request/tutor-dashboard-request-send/tutor-dashboard-request-send.component';
import { TutorDashboardRequestComponent } from './tutor-dashboard/tutor-dashboard-request/tutor-dashboard-request.component';
import { TutorDashboardRequestListComponent } from './tutor-dashboard/tutor-dashboard-request-list/tutor-dashboard-request-list.component';
import { TutorDashboardProfileComponent } from './tutor-dashboard/tutor-dashboard-profile/tutor-dashboard-profile.component';
import { TutorDashboardHomeComponent } from './tutor-dashboard/tutor-dashboard-home/tutor-dashboard-home.component';
import { TutorDashboardComponent } from './tutor-dashboard/tutor-dashboard.component';
import { StudentDashboardSystemMessageComponent } from './student-dashboard/student-dashboard-system-message/student-dashboard-system-message.component';
import { StudentDashboardNotetipComponent } from './student-dashboard/student-dashboard-notetip/student-dashboard-notetip.component';
import { StudentDashboardNewComponent } from './student-dashboard/student-dashboard-new/student-dashboard-new.component';
import { StudentDashboardFinancePaymentComponent } from './student-dashboard/student-dashboard-finance-payment/student-dashboard-finance-payment.component';
import { StudentDashboardFinanceBankingComponent } from './student-dashboard/student-dashboard-finance-banking/student-dashboard-finance-banking.component';
import { StudentDashboardFinanceRevenueComponent } from './student-dashboard/student-dashboard-finance-revenue/student-dashboard-finance-revenue.component';
import { StudentDashboardFinanceComponent } from './student-dashboard/student-dashboard-finance/student-dashboard-finance.component';
import { StudentDashboardCalendarComponent } from './student-dashboard/student-dashboard-calendar/student-dashboard-calendar.component';
import { StudentDashboardCourseComponent } from './student-dashboard/student-dashboard-course/student-dashboard-course.component';
import { StudentDashboardRequestFormComponent } from './student-dashboard/student-dashboard-request/student-dashboard-request-form/student-dashboard-request-form.component';
import { StudentDashboardReceiveComponent } from './student-dashboard/student-dashboard-request/student-dashboard-receive/student-dashboard-receive.component';
import { StudentDashboardSendComponent } from './student-dashboard/student-dashboard-request/student-dashboard-send/student-dashboard-send.component';
import { StudentDashboardRequestComponent } from './student-dashboard/student-dashboard-request/student-dashboard-request.component';
import { StudentDashboardProfileComponent } from './student-dashboard/student-dashboard-profile/student-dashboard-profile.component';
import { StudentDashboardHomeComponent } from './student-dashboard/student-dashboard-home/student-dashboard-home.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { TutorDetailComponent } from './pages/tutor-detail/tutor-detail.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { TutorComponent } from './pages/tutor/tutor.component';
import { StudentComponent } from './pages/student/student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginHomeComponent } from './pages/login/login-home/login-home.component';
import { LoginTutorComponent } from './pages/login/login-tutor/login-tutor.component';
import { LoginStudentComponent } from './pages/login/login-student/login-student.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterHomeComponent } from './pages/register/register-home/register-home.component';
import { RegisterStudentComponent } from './pages/register/register-student/register-student.component';
import { RegisterTutorComponent } from './pages/register/register-tutor/register-tutor.component';
import { AdminDashboardCourseManageComponent } from './admin-dashboard/admin-dashboard-course-manage/admin-dashboard-course-manage.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'student', component: StudentComponent
  },
  {
    path: 'student-detail/:id', component: StudentDetailComponent
  },
  {
    path: 'dashboard-student', component: StudentDashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: StudentDashboardHomeComponent},
      { path: 'profile', component: StudentDashboardProfileComponent},
      {
        path: 'request', 
        component: StudentDashboardRequestComponent,
        children: [
          { path: '', component: StudentDashboardSendComponent},
          { path: 'send', component: StudentDashboardSendComponent},
          { path: 'receive', component: StudentDashboardReceiveComponent},
          { path: 'tutor-request-detail:/id', component: TutorRequestDetailComponent }
        ]
      },
      {
        path: 'request-form', component: StudentDashboardRequestFormComponent
      },
      { path: 'course', component: StudentDashboardCourseComponent },
      {
        path: 'calendar', component: StudentDashboardCalendarComponent,
      },
      { 
        path: 'finance',
        component: StudentDashboardFinanceComponent,
        children: [
          { path: 'revenue', component: StudentDashboardFinanceRevenueComponent },
          { path: 'banking', component: StudentDashboardFinanceBankingComponent},
          { path: 'payment', component: StudentDashboardFinancePaymentComponent}
        ]
      },
      {
        path: 'transaction-history', component: StudentDashboardFinanceRevenueComponent
      },
      {
        path: 'news', component: StudentDashboardNewComponent
      },
      {
        path: 'notetip', component: StudentDashboardNotetipComponent
      },
      {
        path: 'system-messages', component: StudentDashboardSystemMessageComponent
      }
    ]
  },
  {
    path: 'tutor', component: TutorComponent
  },
  {
    path: 'tutor-detail/:id', component: TutorDetailComponent
  },
  {
    path: 'dashboard-tutor',
    component: TutorDashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: TutorDashboardHomeComponent },
      { path: 'profile', component: TutorDashboardProfileComponent },
      { path: 'request-list', component: TutorDashboardRequestListComponent },
      {
        path: 'request',
        component: TutorDashboardRequestComponent,
        children: [
          { path: '', component: TutorDashboardRequestSendComponent },
          { path: 'send', component: TutorDashboardRequestSendComponent },
          { path: 'receive', component: TutorDashboardRequestReceiveComponent }
        ]
      },
      {
        path: 'course', component: TutorDashboardCourseComponent
      },
      {
        path: 'calendar', component: TutorDashboardCalendarComponent
      },
      {
        path: 'finance', component: TutorDashboardFinanceComponent,
        children: [
          { path: 'revenue', component: TutorDashboardFinanceRevenueComponent },
          { path: 'banking', component: TutorDashboardFinanceBankingComponent },
          { path: 'payment', component: TutorDashboardFinancePaymentComponent }
        ]
      },
      {
        path: 'news', component: TutorDashboardNewsComponent
      },
      {
        path: 'notetip', component: TutorDashboardNotetipComponent
      },
      {
        path: 'system-messages', component: TutorDashboardSystemMessageComponent
      },
      {
        path: 'messages', component: TutorChatAreaComponent
      },
      {
        path: 'student-request-detail/:id', component: StudentRequestDetailComponent
      }
    ]
  },
  {
    path: 'admin', component: LoginAdminComponent
  },
  {
    path: 'dashboard-admin', 
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: AdminDashboardHomeComponent },
      { path: 'course', component: AdminDashboardCourseManageComponent },
      { path: 'tutor-account', component: AdminDashboardTutorAccountComponent },
      { path: 'student-account', component: AdminDashboardStudentAccountComponent },
      { path: 'subject', component: AdminDashboardSubjectManageComponent },
      { path: 'level', component: AdminDashboardLevelManageComponent },
      { path: 'doanh-thu', component: AdminDashboardFinanceComponent },
      { path: 'pay-for-tutor', component: AdminDashboardPayForTutorComponent },
      { path: 'student-request', component: AdminDashboardStudentRequestComponent },
    ]
  },
  {
    path: 'user/login', component: LoginComponent,
    children: [
      {
        path: '', component: LoginHomeComponent
      },
      {
        path: 'login-student', component: LoginStudentComponent
      },
      {
        path: 'login-tutor', component: LoginTutorComponent
      }
    ]
  },
  {
    path: 'user/register', component: RegisterComponent,
    children: [
      {
        path: '', component: RegisterHomeComponent
      },
      {
        path: 'register-student', component: RegisterStudentComponent
      },
      {
        path: 'register-tutor', component: RegisterTutorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
