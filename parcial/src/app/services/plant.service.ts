import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IPlant } from '../interfaces/plant.interface';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPlantsList(): Observable<IPlant[]> {
    return this.http.get<IPlant[]>(this.baseUrl);
  }
}
