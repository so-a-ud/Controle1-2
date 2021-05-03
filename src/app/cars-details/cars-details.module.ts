import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsDetailsRoutingModule } from './cars-details-routing.module';
import { CarsDetailsComponent } from './cars-details.component';


@NgModule({
  declarations: [
    CarsDetailsComponent
  ],
  imports: [
    CommonModule,
    CarsDetailsRoutingModule
  ]
})
export class CarsDetailsModule { }
