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
  cityName: string = '';
  weatherData: any = null;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  async onSubmit() {
    console.log("teste");

    if (!this.cityName) {
      this.errorMessage = 'Você precisa digitar uma cidade...';
      return;
    }

    try {
      const weatherInfo = await this.weatherService.getWeatherByCity(this.cityName);
      if (weatherInfo) {
        console.log(weatherInfo);
      } else {
        this.errorMessage = 'Não foi possível localizar a cidade.';
        this.weatherData = null;
      }
    } catch (error) {
      console.error('Erro ao buscar previsão do tempo:', error);
      this.errorMessage = 'Ocorreu um erro ao buscar a previsão do tempo. Por favor, tente novamente mais tarde.';
    }
  }

  showInfo(weatherInfo: any) {
    this.errorMessage = '';

    this.weatherData = {
      city: weatherInfo.name,
      country: weatherInfo.sys.country,
      temp: weatherInfo.main.temp,
      tempMax: weatherInfo.main.temp_max,
      tempMin: weatherInfo.main.temp_min,
      description: weatherInfo.weather[0].description,
      tempIcon: weatherInfo.weather[0].icon,
      windSpeed: weatherInfo.wind.speed,
      humidity: weatherInfo.main.humidity
    };
  }
}
