import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PaisesService } from './services/paises.service';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'landingsancastulo';

  constructor(
    private fb: FormBuilder,
    private paisesService: PaisesService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  departamentoSeleccionado: any = null;

  abrirModal(departamento: any) {
    this.departamentoSeleccionado = departamento;
  }
  abrirModal360(departamento: any) {
    this.departamentoSeleccionado = departamento;
  }
  sanitizeHTML(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  listadepartamentos = [
    {
      tipo: 'Departamento Tipo 1',
      distribucion: {
        area: '50.5 m²',
        habitaciones: 2,
        closet: true,
        bano: 1,
        estacionamiento: false,
        sala: true,
        comedor: false,
        cocina_equipada: true,
        area_lavado: true,
      },
      imagen: 'images/DepaTipo1/1.png',
      script:
        '<script src="https://static.kuula.io/embed.js" data-kuula="https://kuula.co/share/collection/7bCt9?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1&margin=2&alpha=0.77&inst=es" data-width="100%" data-height="100%"></script>',
      html: '<iframe width="100%" height="100%" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/collection/7bCt9?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1&margin=2&alpha=0.77&inst=es"></iframe>',
    },
    {
      tipo: 'Departamento Tipo 2',
      distribucion: {
        area: '56 m²',
        habitaciones: 2,
        closet: true,
        bano: 1,
        estacionamiento: 1,
        sala: true,
        comedor: true,
        cocina_equipada: true,
        area_lavado: true,
      },
      imagen: 'images/DepaTipo2/2.png',
      script:
        ' <script src="https://static.kuula.io/embed.js" data-kuula="https://kuula.co/share/collection/7bV44?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1&margin=2&alpha=0.77&inst=es" data-width="100%" data-height="640px"></script>',
      html: '<iframe width="100%" height="640" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/collection/7bV44?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1&margin=2&alpha=0.77&inst=es"></iframe>',
    },
    {
      tipo: 'Departamento Tipo 3',
      distribucion: {
        area: '66 m²',
        habitaciones: 2,
        closet: true,
        bano: 1,
        estacionamiento: 1,
        sala: true,
        comedor: true,
        cocina_equipada: true,
        area_lavado: true,
      },
      imagen: 'images/DepaTipo3/3.png',
      script:
        '<script src="https://static.kuula.io/embed.js" data-kuula="https://kuula.co/share/collection/7bV4M?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1&margin=2&alpha=0.77&inst=es" data-width="100%" data-height="640px"></script>',
      html: '<iframe width="100%" height="640" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/collection/7bV4M?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1&margin=2&alpha=0.77&inst=es"></iframe>',
    },
    {
      tipo: 'Departamento Tipo 4',
      distribucion: {
        area: '70 m²',
        habitaciones: 2,
        closet: true,
        bano: 1,
        estacionamiento: 1,
        sala: true,
        comedor: true,
        cocina_equipada: true,
        area_lavado: true,
      },
      imagen: 'images/DepaTipo4/4.png',
      script:
        '<script src="https://static.kuula.io/embed.js" data-kuula="https://kuula.co/share/collection/7bV43?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1&margin=2&alpha=0.77&inst=es" data-width="100%" data-height="640px"></script>',
      html: '<iframe width="100%" height="640" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/collection/7bV43?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1&margin=2&alpha=0.77&inst=es"></iframe>',
    },
  ];
}
