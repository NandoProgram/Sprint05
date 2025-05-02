import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CuadrosService } from '../../services/cuadros.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  formVenta!: FormGroup;
  constructor(private fb: FormBuilder, public cuadrosService: CuadrosService, private router:Router){
    this.formVenta=this.fb.group({
      userName: ['', [Validators.required]],
      userLastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      Dirreccion: ['', [Validators.required]],
      agreeTerms: ['false', [Validators.requiredTrue]]
    })
  }

  comprar(){
    this.cuadrosService.addPedidos();
    this.cuadrosService.limpiarFavoritos();
    Swal.fire({
          text: "venta exitosa",
          icon: "success",
          color: "#000",
          background: "#fff",
        }).then(()=>{
          this.router.navigateByUrl("");
        })
  }
}
