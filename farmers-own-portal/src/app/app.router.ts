import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './purchase/purchase.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DealersComponent } from './dealers/dealers.component';
import { OrdersComponent } from './orders/orders.component';
    
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children :[
            {
                path: '',
                redirectTo: 'orders',
                pathMatch: 'full'
            },
            {
                path: 'purchase',
                component: PurchaseComponent,
                
            },
            {
                path: 'items',
                component: ItemsComponent,
                
            },
            {
                path: 'dealers',
                component: DealersComponent,
                
            },
            {
                path: 'orders',
                component: OrdersComponent,
                
            }

        ]
    },
   

];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);