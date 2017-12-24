import { Component, OnInit } from '@angular/core';
import {ContentServiceService} from '../../service/content-service.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],

})
export class ContentComponent implements OnInit {

  
  vegetableList = [];
  cartList = [];
  
  constructor(private contentServiceService: ContentServiceService) { }

  ngOnInit() {
    console.log("component");
    this.cartList = this.contentServiceService.getCartList();
    this.contentServiceService.getItemList().subscribe( res =>{
      this.vegetableList = res;
    })
    this.contentServiceService.newVegetableSubject.subscribe(
      
      data => {
        if(data.action ==="add"){
          this.cartList = [data, ...this.cartList];
        }
        else if(data.action ==="remove"){

          //We will remove the vegetable
          
        }


      }
    )
  }
  
  addToCart(vegetable){
    vegetable.action = "add";
    this.contentServiceService.addToCart(vegetable);
  }

  removeItemFromCartList(vegetable){
    vegetable.action = "remove";
    this.contentServiceService.addToCart(vegetable);
  }

 
}
