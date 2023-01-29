import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : string;
  direccion : string;
  telefono : string;
  nuestrosvinos : string[];
  mostrarnuestrosvinos: boolean;

  constructor() {
    this.name = 'Vinoteca Familiar';
    this.direccion = 'Luna y Cardenas 3840 - Centro - Cordoba Capital';
    this.telefono = '0351 - 4698000';
    this.nuestrosvinos = ['Malbec', 'Syrah', 'Merlot'];
    this.mostrarnuestrosvinos = false;
  }

  togglenuestrosvinos (){
      this.mostrarnuestrosvinos = !this.mostrarnuestrosvinos;
}
}
