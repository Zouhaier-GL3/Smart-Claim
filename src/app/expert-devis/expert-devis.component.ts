import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expert-devis',
  templateUrl: './expert-devis.component.html',
  styleUrls: ['./expert-devis.component.css']
})
export class ExpertDevisComponent implements OnInit {
  user : any = [{name: 'Barrouta Zouhaier'},];
  constructor(private _formBuilder: FormBuilder, private fb: FormBuilder) { }
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      options: ['', Validators.required],
     
    });
    this.secondFormGroup = this._formBuilder.group({
      heure: ['', Validators.required],
      img: ['', Validators.required],
    });
  }
  

}