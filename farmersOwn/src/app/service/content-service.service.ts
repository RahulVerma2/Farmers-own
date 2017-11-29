import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ContentServiceService {

  public newVegetableSubject = new Subject<any>();

  constructor(private http: Http) { }

  addToCart(vegetable){
    this.newVegetableSubject.next(vegetable);
  }

  getItemList(){
    return this.http.get('http://localhost:3000/getItems').map(res => res.json());
  }

}
