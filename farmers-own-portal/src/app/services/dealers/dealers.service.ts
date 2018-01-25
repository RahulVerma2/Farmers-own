import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings} from '../../app.config';
@Injectable()
export class DealersService {

  constructor(private http: Http) { }

  getAllDealers(){
    return this.http.get(AppSettings.API_ENDPOINT+'getAllDealers').map(res => res.json());
  }

  addNewDealer(obj){
    const dealerObj = obj

    return this.http.post(AppSettings.API_ENDPOINT+'addNewDealer', dealerObj)
      .map(response => response.json());
  }

  updateDealer(obj){
    const dealerObj = obj

    return this.http.post(AppSettings.API_ENDPOINT+'updateDealer', dealerObj)
      .map(response => response.json());
  }

  deleteDealer(obj){
    const dealerObj = obj

    return this.http.post(AppSettings.API_ENDPOINT+'deleteDealer', dealerObj)
      .map(response => response.json());
  }

}
