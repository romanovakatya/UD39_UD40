import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idiomas'
})
export class IdiomasPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (args != null){

      if (args == "castellano"){
        switch (value){
          case 1: return "Identificador";
          case 2: return "nombre";
          case 3: return "Estado";
          case 4: return "Especies";
          case 5: return "Genero";
          case 6: return "Tipo";
        }
      }
      if (args == "catalan"){
        switch (value) {
          case 1: return "Identificador";
          case 2: return "nom";
          case 3: return "Estat";
          case 4: return "Espècie";
          case 5: return "Gènere";
          case 6: return "Tipus";
        }
      }
    }
    switch (value){
      case 1: return "ID";
      case 2: return "Name";
      case 3: return "Status";
      case 4: return "Species";
      case 5: return "Gender";
      case 6: return "Type";
    }
    return null;
  }

}
