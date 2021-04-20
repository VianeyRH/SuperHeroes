import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Hulk', 'Saitama', 'Superman', 'Thor', 'Goku'];
  
  eliminarHeroe():void{
    this.heroes.pop();
  }

}



