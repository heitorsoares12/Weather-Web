import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    AppComponent, // Importa o componente standalone
    LoginComponent, // Importa o componente standalone
    WeatherForecastComponent,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent], // Pode ser ajustado com `bootstrapApplication` se necessário
})
export class AppModule {}
