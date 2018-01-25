import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings} from '../../app.config';

@Injectable()
export class OrdersService {

  constructor(private http: Http) { }

  getAllOrders(){
    return this.http.get(AppSettings.API_ENDPOINT+'getAllOrders').map(res => res.json());
  }
  

}
