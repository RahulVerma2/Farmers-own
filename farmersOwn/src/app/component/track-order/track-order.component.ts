import { Component, OnInit } from '@angular/core';
import {ContentServiceService} from '../../service/content-service.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {

  orderList = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.getAllOrders().subscribe(response => {
      this.orderList = response.orderList;
    })
  }

  getAllOrders(){
    var userDetail = JSON.parse(localStorage.getItem("userDetail"));
    
    return this.http.get('http://localhost:3000/trackOrder',{params: {email : userDetail.email}})
    .map(response => response.json());
  }

 


}
