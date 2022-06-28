import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: []
})
export class OrdenarComponent {

  toMayus:boolean = true;

  alternarMayus():void {
    if(this.toMayus) {
      this.toMayus = false
    } else {
      this.toMayus = true;
    } 
  }

  heroes:Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ];

  ordenarPor:string = '';

  cambiarOrden( orden:string ) {
    this.ordenarPor = orden;
  }
}