import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-tutor-dashboard',
  templateUrl: './tutor-dashboard.component.html',
  styleUrls: ['./tutor-dashboard.component.css'],
})

export class TutorDashboardComponent implements OnInit {
  constructor() {}
  show: boolean = true;
  hideMenu() {
    $('.logo').attr('src', './assets/images/small-logo.svg');
    $('.logo').css('width', '120%');
    $('.fa-chevron-left').css('display', 'none');
    $('.fa-chevron-right').css('display', 'flex');
    $('.fa-chevron-right').css('top', '6rem');
    $('nav').css('width', '7rem');
    $('.menu-title').css('display', 'none');
    $('.main').css('width', 'calc(100% - 7rem)');
  }
  showMenu() {
    $('.logo').attr('src', './assets/images/logo-akadon.png');
    $('.logo').css('width', '100%');
    $('.fa-chevron-left').css('top', '8rem');
    $('.fa-chevron-right').css('display', 'none');
    $('.fa-chevron-left').css('display', 'flex');
    $('nav').css('width', '23rem');
    $('.menu-title').css('display', 'block');
    $('.main').css('width', 'calc(100% - 23rem)');
  }
  ngOnInit(): void {}
}
