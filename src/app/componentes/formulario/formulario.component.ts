import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { CommonModule } from '@angular/common';
import { FormularioService } from '../../services/formulario.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  paises: any[] = [];
  ciudades: string[] = [];
  enviando = false;
  mensaje = '';
  mensajeExito = false;
  formularioEnviado = false; // Nueva variable para controlar la visibilidad del formulario

  // Lista de departamentos de interés
  departamentos: string[] = [
    'Departamento 1',
    'Departamento 2',
    'Departamento 3',
    'Departamento 4',
  ];
  constructor(
    private fb: FormBuilder,
    private paisService: PaisesService,
    private formularioService: FormularioService
  ) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      celular: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      pais: ['', Validators.required],
      ciudad: ['', Validators.required],
      departamento: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.obtenerPaises();
  }

  obtenerPaises() {
    this.paisService.obtenerPaisesAmerica().subscribe((paises) => {
      this.paises = paises;
    });
  }

  obtenerCiudades(event: any) {
    const paisCode = event.target.value;
    this.paisService.obtenerCiudades(paisCode).subscribe((ciudades) => {
      this.ciudades = ciudades;
      this.formulario.patchValue({ ciudad: '' });
    });
  }

  enviarFormulario() {
    if (this.formulario.invalid || this.enviando) return;

    this.enviando = true;
    this.mensaje = '';

    this.formularioService.enviarFormulario(this.formulario.value).subscribe({
      next: (res) => {
        this.mensaje = 'Formulario enviado con éxito.';
        this.mensajeExito = true;
        this.formularioEnviado = true; // Ocultar formulario y mostrar mensaje
        this.formulario.reset();
      },
      error: () => {
        this.mensaje = 'Error al enviar el formulario. Inténtalo de nuevo.';
        this.mensajeExito = false;
        this.formularioEnviado = true; // Ocultar formulario y mostrar mensaje
      },
      complete: () => (this.enviando = false),
    });
  }

  recargarPagina(): void {
    window.location.reload();
  }
}
