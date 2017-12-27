import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ContentComponent } from './component/content/content.component';
import { LoginComponent } from './component/login/login.component';
import { OrderConfirmationComponent } from './component/order-confirmation/order-confirmation.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'content',
        pathMatch: 'full'
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'content',
        component: ContentComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'orderConfirmation',
        component: OrderConfirmationComponent
    }
    
    
    

    

];


export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);