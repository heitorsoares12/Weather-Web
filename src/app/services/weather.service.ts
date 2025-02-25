// weather.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '9f9e85cae6ff2ddada28182540e989e6';
  private apiUrl = 'https://localhost:44341/api/weather/';

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<any> {
    const params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('appid', this.apiKey);
    console.log(params);

    return this.http.get(this.apiUrl, { params });
  }

  async getWeather(cityName: string) {
    const apiUrl = `${this.apiKey, cityName}`;
    try {
      const response = await this.http.get(apiUrl).toPromise();
      return response;
    } catch (error) {
      console.error('Erro ao obter dados do clima:', error);
      throw error;
    }
  }
}
