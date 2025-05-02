import { Injectable } from '@angular/core';
import { Cuadro } from '../Types/Cuadro';
import { data } from '../data';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CuadrosService {
  Cuadros: Cuadro[]=data;
  Pedidos: number[]=[];
  constructor(private router:Router) { }
  getAllCuadros(): Cuadro[]{
    return this.Cuadros;
  }

  getFavorites():number[]{
    const favorites =localStorage.getItem('cuadros-favoritos')? localStorage.getItem('cuadros-favoritos'):'';
    return favorites? JSON.parse(favorites):[];
  }
  addFavorites(id:number){
    const favorites=this.getFavorites();
    favorites.push(id);
    localStorage.setItem('cuadros-favoritos',JSON.stringify(favorites));
    Swal.fire({
      text: "Producto agregado",
      icon: "success",
      color: "#000",
      background: "#fff",
    }).then(()=>{
    })
   }

   removeFromFavorites(id:number){
    const favorites=this.getFavorites();
    const updateBooks=favorites.filter(id_book=>id_book!==id);
    localStorage.setItem('cuadros-favoritos',JSON.stringify(updateBooks));
   }

   limpiarFavoritos(){
    const limpio: number[]=[];
    localStorage.setItem('cuadros-favoritos',JSON.stringify(limpio));

   }



   getAllPedidos(): number[]{
    return this.Pedidos;
  }

  getPedidos():number[]{
    const pedidosbase =localStorage.getItem('cuadros-pedidos')? localStorage.getItem('cuadros-pedidos'):'';
    return pedidosbase? JSON.parse(pedidosbase):[];
  }
  addPedidos(){

    const pedidosnuevo=this.getFavorites();
    const pedidosviejos=this.getPedidos()
    const actualizados=pedidosviejos.concat(pedidosnuevo);
    /*
    
    */
    localStorage.setItem('cuadros-pedidos',JSON.stringify(actualizados));
    this.router.navigateByUrl("");
    
   }

   removeFromPedidos(id:number){
    const favorites=this.getPedidos();
    const updateBooks=favorites.filter(id_book=>id_book!==id);
    localStorage.setItem('cuadros-pedidos',JSON.stringify(updateBooks));
   }
}
