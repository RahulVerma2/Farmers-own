import { Component, OnInit } from '@angular/core';
import {ContentServiceService} from '../../service/content-service.service'

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  addressDetail = {};

  constructor(private contentServiceService: ContentServiceService) { }

  ngOnInit() {
  }

  placeOrder(){
    debugger;
    var userDetail = JSON.parse(localStorage.getItem("userDetail"));
    userDetail.itemList = this.contentServiceService.getCartList();
    userDetail.address = [];
    userDetail.address.push(this.addressDetail);
  }

}
