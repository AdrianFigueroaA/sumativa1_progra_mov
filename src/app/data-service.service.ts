import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private peliculasGuardadas: { titulo: string; imagen: string }[] = [];

  guardarPelicula(pelicula: { titulo: string; imagen: string }) {
    this.peliculasGuardadas.push(pelicula);
  }

  obtenerPeliculasGuardadas() {
    return this.peliculasGuardadas;
  }
}
