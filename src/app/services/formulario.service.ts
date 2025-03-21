import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  private apiUrl = `${environment.apiUrl}contact`; // URL del endpoint

  constructor(private http: HttpClient) {}

  enviarFormulario(datos: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, datos);
  }
}
