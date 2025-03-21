import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DepartamentoService {
  private jsonUrl = `${environment.jsonUrl}`;

  constructor(private http: HttpClient) {}

  getDepartamentos(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
