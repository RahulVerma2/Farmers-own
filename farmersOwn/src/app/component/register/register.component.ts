import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerDetail:any;
  errorMsg = "";
  successMsg = "";
  showRegister = true;
  showOTP = false;
  showSuccess = false;
  otp:string;
  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    this.registerDetail = {};
  }

  confirmOTP(){
    this.confirmOtpFromServer(this.otp).subscribe(response => {
      if(response.msgCode === 200){
        this.register();
        //this.successMsg = ""
      }
      else{
        this.errorMsg = response.msg;
      }
    });
  }

  // Sending Message to server to generate OTP.
  confirmOtpFromServer(otp){
    var registerDetail = JSON.parse(localStorage.getItem("tempUserDetail"));
    const obj = {
      otp: otp,
      email: registerDetail.email,
      phone: registerDetail.phone,
    };
    return this.http.post('http://localhost:3000/confirmOTP', obj)
      .map(response => response.json());
  }




  //Event handler for register button.
  generateOTP(){
    if(this.registerDetail.password != this.registerDetail.confirmPassword){
      this.errorMsg = "Password and Confirm Password doesnot match."
      return false;
    }
    this.showRegister = false;
    this.showOTP = true;
    this.createOtp(this.registerDetail).subscribe(response => {
      if(response.msgCode == 200){
        this.successMsg = response.msg;
      }
      else{
        this.errorMsg = response.msg;
      }
    });
  }
  
  // Sending Message to server to generate OTP.
  createOtp(registerDetail){
    localStorage.setItem("tempUserDetail",JSON.stringify(registerDetail));
    const obj = {
      name: registerDetail.name,
      email: registerDetail.email,
      phone: registerDetail.phone,
    };
    return this.http.post('http://localhost:3000/generateOTP', obj)
      .map(response => response.json());
  }




  register(){
    this.signUp().subscribe(response => {
      if(response.msgCode === 200){
        this.showOTP = false;
        this.showSuccess = true;
        this.successMsg = response.msg;
        this.errorMsg = "";
        localStorage.removeItem("tempUserDetail");
      }
      else{
        this.errorMsg = response.msg;
      }
      
    });
   }

  // sending detail to server to register User.
  signUp(){
    var registerDetail = JSON.parse(localStorage.getItem("tempUserDetail"));
    const obj = {
      name: registerDetail.name,
      email: registerDetail.email,
      phone: registerDetail.phone,
      password: registerDetail.password
    };

    return this.http.post('http://localhost:3000/register', obj)
      .map(response => response.json());
      
  } 

}
