import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'numerosPrimos';

  numerosPrimos:number[] = [];

  constructor(){
      
      this.llenarArrayConPrimos();
      
    }

    
    llenarArrayConPrimos(){
      let maximo = 30;
      let inicio = 2;
      

      for (inicio ; inicio <= maximo; inicio++) {

        if (this.verificarPrimo(inicio)) {
          this.numerosPrimos.push(inicio);
        }
        
      }
      console.log(this.numerosPrimos);
    }


    verificarPrimo(numero:number) {

      for (var i = 2; i < numero; i++) {

        if (numero % i === 0) {
          return false;
        }

      }

      return numero !== 1;
    }



    
  
}
