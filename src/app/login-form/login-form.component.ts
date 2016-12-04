import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login-form.component.html'
})
export class LoginFormComponent implements OnInit {
    public loginForm = this.fb.group({
        email: ["", Validators.required],
        password: ["", Validators.required]
    });

    constructor(public fb: FormBuilder) { }

    ngOnInit() { }

    doLogin(event: any) {
    console.log(event);
    console.log(this.loginForm.value);
  }
}