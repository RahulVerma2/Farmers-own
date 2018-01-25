import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../services/purchase/purchase.service'
import { AppSettings} from '../app.config';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
  providers: [PurchaseService],
})
export class PurchaseComponent implements OnInit {
  
  totalCost : number = 0; 
  purchaseList : Array<object> =[];
  purchaseDate : any;
  marketName : string;
  vegetableList: Array<string>;
  constructor(private purchaseService: PurchaseService) { }

  ngOnInit() {
    let obj = {
      rate:0,
      quantity:0
    }
    this.vegetableList = AppSettings.vegetableList;
    this.purchaseList.push(obj);
  }

  addToTotalCost(){
    let lastItem : any= this.purchaseList[this.purchaseList.length-1];
    this.totalCost = this.totalCost + (lastItem.quantity * lastItem.rate);
  }

  addNewItem(){
    let obj = {
      rate:0,
      quantity:0
    }
    this.purchaseList.push(obj);
  }

  submitVegetablePurchase(){
    let todaysVegetablePurchase = {
      purchaseList : this.purchaseList,
      purchaseDate : this.purchaseDate,
      totalPurchaseCost : this.totalCost,
      marketName : this.marketName,
    }
    this.purchaseService.addTodaysPurchase(todaysVegetablePurchase).subscribe(response => {
      console.log(response.msg);
    });
  }


}
