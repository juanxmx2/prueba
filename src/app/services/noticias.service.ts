import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  url = environment.endpoints.urlBase;
  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get(`${this.url}/noticias`);
  }
}
