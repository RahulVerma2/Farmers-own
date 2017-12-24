import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ContentServiceService {


  
  public newVegetableSubject = new Subject<any>();
  private cartList = [];
  private vegetableList = [];

  constructor(private http: Http) { 
    console.log("service");
    
  }

 
  
  // Get the list of cart.
  getCartList(){
    return this.cartList;
  }

 

  // Add items to cart.
  addToCart(vegetable){
    this.newVegetableSubject.next(vegetable);
    this.cartList.push(vegetable);
  }

  // Get the item list from backend.
  getItemList(){
    return this.http.get('http://localhost:3000/getItems').map(res => res.json());
  }

}
