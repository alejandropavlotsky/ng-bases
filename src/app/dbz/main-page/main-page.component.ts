import { Personaje } from './../interfaces/dbz.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 5000,
  };

  agregarNuevoPersonaje(argument: Personaje) {
    this.personajes.push(argument);
  }
}
