import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

export const routes: Routes = [
  { path: '', redirectTo: '/weather', pathMatch: 'full' }, // Rota padrão
  { path: 'weather', component: WeatherForecastComponent }, // Rota para o componente de previsão do tempo
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/weather', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
