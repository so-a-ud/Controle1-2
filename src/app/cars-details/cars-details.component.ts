import { Component, Input, OnInit } from '@angular/core';
import { ICar } from '../models/Icar';

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.scss']
})
export class CarsDetailsComponent implements OnInit {
  @Input() cars:ICar[]
  

  constructor() { }

  ngOnInit(): void {
  }

}
