import { Injectable } from '@angular/core';
import { ICar } from '../models/Icar';
@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars : ICar[] = [];
  constructor() { }
  storeCar(cars : ICar){
    this.cars.push(cars)
    localStorage.setItem("cars",JSON.stringify(this.cars));
  }

  getCar(): Array<ICar> {
    return JSON.parse( localStorage.getItem("cars"));
  }
}
