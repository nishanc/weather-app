import { HttpClient } from 'aurelia-http-client';
import { autoinject } from "aurelia-framework";
import { WeatherResponce } from 'interfaces/weather';

@autoinject
export class WeatherService {
  constructor(private httpClient: HttpClient){
    this.httpClient.configure(config => {
      config
        .withBaseUrl('https://api.openweathermap.org/data/2.5/');
    });
  }

  getForecast(city: string) {
    const appId = '<your api key>';
    return new Promise((resolve, reject) => {
      this.httpClient.get('forecast?q=' + city + '&appid=' + appId).then(httpResponse=> {
        var forecast: WeatherResponce = JSON.parse(httpResponse.response);
        resolve(forecast.list);
      }).catch( error => {
        reject(error);
      });
    });
  }
}