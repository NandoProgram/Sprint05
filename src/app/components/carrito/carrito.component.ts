import { Component } from '@angular/core';
import { CuadrosService } from '../../services/cuadros.service';
import { Cuadro } from '../../Types/Cuadro';
import { CardsComponent } from '../cards/cards.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  imports: [CardsComponent],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  favorito!: number[];
  cuadros!: Cuadro[];
  total!: number;
 


  constructor(public cuadrosService: CuadrosService, private router:Router){
    
  }



  ngOnInit(){
    this.favorito=this.cuadrosService.getFavorites();
    this.cuadros=this.cuadrosService.getAllCuadros();
    this.calcularTotal();
  }
  calcularTotal(){
    var semitotal=0;
    for(var c of this.favorito){
      semitotal=semitotal+this.cuadros[c].precio;
    }
    this.total=semitotal;
  }
  eliminarCuadro(id:number){
    this.cuadrosService.removeFromFavorites(id);
    this.favorito=this.cuadrosService.getFavorites();
    this.calcularTotal();
  }
  
  siguiente(){
    this.router.navigateByUrl("/formulario");
  }
}
