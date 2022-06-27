import { Component } from '@angular/core';

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
}
