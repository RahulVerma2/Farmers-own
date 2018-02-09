import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import {HttpModule} from '@angular/http';
import { routes } from './app.router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule, MatFormFieldModule } from '@angular/material';
import { MatInputModule, MatOptionModule, MatSelectModule, MatMenuModule} from '@angular/material';


import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ContentComponent } from './component/content/content.component';
import { PageComponent } from './component/page/page.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CartComponent } from './component/cart/cart.component';

import { ContentServiceService } from './service/content-service.service';

import { Subject } from 'rxjs/Subject';
import { OrderConfirmationComponent } from './component/order-confirmation/order-confirmation.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { TrackOrderComponent } from './component/track-order/track-order.component';
import { AboutUsComponent } from './component/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    OrderConfirmationComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    TrackOrderComponent,
    AboutUsComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule, 
    MatSelectModule,
    MatMenuModule
  ],
  providers: [ContentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
