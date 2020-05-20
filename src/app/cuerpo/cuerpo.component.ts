import { Component, OnInit } from '@angular/core';
import { ArticuloFamilia } from 'src/app/models/articulo-familia';
import { ArticulosFamilias } from 'src/app/models/articulos-familias';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css'],
})
export class CuerpoComponent implements OnInit {
  // declaro un array de tipo ArticuloFamilia
  ListaArticulos: ArticuloFamilia[];
  constructor() {}

  ngOnInit(): void {
    // al obj declarado, le asigno el array ArticulosFamilias
    this.ListaArticulos = ArticulosFamilias;
  }
}
