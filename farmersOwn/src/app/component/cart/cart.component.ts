import { Component, OnInit } from '@angular/core';
import {ContentServiceService} from '../../service/content-service.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
  
})
export class CartComponent implements OnInit {

  cartList= [];

  constructor(private contentServiceService: ContentServiceService) { }
  
  ngOnInit() {
    this.cartList = this.contentServiceService.getCartList();
    // this.contentServiceService.newVegetableSubject.subscribe(
      
    //   data => {
    //     if(data.action ==="add"){
    //       this.cartList = [data, ...this.cartList];
    //     }
    //     else if(data.action ==="remove"){

    //       //We will remove the vegetable
          
    //     }


    //   }
    // )
  }

  
}
