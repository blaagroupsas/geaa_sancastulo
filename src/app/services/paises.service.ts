import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private username = 'blaagrooupsas'; // Reemplaza con tu usuario de GeoNames
  private apiUrl = 'http://api.geonames.org';
  constructor(private http: HttpClient) {}

  // Obtener países de América
  obtenerPaisesAmerica(): Observable<{ code: string; name: string }[]> {
    return this.http
      .get<any>('https://restcountries.com/v3.1/region/americas')
      .pipe(
        map((response) =>
          response
            .map((pais: any) => ({
              code: pais.cca2,
              name: pais.name.common,
            }))
            .sort((a: any, b: any) => a.name.localeCompare(b.name))
        )
      );
  }

  // Obtener ciudades de un país
  obtenerCiudades(paisCode: string): Observable<string[]> {
    const url = `http://api.geonames.org/searchJSON?country=${paisCode}&featureClass=P&maxRows=1000&username=${this.username}`;

    return this.http.get<any>(url).pipe(
      map(
        (response) =>
          Array.from(
            new Set<string>(response.geonames.map((ciudad: any) => ciudad.name))
          ) // Cast a string[]
            .sort((a, b) => a.localeCompare(b)) // Ordenar alfabéticamente
      )
    );
  }
}
