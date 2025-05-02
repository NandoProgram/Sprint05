import { Routes } from '@angular/router';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { LocationComponent } from './components/location/location.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

export const routes: Routes = [
    {path:'', component:GaleriaComponent, title:"Galeria"},
    {path:'**', pathMatch:"full", redirectTo:"Galeria", title:"Galeria"},
    {path:'sobreNosotros', component:SobreNosotrosComponent, title:"Sobre nosotros"},
    {path:'carrito', component:CarritoComponent, title:"Carrito"},
    {path:'locs', component:LocationComponent, title:"Ubicaciones"},
    {path:'formulario', component:FormularioComponent, title:"Formulario"},
    {path:'pedidos', component:PedidosComponent, title:"Pedidos"},


];
