import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserQuestionService } from 'src/app/services/user-question.service';
import { UserQuestion } from 'src/app/models/user-question.model';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userQuestionService: UserQuestionService
  ) { }

  showErrorPopup(message: string) {
    $('body').append(
      '<div class="error-popup animate__animated animate__fadeInDown"></div>'
    )

    setTimeout(() => {
      $('.error-popup').addClass('animate__fadeOutUp');
    }, 1500);
    setTimeout(() => {
      $('.error-popup').remove();
    }, 2500);

    $('.error-popup').text(message);
  }

  questionForm = this.fb.group({
    fullname: ['', [Validators.required]],
    phonenumber: ['', [Validators.required]],
    email: ['', [Validators.required]],
    content: ['', [Validators.required]]
  });

  get f() {
    return this.questionForm.controls;
  }

  isLoading = false;

  submitQuestion() {
    if(!this.questionForm.valid) {
      this.showErrorPopup('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    var userQuestion: UserQuestion = {};
    userQuestion.fullName = this.questionForm.value.fullName;
    userQuestion.phoneNumber = this.questionForm.value.phoneNumber;
    userQuestion.sendEmail = this.questionForm.value.sendEmail;
    userQuestion.content = this.questionForm.value.content;
    userQuestion.askDate = new Date();
    userQuestion.seen = false;
    this.isLoading = true;
    $('mask').blurjs({
      customClass: 'blurjs',
      radius: 5,
      persist: false,
    });
    this.userQuestionService.sendQuestion(userQuestion).subscribe((res) => {
      this.isLoading = false;
      this.questionForm.reset();
      $.blurjs('reset');
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Câu hỏi của bạn đã được gửi đi',
        showConfirmButton: false,
        timer: 1500
      });
    });
  }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          600: {
            items: 3,
            nav: false,
          },
          1000: {
            items: 5,
            nav: true,
            loop: false,
          },
        },
        navText: [
          '<i class="fas fa-angle-left previous"></i>',
          '<i class="fas fa-angle-right next"></i>',
        ],
      });
    });
  }
}
