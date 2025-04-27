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
import { DepartamentoService } from './services/departamento.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'landingsancastulo';
  listaDepartamentos: any[] = [];
  listaProyectos: any[] = [];
  departamentoSeleccionado: any = null;
  constructor(
    private fb: FormBuilder,
    private paisesService: PaisesService,
    private sanitizer: DomSanitizer,
    private departamentosService: DepartamentoService
  ) {}

  ngOnInit() {
    this.listDepartamentos();
    this.listProyectos();
  }
  listDepartamentos() {
    this.departamentosService.getDepartamentos().subscribe((data) => {
      this.listaDepartamentos = data;
    });
  }
  listProyectos() {
    this.departamentosService.getProyectos().subscribe((data) => {
      this.listaProyectos = data;
    });
  }

  abrirModal(departamento: any) {
    this.departamentoSeleccionado = departamento;
  }
  abrirModal360(departamento: any) {
    this.departamentoSeleccionado = departamento;
  }
  sanitizeHTML(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
