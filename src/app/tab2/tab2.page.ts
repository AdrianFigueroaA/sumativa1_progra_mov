// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-tab2',
//   templateUrl: 'tab2.page.html',
//   styleUrls: ['tab2.page.scss'],
// })
// export class Tab2Page {
//   constructor() {}
// }

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  constructor() {}

  ngOnInit() {
    this.mostrarPosters(document.getElementById('container-card-estrenos'));
  }

  async mostrarPosters(elementoHTML: HTMLElement | null) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTA1MzE4MTZkMWU1ZGY0OGMzZWNlMzMwNTQ1MzM0NSIsInN1YiI6IjY2MjkxOWRmMTc2YTk0MDE3ZjgzNjM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VLTYur3Ut34FSJWM_JmQigT2z72C_le5acTHO2d717Q',
      },
    };

    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        options
      );

      if (!response.ok) {
        throw new Error(`Error al consumir la API: ${response.status}`);
      }

      const datos = await response.json();

      let html = '';
      for (const pelicula of datos.results) {
        const titulo = pelicula.title;
        const imagen = pelicula.poster_path
          ? `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`
          : 'imagen-no-disponible.jpg';

        html += `
          <ion-card   class="ion-text-center">
            <img alt="Silhouette of mountains" src="${imagen}" />
            <ion-card-header>
              <ion-card-title>${titulo}</ion-card-title>
            </ion-card-header>
          </ion-card>
        `;
      }

      if (elementoHTML) {
        elementoHTML.innerHTML = html;
      } else {
        console.error('Elemento HTML no encontrado');
      }
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }
}
