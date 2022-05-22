import { FormGroup } from "@angular/forms";
import { StudentService } from "./services/student.service";
import { TutorService } from "./services/tutor.service";

export function CityCheck(controlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        if(control.value === 'Tỉnh / Thành phố') {
            control.setErrors({ cityCheck: true });
        }
    };
}

export function DistrictCheck(controlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        if(control.value === 'Quận / Huyện') {
            control.setErrors({ districtCheck: true });
        }
    };
}

export function WardCheck(controlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        if(control.value === 'Phường / Xã') {
            control.setErrors({ wardCheck: true });
        }
    };
}

export function GenderCheck(controlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        if(control.value === 'Giới tính') {
            control.setErrors({ genderCheck: true });
        }
    };
}

export function SubjectCheck(controlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        if(control.value === 'Môn học') {
            control.setErrors({ subjectCheck: true });
        }
    };
}

export function LevelCheck(controlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        if(control.value === 'Trình độ') {
            control.setErrors({ levelCheck: true });
        }
    };
}

export function CostCheck(controlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        if(control.value === 'Chọn ngân sách') {
            control.setErrors({ costCheck: true });
        }
    };
}

export function DurationCheck(controlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        if(control.value === 'Chọn thời gian') {
            control.setErrors({ durationCheck: true });
        }
    };
}


// validator for checking if the password and confirm password are the same
export function ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        }
    };
}

// validator for checking if the password has at least one number
export function NumberValidator(controlName: string) {
    let numberCheck = /[0-9]/;
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        if (!numberCheck.test(control.value)) {
            control.setErrors({ numberValidator: true });
        }
    };
}

// validator for checking if the password has at least one uppercase letter and one lowercase letter
export function TransformValidator(controlName: string) {
    let lowerCheck = /[a-z]/;
    let upperCheck = /[A-Z]/;
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        if (!lowerCheck.test(control.value) || !upperCheck.test(control.value)) {
            control.setErrors({ transformValidator: true });
        }
    };
}

// validator for checking if the password has at least one special character
export function SpecialValidator(controlName: string) {
    let specialCheck = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/;
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        if (!specialCheck.test(control.value)) {
            control.setErrors({ specialValidator: true });
        }
    };
}

// validator for checking email of student is existent
export function StudentEmailCheck(controlName: string, studentService: StudentService) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        studentService.checkEmail(control.value).subscribe((res) => {
            if (!res) {
                control.setErrors({ studentEmailCheck: true });
            }
        });
    };
}

// validator for checking phone number of student is existent
export function StudentPhoneNumberCheck(controlName: string, studentService: StudentService) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        studentService.checkPhoneNumber(control.value).subscribe((res) => {
            if (!res) {
                control.setErrors({ studentPhoneNumberCheck: true });
            }
        });
    };
}

// validator for checking email of tutor is existent
export function TutorEmailCheck(controlName: string, tutorService: TutorService) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        tutorService.checkEmail(control.value).subscribe((res) => {
            if (!res) {
                control.setErrors({ tutorEmailCheck: true });
            }
        });
    };
}

// validator for checking phone number of tutor is existent
export function TutorPhoneNumberCheck(controlName: string, tutorService: TutorService) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        tutorService.checkPhoneNumber(control.value).subscribe((res) => {
            if (!res) {
                control.setErrors({ tutorPhoneNumberCheck: true });
            }
        });
    };
}

export function EditTutorPhoneNumberCheck(controlName: string, tutorService: TutorService, number: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        if ((control.value as string) != number.trim()) {
            tutorService
                .checkPhoneNumber(control.value as string)
                .subscribe((res) => {
                if (!res) {
                    control.setErrors({ editTutorPhoneNumberCheck: true });
                }
            });
        }
    };
}

export function EditTutorEmailCheck(controlName: string, tutorService: TutorService, email: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        if ((control.value as string) != email) {
            tutorService.checkEmail(control.value as string).subscribe((res) => {
                if (!res) {
                control.setErrors({ editTutorEmailCheck: true });
                }
            });
        }
    };
}

export function PayTimeCheck(controlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        if(control.value === 'Thanh toán học phí') {
            control.setErrors({ payTimeCheck: true });
        }
    };
}

export function CodeCheck(controlName: string, studentService: StudentService) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        let email = sessionStorage.getItem('email') as string;
        studentService.checkCode(control.value, email).subscribe((res) => {
            if (res === 'Incorrect') {
                control.setErrors({ codeCheck: true });
            }
        });
    };
}

export function CodeCheckTimeOut(controlName: string, studentService: StudentService) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        let email = sessionStorage.getItem('email') as string;
        studentService.checkCode(control.value, email).subscribe((res) => {
            if (res === 'Time out') {
                control.setErrors({ codeCheckTimeOut: true });
            }
        });
    };
}

export function TutorCodeCheck(controlName: string, tutorService: TutorService) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        let email = sessionStorage.getItem('email') as string;
        tutorService.checkCode(control.value, email).subscribe((res) => {
            if (res === 'Incorrect') {
                control.setErrors({ codeCheck: true });
            }
        });
    };
}

export function TutorCodeCheckTimeOut(controlName: string, tutorService: TutorService) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        let email = sessionStorage.getItem('email') as string;
        tutorService.checkCode(control.value, email).subscribe((res) => {
            if (res === 'Time out') {
                control.setErrors({ codeCheckTimeOut: true });
            }
        });
    };
}

