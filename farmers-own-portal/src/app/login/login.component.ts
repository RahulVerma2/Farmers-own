import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { Router }  from '@angular/router';  


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  username = new FormControl('',[Validators.required]);
  password = new FormControl('',[Validators.required]);
  msg:string;

  loginForm : FormGroup = this.builder.group({
    username: this.username,
    password: this.password
  });

  constructor(private builder: FormBuilder, private _loginService : LoginService, private _router: Router) { }

  login(){
    if(this.loginForm.value.username == "" || this.loginForm.value.password == ""){
      this.msg="Please enter valid credentials"
    }else{
      this.msg="";
      
      this._loginService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(response => {
        this.msg = response.msg;
        if(typeof response.msg == "object"){
          this._router.navigate(['/dashboard']);
        }
        
        
      });
    }
  }

  ngOnInit() {
  }

}
