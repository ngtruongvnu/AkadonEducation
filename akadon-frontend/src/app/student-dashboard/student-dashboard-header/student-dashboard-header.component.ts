import { Component, OnInit } from '@angular/core';

import { Notifications } from 'src/app/models/notifications.model';
import { Tutor } from 'src/app/models/tutor.model';

import { NotificationService } from 'src/app/services/notification.service';
import { TutorService } from 'src/app/services/tutor.service';

declare var $: any;

@Component({
  selector: 'app-student-dashboard-header',
  templateUrl: './student-dashboard-header.component.html',
  styleUrls: ['./student-dashboard-header.component.css'],
})
export class StudentDashboardHeaderComponent implements OnInit {

  constructor(
    private notificationService: NotificationService,
    private tutorService: TutorService
  ) {}

  today: Date = new Date();
  day: any;
  date: any;
  month: any;
  year: any;
  notificationList: Notifications[] = [];
  public loginUser = JSON.parse(sessionStorage.getItem('loginUser') as string);
  isLoading: boolean = false;
  maxLength: number = 0;
  unseenLength: number = 0;
  id: any;
  length: number = 5;

  ngOnInit(): void {
    $('[data-toggle="tooltip"]').tooltip();
    this.date = this.today.getDate();
    this.month = this.today.getMonth() + 1;
    this.year = this.today.getFullYear();
    switch (this.today.getDay()) {
      case 0:
        this.day = 'Chủ Nhật';
        break;
      case 1:
        this.day = 'Thứ Hai';
        break;
      case 2:
        this.day = 'Thứ Ba';
        break;
      case 3:
        this.day = 'Thứ Tư';
        break;
      case 4:
        this.day = 'Thứ Năm';
        break;
      case 5:
        this.day = 'Thứ Sáu';
        break;
      case 6:
        this.day = 'Thứ Bảy';
        break;
    }
    if (this.date < 10) {
      this.date = '0' + this.date;
    }
    if (this.month < 10) {
      this.month = '0' + this.month;
    }
    this.notificationService
      .countUnseenNotifications(this.loginUser.email as string)
      .subscribe((res) => {
        this.unseenLength = res;
      });
    this.notificationService
      .countNotifications(this.loginUser.email as string)
      .subscribe((res) => {
        this.maxLength = res;
      });
    this.notificationService
      .getByEmail(this.loginUser.email as string, 1, this.length)
      .subscribe((res) => {
        this.notificationList = res;
      });
    $('.fa-bell').click(function () {
      $('#notifications').toggle();
    });
    window.onload = function () {
      document.onclick = function (e: any) {
        if (e.target.id !== 'bell' && e.target.id !== 'notifications') {
          $('#notifications').hide();
        }
      };
    };
  }

  scrollEvent() {
    var currentHeight = $('#notifications').scrollTop();
    var maxHeight =
      $('#notifications').prop('scrollHeight') -
      $('#notifications').prop('offsetHeight');
    if (currentHeight === maxHeight && this.length < this.maxLength) {
      if (this.length + 5 < this.maxLength) {
        this.length += 5;
      } else {
        this.length = this.maxLength;
      }

      this.isLoading = true;
      setTimeout(() => {
        this.notificationService
          .getByEmail(this.loginUser.email as string, 1, this.length)
          .subscribe((res) => {
            this.notificationList = res;
          });
        this.isLoading = false;
      }, 800);
    }
    // if (currentHeight === maxHeight && this.length < this.maxLength) {
    //   if (this.length + 5 < this.maxLength) {
    //     this.length += 5;
    //   } else {
    //     this.length = this.maxLength;
    //   }
    //   this.isLoading = true;
    //   this.notificationService
    //     .getByEmail(this.loginUser.email as string, 1, this.length)
    //     .subscribe((res) => {
    //       this.isLoading = false;
    //       this.notificationList = res;
    //     });
    // }
  }

  viewNotification(notification: Notifications) {
    notification.seen = true;
    this.notificationService.viewNotification(notification).subscribe((res) => {
      this.notificationService
        .countUnseenNotifications(this.loginUser.email as string)
        .subscribe((res) => {
          this.unseenLength = res;
        });
      this.notificationService
        .countNotifications(this.loginUser.email as string)
        .subscribe((res) => {
          this.maxLength = res;
        });
      this.notificationService
        .getByEmail(this.loginUser.email as string, 1, this.length)
        .subscribe((res) => {
          this.notificationList = res;
        });
    });
  }
  
  viewAll() {
    this.notificationService
      .viewAll(this.loginUser.email as string)
      .subscribe((res) => {
        this.notificationService
          .countUnseenNotifications(this.loginUser.email as string)
          .subscribe((res) => {
            this.unseenLength = res;
          });
        this.notificationService
          .countNotifications(this.loginUser.email as string)
          .subscribe((res) => {
            this.maxLength = res;
          });
        this.notificationService
          .getByEmail(this.loginUser.email as string, 1, this.length)
          .subscribe((res) => {
            this.notificationList = res;
          });
      });
  }
}
