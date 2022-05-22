import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";

declare var $: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    constructor(private route: Router) { }

    public loginUser = JSON.parse(sessionStorage.getItem('loginUser') as string);

    ngOnInit() {
        if (this.loginUser) {
            this.route.navigate(['/dashboard-student/home']);
        }
    }
}