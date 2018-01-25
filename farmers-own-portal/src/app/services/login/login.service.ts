import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';
import { AppSettings} from '../../app.config';

@Injectable()
export class LoginService {

  constructor(private http: Http) {

   }


   login(username: string, password: string){
    const loginObj = {
      username: username,
      password: password,
      page:"login"
    };

    return this.http.post(AppSettings.API_ENDPOINT+'login', loginObj)
      .map(response => response.json());
      
  } 
}
