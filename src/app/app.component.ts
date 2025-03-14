import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, NgIf, NgFor, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'landingsancastulo';
  formulario!: FormGroup;
  enviando = false; // Controla el estado de carga del botón
  mensaje: string | null = null;
  mensajeExito = false;
  formulario2!: FormGroup;
  enviando2 = false; // Estado de carga del botón
  mensaje2: string | null = null;
  mensajeExito2 = false;
  // Lista de ciudades en México
  ciudades: string[] = [
    'Ciudad de México',
    'Guadalajara',
    'Monterrey',
    'Querétaro',
    'Mérida',
    'Puebla',
    'Tijuana',
    'León',
    'Cancún',
    'Toluca',
  ];

  // Lista de departamentos de interés
  departamentos: string[] = [
    'Departamento 1',
    'Departamento 2',
    'Departamento 3',
    'Departamento 4',
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      nombre: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ\\s]+$')],
      ], // Solo letras y espacios
      celular: [
        '',
        [Validators.required, Validators.pattern('^\\+?52\\d{10}$')],
      ], // Celular de México (10 dígitos)
      email: ['', [Validators.required, Validators.email]],
      ciudad: ['', Validators.required],
      departamento: ['', Validators.required],
      origen: ['top'],
    });
    this.formulario2 = this.fb.group({
      nombre: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ\\s]+$')],
      ], // Solo letras y espacios
      celular: [
        '',
        [Validators.required, Validators.pattern('^\\+?52\\d{10}$')],
      ], // Celular de México (10 dígitos)
      email: ['', [Validators.required, Validators.email]],
      ciudad: ['', Validators.required],
      departamento: ['', Validators.required],
      origen: [''], // Campo oculto para diferenciar formularios
    });
  }

  enviarFormulario(origen: string) {
    if (this.formulario.invalid) return;

    this.enviando = true;
    this.mensaje = null;
    this.formulario2.patchValue({ origen }); // Asigna el origen antes de enviar
    // Simulación de envío (sustituir por una API real)
    setTimeout(() => {
      this.enviando = false;

      if (Math.random() > 0.2) {
        // Simulación de éxito (80% de probabilidad)
        this.mensaje =
          'Formulario enviado con éxito. Nos pondremos en contacto contigo.';
        this.mensajeExito = true;
        this.formulario.reset(); // Limpiar formulario después de éxito
      } else {
        this.mensaje =
          'Hubo un error al enviar el formulario. Inténtalo de nuevo.';
        this.mensajeExito = false;
      }
    }, 2000);
  }
  enviarFormulario2(origen: string) {
    if (this.formulario2.invalid) return;

    this.enviando2 = true;
    this.mensaje2 = null;

    this.formulario2.patchValue({ origen }); // Asigna el origen antes de enviar

    // Simulación de envío (sustituir por una API real)
    setTimeout(() => {
      this.enviando2 = false;

      if (Math.random() > 0.2) {
        // Simulación de éxito (80% de probabilidad)
        this.mensaje2 =
          'Formulario enviado con éxito. Nos pondremos en contacto contigo.';
        this.mensajeExito2 = true;
        this.formulario2.reset(); // Limpiar formulario después de éxito
      } else {
        this.mensaje2 =
          'Hubo un error al enviar el formulario. Inténtalo de nuevo.';
        this.mensajeExito2 = false;
      }
    }, 2000);
  }
  departamentoSeleccionado: any = null;

  abrirModal(departamento: any) {
    this.departamentoSeleccionado = departamento;
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
      imagen: 'images/plano-departamento.png',
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
      imagen: 'images/plano-departamento.png',
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
      imagen: 'images/plano-departamento.png',
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
      imagen: 'images/plano-departamento.png',
    },
  ];
}
