import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [ItemsService]
})
export class ItemsComponent implements OnInit {

  currentStockList: Array<object>
  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getCurrentStockDetails();
  }

  getCurrentStockDetails(){
    this.itemsService.getCurrentStockDetails().subscribe(res => {
      this.currentStockList =  res;
    });
  }


}
