import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsDetailComponent } from './pages/products-detail/products-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WeLoveComponent } from './pages/we-love/we-love.component';


export const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'we-love' , component: WeLoveComponent},
  {path: 'products/:id', component: ProductsDetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: '', pathMatch:'full'}

];
