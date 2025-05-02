import { Component } from '@angular/core';
import { Cuadro } from '../../Types/Cuadro';
import { CuadrosService } from '../../services/cuadros.service';
import { CardsComponent } from '../cards/cards.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-galeria',
  imports: [CardsComponent],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  cuadros:Cuadro[]=[];
  constructor(private cuadrosService:CuadrosService){}
  ngOnInit(){
    this.cuadros=this.cuadrosService.getAllCuadros();
  }
  fnAddCuadro(id: number){
    this.cuadrosService.addFavorites(id);
  }
}
