import { Component, OnInit } from '@angular/core';
import {ContentServiceService} from '../../service/content-service.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
  
})
export class CartComponent implements OnInit {

  vegetableList= [];

  constructor(private contentServiceService: ContentServiceService) { }
  
  ngOnInit() {
    this.contentServiceService.newVegetableSubject.subscribe(
      
      data => this.vegetableList = [data, ...this.vegetableList]
    )
  }

  
}
