import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }
  getUsuariosRedesSociales() {
    return this.http.get('http://localhost:3000/grafica');
  }
  getUsuariosRedesSocialesDonaData() {
    return this.getUsuariosRedesSociales().pipe(delay(1500),
      map(data => {
        const values = Object.values(data);
        const labels = Object.keys(data);
        return {labels, values};
      })
    );
  }
}
