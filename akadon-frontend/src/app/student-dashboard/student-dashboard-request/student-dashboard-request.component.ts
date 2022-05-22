import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-student-dashboard-request',
  templateUrl: './student-dashboard-request.component.html',
  styleUrls: ['./student-dashboard-request.component.css'],
})
export class StudentDashboardRequestComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
}
