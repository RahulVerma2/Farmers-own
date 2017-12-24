import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ContentComponent } from './component/content/content.component';


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
    }
    

    

];


export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);