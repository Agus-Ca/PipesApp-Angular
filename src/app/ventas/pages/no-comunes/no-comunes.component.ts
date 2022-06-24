import { Component, resolveForwardRef } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: []
})
export class NoComunesComponent{

  // * i18nSelect pipe
  nombre:string = 'Agustin';
  genero:string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarPersona():void {
    if (this.genero === 'masculino') {
      this.nombre = 'Agustina';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Agustin';
      this.genero = 'masculino';
    }
  }

  // * i18nPlural pipe
  clientes:string[] = ['Maria', 'Pedro', 'Hernan', 'Eduardo', 'Francisco', 'Fabian'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes'
  }

  borrarCliente():void {
    if(this.clientes.length > 0) {
      this.clientes.shift();
    }
  }

  // * KeyValue pipe
  persona = {
    nombre: 'Agustin',
    edad: 25,
    direccion: 'Mendoza, Argentina'
  }

  // * Json pipe
  heroes = [
    {
      nombre: 'SuperMan',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // * Async pipe
  miObservable = interval(1000);

  miPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500);
  });
}