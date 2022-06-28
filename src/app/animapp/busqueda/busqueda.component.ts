import { Component, OnInit } from '@angular/core';
import { AnimappService } from '../services/animapp.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  buscar: string = '';

  constructor(private animappService:AnimappService) { }

  ngOnInit(): void {
  }

  busqueda(){
    // console.log("Busqueda", this.buscar);
    this.animappService.buscarGifs(this.buscar);
    this.buscar = '';
  }

}
