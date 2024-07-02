import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-forecast',
  standalone: true,
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.scss',
  imports: [CommonModule, FormsModule]
})
export class WeatherForecastComponent {
  city: string = '';
  weatherData: any = null;
  loading: boolean = false;
  error: string = '';

  constructor(private weatherService: WeatherService) {}

  searchWeather() {
    if (!this.city.trim()) {
      this.error = 'Por favor, digite o nome da cidade.';
      return;
    }

    this.loading = true;
    this.weatherService.getWeatherByCity(this.city.trim())
      .subscribe(
        (data) => {
          this.weatherData = data;
          this.loading = false;
          this.error = '';
        },
        (error) => {
          this.error = 'Não foi possível obter o clima da cidade.';
          this.loading = false;
          console.error(error);
        }
      );
  }
}
