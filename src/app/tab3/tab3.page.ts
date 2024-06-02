import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  peliculasGuardadas: { titulo: string; imagen: string }[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.peliculasGuardadas = this.dataService.obtenerPeliculasGuardadas();
  }
}
