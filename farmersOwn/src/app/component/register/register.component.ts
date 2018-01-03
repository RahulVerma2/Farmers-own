import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerDetail = {};

  constructor(private http: Http) { }

  ngOnInit() {
  }

  register(){
    
    this.signUp(this.registerDetail).subscribe(response => {
      if(typeof (response.msg) == "object"){
        localStorage.setItem("userDetail",JSON.stringify(response.msg));
      }
      
    });
   }
  
   signUp(registerDetail){
      debugger;
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
