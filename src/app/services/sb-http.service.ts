import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SbHttpService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  // <T> overload for HttpClient methods always parses JSON,
  // need to add more overloads if the response is something else
  get<T>(apiEndpoint: string): Observable<T> {
    return this.http.get<T>(
      environment.API_URL + apiEndpoint,
      {
        headers: this.authorizationHeaders()
      }
    );
  }

  post<T>(apiEndpoint: string, payload: any): Observable<T> {
    return this.http.post<T>(
      environment.API_URL + apiEndpoint,
      payload,
      {
        headers: this.authorizationHeaders()
      }
    );
  }

  delete<T>(apiEndpoint: string): Observable<T> {
    return this.http.delete<T>(
      environment.API_URL + apiEndpoint,
      {
        headers: this.authorizationHeaders()
      }
    );
  }

  private authorizationHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${this.authService.token}`);
  }
}
