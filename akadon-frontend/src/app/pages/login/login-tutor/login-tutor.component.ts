import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { TutorService } from 'src/app/services/tutor.service';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-login-tutor',
  templateUrl: './login-tutor.component.html',
  styleUrls: ['./login-tutor.component.css']
})
export class LoginTutorComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private tutorService: TutorService
  ) { }

  ngOnInit(): void {
  }

  showErrorPopup(message: string) {
    $('body').append(
      '<div class="error-popup animate__animated animate__fadeInDown"></div>'
    );
    setTimeout(() => {
      $('.error-popup').addClass('animate__fadeOutDown');
    }, 1500);
    setTimeout(() => {
      $('.error-popup').remove();
    }, 2500);
    $('.error-popup').text(message);
  }

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  get f() { return this.loginForm.controls; }

  change(event: any) {
    let id = event.currentTarget.id;
    if (id == 'hide') {
      $('#password').prop('type', 'password');
      $('#show').css('display', 'block');
      $('#hide').css('display', 'none');
    } else {
      $('#password').prop('type', 'text');
      $('#show').css('display', 'none');
      $('#hide').css('display', 'block');
    }
  }

  login() {
    if(this.loginForm.invalid) {
      this.showErrorPopup('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    this.tutorService
        .login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe((res) => {
          if(res != null) {
            res.lastLogin = new Date();
            this.tutorService.updateTutor(res).subscribe();
            // this.courseService.setTutorTaughtData(res).subscribe();
            sessionStorage.setItem('tutor', JSON.stringify(res));
            this.router.navigate(['/dashboard-tutor/home']);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Đăng nhập thất bại',
              text: 'Tài khoản hoặc mật khẩu không đúng!'
            });
          }
        });
  }

}
