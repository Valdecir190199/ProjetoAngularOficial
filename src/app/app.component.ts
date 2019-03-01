import{ Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent{

  nome: string = "Hélio";
  valor: string = " Valdecir ";
  n1: string;
  n2: string;
  res: number;

  somar(): void{


    alert('Resultado'+ parseInt(this.n1) + parseInt(this.n2);

  }





  clique() : void{
    alert('Boa noite'+" "+this.valor);
  }



}
