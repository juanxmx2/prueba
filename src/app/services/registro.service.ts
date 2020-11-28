import { Registro } from './../models/registro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  url = environment.endpoints.urlBase;
  constructor(private http: HttpClient) { }

  getPrograms() {
    return this.http.get(`${this.url}/programas`);
  }

  setPrograms(data: Registro){
    return this.http.post(`${this.url}/registro`, data)
  }
}
