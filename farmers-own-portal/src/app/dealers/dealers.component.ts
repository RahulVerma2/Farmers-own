import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {DealersService} from '../services/dealers/dealers.service';
@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.css'],
  providers : [DealersService]
})
export class DealersComponent implements OnInit {
  settings : object = {
    delete: {
      confirmDelete: true,
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },
    columns: {
      dealerName: {
        title: 'Dealer Name',
        filter:true
      },
      phone: {
        title: 'Phone No',
        filter:true
      },
      address: {
        title: 'Address',
        filter:true
      },
      
    }
  };
  
  serverMessage : string;
  data: object[];

  source: LocalDataSource;
  constructor(private _dealersService: DealersService) { 
  

  }

  ngOnInit() {
    this.getAllDealers();
    
  }
  
  getAllDealers(){
    console.log(this.settings);
    this._dealersService.getAllDealers().subscribe(res => {
      console.log(res.dealersList);
      this.data =  res.dealersList;
      this. source = new LocalDataSource(this.data);
    });
  }

  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      
      this._dealersService.deleteDealer(event.data).subscribe(res => {
        console.log(res.code);
        if(res.code == 200){
          this.serverMessage = 'Dealer successfully deleted';
        }
        else{
          this.serverMessage = 'Error while deleting the Dealer';
        }
      });
      event.confirm.resolve();
      
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
      this._dealersService.addNewDealer(event.newData).subscribe(res => {
        console.log(res.code);
        if(res.code == 200){
          this.serverMessage = 'New Dealer successfully added';
        }
        else{
          this.serverMessage = 'Error while adding new Dealer';
        }
      });
      event.confirm.resolve(event.newData);
     
     
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      
      var obj = {
        oldData : event.data,
        newData : event.newData,

      }
      this._dealersService.updateDealer(obj).subscribe(res => {
        console.log(res.code);
        if(res.code == 200){
          this.serverMessage = 'Dealer updated successfully';
        }
        else{
          this.serverMessage = 'Error while updating Dealer';
        }
      });
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'dealerName',
        search: query
      },
      {
        field: 'phone',
        search: query
      },
      {
        field: 'address',
        search: query
      }
    ], false);
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }
  
}

