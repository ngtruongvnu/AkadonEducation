import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css'],
})

export class LoginStudentComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router,
  ) {}

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
    password: ['', [Validators.required]],
  });

  get f() {
    return this.loginForm.controls;
  }

  change(event: any) {
    var id = event.currentTarget.id;
    if (id === 'hide') {
      $('#hide').css('display', 'none');
      $('#show').css('display', 'block');
      $('#password').prop('type', 'password');
    } else {
      $('#hide').css('display', 'block');
      $('#show').css('display', 'none');
      $('#password').prop('type', 'text');
    }
  }

  login() {
    if (!this.loginForm.valid) {
      this.showErrorPopup('Vui lòng điền đầy đủ thông tin !');
    } else {
      this.studentService
        .login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe((res) => {
          if (res != null) {
            res.lastLogin = new Date();
            this.studentService.updateStudent(res).subscribe();
            sessionStorage.setItem('loginUser', JSON.stringify(res));
            this.router.navigate(['/dashboard-student/home']);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Đăng nhập thất bại !',
              text: 'Vui lòng kiểm tra lại thông tin !',
            });
          }
        });
    }
  }
  
  ngOnInit(): void {}
}
