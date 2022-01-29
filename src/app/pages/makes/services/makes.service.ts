import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getAllMakesHandler } from '../interfaces/handlers/getAllMakesFactory';

@Injectable({
  providedIn: 'root',
})
export class MakesService {
  constructor(private readonly http: HttpClient) {}

  public getAllMakes(): Observable<getAllMakesHandler> {
    const params = { format: 'json' };
    return this.http.get<getAllMakesHandler>(`${environment.apiUrl}/getallmakes`, { params });
  }
}
