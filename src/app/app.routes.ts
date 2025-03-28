import { LoginComponent } from './pages/login/login.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SingupComponent } from './pages/singup/singup.component';
import { NewsComponent } from './pages/news/news.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "LOGOLOGO"
    },
    {
        path: "login",
        component: LoginComponent,
        title: "LOGOLOGO - Login"
    },
    {
        path: "carrinho",
        component: CartComponent,
        title: "LOGOLOGO - Carrinho"
    },
    {
        path: "cadastrar",
        component: SingupComponent,
        title: "LOGOLOGO - Cadastrar"
    },
    {
        path: "novidades",
        component: NewsComponent,
        title: "LOGOLOGO - Novidades"
    }
];
