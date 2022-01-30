import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getAllMakesHandler } from '../interfaces/handlers/getAllMakesFactory';
import { getMakeModelsHandler } from '../interfaces/handlers/getMakeModels';

@Injectable({
  providedIn: 'root',
})
export class ModelsService {
  constructor(private readonly http: HttpClient) {}

  public getMakeModels(modelId: number): Observable<getMakeModelsHandler> {
    const params = { format: 'json' };
    return this.http.get<getMakeModelsHandler>(
      `${environment.apiUrl}/GetModelsForMakeId/${modelId}`,
      { params }
    );
  }
}
