import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { routes } from './app.router';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatDatepickerModule,  MatNativeDateModule} from '@angular/material';
 
import { MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { Ng2SmartTableModule } from 'ng2-smart-table';




import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ItemsComponent } from './items/items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { DealersComponent } from './dealers/dealers.component';
import { DatatableComponent } from './datatable/datatable.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemsComponent,
    DashboardComponent,
    PurchaseComponent,
    DealersComponent,
    DatatableComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routes,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    CdkTableModule,
    Ng2SmartTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
