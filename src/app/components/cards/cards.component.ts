import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cuadro } from '../../Types/Cuadro';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() cuadro!:Cuadro;
  @Input() tipo!:number;
  @Output() idAdd=new EventEmitter<number>();

  addCuadro(){
    this.idAdd.emit(this.cuadro._id-1);
  }
  removeCuadro(){
    this.idAdd.emit(this.cuadro._id-1)
  }
  removePedido(){
    this.idAdd.emit(this.cuadro._id-1)
  }
}
