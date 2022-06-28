import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    
    transform( value:string, toMayus:boolean=true ):string {
        //// if( toMayus ) {
        ////     return value.toUpperCase();
        //// } else {
        ////     return value.toLowerCase();
        //// }
        return ( toMayus ) 
            ? value.toUpperCase() 
            : value.toLowerCase();
    }
}