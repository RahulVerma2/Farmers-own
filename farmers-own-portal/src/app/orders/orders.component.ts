import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [OrdersService]
})
export class OrdersComponent implements OnInit {

  orderList : Array<object>
  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders(){
    this.ordersService.getAllOrders().subscribe(res => {
      this.orderList =  res;
    });
  }

}
