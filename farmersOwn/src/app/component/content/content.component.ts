import { Component, OnInit } from '@angular/core';
import {ContentServiceService} from '../../service/content-service.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],

})
export class ContentComponent implements OnInit {

  
  vegetableList = [];

  
  constructor(private contentServiceService: ContentServiceService) { }

  ngOnInit() {
    this.getItemList();
  }
  
  addToCart(vegetable){
    this.contentServiceService.addToCart(vegetable);
  }

  getItemList(){
    this.contentServiceService.getItemList().subscribe( res =>{
      this.vegetableList = res;
    })
  };
}
