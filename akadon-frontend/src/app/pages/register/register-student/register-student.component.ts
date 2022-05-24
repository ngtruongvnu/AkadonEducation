import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { City } from 'src/app/models/city.model';
import { District } from 'src/app/models/district.model';
import { Ward } from 'src/app/models/ward.model';
import { AddressService } from 'src/app/services/address.service';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';
import { UploadFileService } from 'src/app/services/upload-file.service';

import { CityCheck, DistrictCheck, WardCheck } from 'src/app/validator';
import { GenderCheck } from 'src/app/validator';
import { CodeCheck, CodeCheckTimeOut, StudentEmailCheck, StudentPhoneNumberCheck } from 'src/app/validator';
import { ConfirmedValidator, NumberValidator, SpecialValidator, TransformValidator } from 'src/app/validator';

declare var $: any;

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})

export class RegisterStudentComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private studentService: StudentService,
    private uploadFileService: UploadFileService,
    private addressService: AddressService
  ) { }

  email: string = '';
  code: string = '';
  id: number = 0;

  isLoading: boolean = false;
  timeOut: boolean = false;
  config: any;
  resend: boolean = false;

  cityData: City[] = [];
  city: City = {};
  districtData: District[] = [];
  wardName: string = '';
  wardData: Ward[] = [];
  student: Student = {};
  cityName: string = '';
  districtName: string = '';
  fullName: string = '';

  ngOnInit(): void {
    this.cityData = this.addressService.getAllCities();
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

  loginForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      validator: [
        ConfirmedValidator('password', 'confirmPassword'),
        NumberValidator('password'),
        TransformValidator('password'),
        SpecialValidator('password'),
        StudentEmailCheck('email', this.studentService)
      ]
    }
  );

  verifyForm = this.fb.group(
    {
      code: ['', [Validators.required]]
    },
    {
      validator: [
        CodeCheck('code', this.studentService),
        CodeCheckTimeOut('code', this.studentService)
      ],
    }
  );

  informationForm = this.fb.group(
    {
      fullName: ['', [Validators.required]],
      birthDay: ['', [Validators.required]],
      gender: ['Chọn giới tính', [Validators.required]],
      city: ['Tỉnh / Thành phố', [Validators.required]],
      district: ['Quận / Huyện', [Validators.required]],
      ward: ['Phường / Xã', [Validators.required]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(11)
        ],
      ],
    },
    {
      validator: [
        StudentPhoneNumberCheck('phoneNumber', this.studentService),
        CityCheck('city'),
        DistrictCheck('district'),
        WardCheck('ward'),
        GenderCheck('gender')
      ]
    }
  );

  get f() {
    return this.loginForm.controls;
  }

  get v() {
    return this.verifyForm.controls;
  }

  get i() {
    return this.informationForm.controls;
  }

  onPasswordChange(event: any) {
    let password = event.target.value;
    let special = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let uppercase = /[A-Z]/;
    let lowercase = /[a-z]/;
    let number = /[0-9]/;
    if (special.test(password)) {
      $('#specialCharacterCheck').css('color', 'rgb(0 183 23)');
    } else {
      $('#specialCharacterCheck').css('color', '#8f8f8f');
    }
    if (password.length >= 8) {
      $('#lengthCheck').css('color', 'rgb(0 183 23)');
    } else {
      $('#lengthCheck').css('color', '#8f8f8f');
    }
    if (uppercase.test(password) && lowercase.test(password)) {
      $('#transformCheck').css('color', 'rgb(0 183 23)');
    } else {
      $('#transformCheck').css('color', '#8f8f8f');
    }
    if (number.test(password)) {
      $('#numberCheck').css('color', 'rgb(0 183 23)');
    } else {
      $('#numberCheck').css('color', '#8f8f8f');
    }
  }

  change(event : any) {
    let id = event.target.id;
    if (id === 'hide') {
      $('#hide').css('display', 'none');
      $('#show').css('display', 'block');
      $('#password').prop('type', 'password');
    } else if (id === 'show') {
      $('#hide').css('display', 'block');
      $('#show').css('display', 'none');
      $('#password').prop('type', 'text');
    } else if (id === 'confirm-hide') {
      $('#confirm-hide').css('display', 'none');
      $('#confirm-show').css('display', 'block');
      $('#confirmPassword').prop('type', 'password');
    } else {
      $('#confirm-show').css('display', 'none');
      $('#confirm-hide').css('display', 'block');
      $('#confirmPassword').prop('type', 'text');
    }
  }

  login() {
    if( !this.loginForm.valid ) {
      this.showErrorPopup('Vui lòng điền đầy đủ thông tin');
    } else {
      this.isLoading = true;
      this.email = this.loginForm.value.email;
      this.student.email = this.email;
      this.student.password = this.loginForm.value.password;
      sessionStorage.setItem('email', this.email);
      this.studentService.insertStudent(this.student).subscribe((res: any) => {
        this.isLoading = false;
        this.timeOut = true;
        this.config = { leftTime: 300, format: 'm:s'}
        setTimeout(() => {
          $('#timeout').css('display', 'block');
        }, 3000);
      });
    }
  }

  sendCode() {
    this.resend = true;
    this.isLoading = true;
    $('#timeout').css('display', 'none');
    this.studentService.sendCode(this.email).subscribe((res: any) => {
      this.isLoading = false;
      this.config = { leftTime: 30, format: 'm:s'}
      setTimeout(() => {
        $('#timeout').css('display', 'block');
      }, 3000);
    });
  }

  verify() {
    if(!this.verifyForm.valid) {
      this.showErrorPopup('Vui lòng điền mã OTP!');
    } else {
      this.cityData = this.addressService.getAllCities();
      this.city = this.addressService.getCityById('01');
    }
  }

  chooseCity(event: any) {
    let cityId = event.target.value;
    this.city = this.addressService.getCityById(cityId);
    this.cityName = this.city.Name as string;
    this.districtData = this.city.Districts as District[];
  }

  chooseDistrict(event: any) {
    let districtId = event.target.value;
    this.wardData = this.districtData.filter(
      (district: District) => district.id === districtId
    )[0].Wards as Ward[];
    this.districtName = this.districtData.filter(
      (district: District) => district.id === districtId
    )[0].Name as string;
  }

  submitInfo() {
    if (!this.informationForm.valid) {
      this.showErrorPopup('Vui lòng điền đầy đủ thông tin');
    } else {
      this.student.behaviorPoint = 50;
      this.student.birthDay = this.informationForm.value.birthDay;
      this.student.city = this.cityName;
      this.student.district = this.districtName;
      this.student.gender = this.informationForm.value.gender;
      this.student.phoneNumber = this.informationForm.value.phoneNumber;
      this.student.role = 'ROLE_STUDENT';
      this.student.status = true;
      this.student.ward = this.informationForm.value.ward;
      this.student.rating = 0;
      this.student.lastLogin = new Date();
      this.student.learntCourseNumber = 0;
      var email = this.loginForm.value.email;
      var imgUrl: string | undefined = undefined;
      imgUrl = 'https://ui-avatars.com/api/?size=75&name=' + this.informationForm.value.fullName;
      this.student.fullname = this.informationForm.value.fullName;
      this.student.password = this.loginForm.value.password;
    }

    fetch(imgUrl as string)
      .then((res) => res.blob()) // Gets the response and returns it as a blob
      .then((blob) => {
        let objectUrl = URL.createObjectURL(blob);
        let myImage = new Image();
        myImage.src = objectUrl;
        var file = new File(
          [blob],
          email.substring(0, email.indexOf('@')) + '.jpg',
        );
        this.uploadFileService.uploadFile(file).subscribe((res: any) => {});
      });
    this.studentService.getByEmail(this.email).subscribe((res: any) => {
      this.student.studentId = res.studentId;
      this.studentService.updateStudent(this.student).subscribe((res: any) => {
        sessionStorage.setItem('loginUser', JSON.stringify(this.student));
      });
    });
  }

  cancel() {
    Swal.fire({
      title: 'Hủy đăng ký tài khoản?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.studentService.getByEmail(this.email).subscribe((res) => {
          this.studentService.deleteStudent(res.studentId as number).subscribe((res: any) => {})
        });
        Swal.fire('Xóa thành công!', 'Quá trình đăng ký đã bị hủy.', 'success');
        this.router.navigate(['/user/register']);
      }
    });
  }

  goToDashboard() {
    this.router.navigate(['/dashboard-student/home']);
  }
}
