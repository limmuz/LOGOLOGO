import { LoginComponent } from './pages/login/login.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "LOGOLOGO"
    },
    {
        path: "login",
        component: LoginComponent,
        title: "LOGOLOGO - login"
    },
    {
        path: "carrinho",
        component: CartComponent,
        title: "LOGOLOGO - carrinho"
    }
];
