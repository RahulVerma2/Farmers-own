import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings} from '../../app.config';

@Injectable()
export class ItemsService {

  constructor(private http: Http) { }

  getCurrentStockDetails(){
    return this.http.get(AppSettings.API_ENDPOINT+'getCurrentStockDetails').map(res => res.json());
  }
}
