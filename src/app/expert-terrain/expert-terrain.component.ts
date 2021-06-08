import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { Product } from '../table/product';
import { ProductService } from '../table/productservice.service';


@Component({
  selector: 'app-expert-terrain',
  templateUrl: './expert-terrain.component.html',
  styleUrls: ['./expert-terrain.component.css']
})
export class ExpertTerrainComponent implements OnInit {


  products: Product[] = [];
  productsPrime : any = [{first: '1111111'},];
  user : any = [{name: 'Barrouta Zouhaier'},];
 
  
  
  constructor(private _formBuilder: FormBuilder, private fb: FormBuilder ) { }
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  lastFormGroup: FormGroup;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      options: ['option'],
     
    });
    this.secondFormGroup = this._formBuilder.group({
      heure: ['', Validators.required],
      img: ['', Validators.required],
    });
    this.lastFormGroup = this._formBuilder.group({
     
    });
  }
}