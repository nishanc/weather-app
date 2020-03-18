import { WeatherService } from './services/weather-service'
import { inject } from 'aurelia-framework';
import { List } from 'interfaces/weather';

@inject(WeatherService)
export class App {
  city = 'New York'; // added default city
  forcastlist: List; 
  constructor(private weatherService: WeatherService) {}

  activate() {
    this.forecast();
  }

  forecast() {
    let city = this.city //get the city from user
    this.weatherService.getForecast(city).then(forecast => {
      this.forcastlist = forecast as List;
      console.log(this.forcastlist);
    }).catch(error => {
      console.log(error);
    });
  }
}
