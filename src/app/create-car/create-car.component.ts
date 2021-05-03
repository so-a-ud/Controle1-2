import { Component, OnInit } from '@angular/core';
import{
AbstractControl,
FormBuilder,
FormGroup,
Validators,
}from '@angular/forms';

import { ICar } from '../models/Icar';
import{CarsService} from '../services/cars.service';
@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss']
})
export class CreateCarComponent implements OnInit {
  marque_Voiture:AbstractControl;
  n_immatricule:AbstractControl;
  nbr_siege:AbstractControl;
  couleur_voiture:AbstractControl;
  carsForm:FormGroup;
  cars:ICar[]=[];
  carsServices: any;
  CarsService: any;

  constructor(private formBuilder: FormBuilder,private CarsServices : CarsService) { 
    this.carsForm = this.formBuilder.group({
      marque_Voiture: ['', [Validators.required]],
      n_immatricule: ['', [Validators.required]],
      nbr_siege:['', [Validators.required]],
      couleur_voiture:['', [Validators.required]],
      
    });
    

    this.marque_Voiture = this.carsForm.controls.marque_Voiture;
    this.n_immatricule = this.carsForm.controls.n_immatricule;
    this.nbr_siege = this.carsForm.controls.nbr_siege;
    this.couleur_voiture = this.carsForm.controls.couleur_voiture;
  }

  onCreate() {
    console.log(this.carsForm.value);
    this.cars.push(this.carsForm.value);
    this.CarsService.storeCar(this.carsForm.value);
  }
  

  ngOnInit(): void {
  }

}
