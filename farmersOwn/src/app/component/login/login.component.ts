import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;

password:string;
  constructor(private http: Http) { }

  ngOnInit() {
  }

 signIn(){
  this.login(this.username, this.password).subscribe(response => {
    if(typeof (response.msg) == "object"){
      localStorage.setItem("userDetail",JSON.stringify(response.msg));
    }
    
  });
 }

  login(username: string, password: string){
    const loginObj = {
      username: username,
      password: password
    };

    return this.http.post('http://localhost:3000/login', loginObj)
      .map(response => response.json());
      
  } 

}
