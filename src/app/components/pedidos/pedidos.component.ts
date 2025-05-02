import { Component } from '@angular/core';
import { Cuadro } from '../../Types/Cuadro';
import { CuadrosService } from '../../services/cuadros.service';
import { Router } from '@angular/router';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-pedidos',
  imports: [CardsComponent],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  favorito!: number[];
  cuadros!: Cuadro[];
  total!: number;

  constructor(public cuadrosService: CuadrosService, private router:Router){
    
  }


  ngOnInit(){
    this.favorito=this.cuadrosService.getPedidos();
    this.cuadros=this.cuadrosService.getAllCuadros();
  }

  eliminarPedido(id:number){
    this.cuadrosService.removeFromPedidos(id);
    this.favorito=this.cuadrosService.getPedidos();
  }
}
