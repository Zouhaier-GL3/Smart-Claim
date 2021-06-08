import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-constat',
  templateUrl: './add-constat.component.html',
  styleUrls: ['./add-constat.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddConstatComponent implements OnInit {


  constructor(private _formBuilder: FormBuilder, private fb: FormBuilder) {}

  show = false;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  BlessesFormGroup:FormGroup;
  DegatsFormGroup:FormGroup;
  TemoinsFormGroup:FormGroup;
  AssureVAFormGroup:FormGroup;
  VehiculeVAFormGroup:FormGroup;
  AssuranceVAFormGroup:FormGroup;
  ConducteurVAFormGroup:FormGroup;
  PointVAFormGroup:FormGroup;
  DegatsVAFormGroup:FormGroup;
  CirconstancesFormGroup:FormGroup;
  CroquisVAFormGroup:FormGroup;
  ObservationsVAFormGroup:FormGroup;
  SignaturesVAFormGroup:FormGroup;
  AssureVBFormGroup:FormGroup;
  VehiculeVBFormGroup:FormGroup;
  AssuranceVBFormGroup:FormGroup;
  ConducteurVBFormGroup:FormGroup;
  PointVBFormGroup:FormGroup;
  DegatsVBFormGroup:FormGroup;
  CirconstancesBFormGroup:FormGroup;
  CroquisVBFormGroup:FormGroup;
  ObservationsVBFormGroup:FormGroup;
  SignaturesVBFormGroup:FormGroup;
  

  

  
  ngOnInit() {
   
    this.firstFormGroup = this._formBuilder.group({
      date: ['', Validators.required],
      heure: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      pays: ['', Validators.required],
      lieu: ['', Validators.required]
    });
    this.BlessesFormGroup = this._formBuilder.group({
      options: ['', Validators.required],
   
 
    });
    this.DegatsFormGroup = this._formBuilder.group({
      option1: ['', Validators.required],
   
      option2: ['', Validators.required]
    });
    this.TemoinsFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      adresse: ['', Validators.required],
      phone: ['', Validators.required],
     
    });
    this.AssureVAFormGroup = this._formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      code: ['', Validators.required],
      phone: ['', Validators.required],
     
    });
    this.VehiculeVAFormGroup = this._formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      code: ['', Validators.required],
      phone: ['', Validators.required],
    });
    this.AssuranceVAFormGroup = this._formBuilder.group({
      nom: ['', Validators.required],
      num: ['', Validators.required],
      cart: ['', Validators.required],
      adresse: ['', Validators.required],
      nom2: ['', Validators.required],
      pays: ['', Validators.required],
      du: ['', Validators.required],
      au: ['', Validators.required],
      agence: ['', Validators.required],
      tel: ['', Validators.required],
      options: ['', Validators.required],
    });
    this.ConducteurVAFormGroup = this._formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      date: ['', Validators.required],
      adresse: ['', Validators.required],
      localisation: ['', Validators.required],
      phone1: ['', Validators.required],
      phone2: ['', Validators.required],
      val: ['', Validators.required],
      
      type: ['', Validators.required],
    });
    this.PointVAFormGroup = this._formBuilder.group({
      commentaire: ['', Validators.required],
     
    });
    this.DegatsVAFormGroup = this._formBuilder.group({
      degats: ['', Validators.required],
     
    });
    this.CirconstancesFormGroup = this._formBuilder.group({
      options1: ['', Validators.required],
      options2: ['', Validators.required],
      options3: ['', Validators.required],
      options4: ['', Validators.required],
      options5: ['', Validators.required],
      options6: ['', Validators.required],
      options7: ['', Validators.required],
      options8: ['', Validators.required],
      options9: ['', Validators.required],
      options10: ['', Validators.required],
      options11: ['', Validators.required],
      options12: ['', Validators.required],
      options13: ['', Validators.required],
      options14: ['', Validators.required],
      options15: ['', Validators.required],
      options16: ['', Validators.required],
      options17: ['', Validators.required],
    
    });
    this.CroquisVAFormGroup = this._formBuilder.group({
      commentaire: ['', Validators.required],
    });
    this.ObservationsVAFormGroup = this._formBuilder.group({
      observations: ['', Validators.required],
    });
    this.SignaturesVAFormGroup = this._formBuilder.group({
      commentaire: ['', Validators.required],
    });
    
    this.AssureVBFormGroup = this._formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      code: ['', Validators.required],
      phone: ['', Validators.required],
     
    });
    this.VehiculeVBFormGroup = this._formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      code: ['', Validators.required],
      phone: ['', Validators.required],
    });
    this.AssuranceVBFormGroup = this._formBuilder.group({
      nom: ['', Validators.required],
      num: ['', Validators.required],
      cart: ['', Validators.required],
      adresse: ['', Validators.required],
      nom2: ['', Validators.required],
      pays: ['', Validators.required],
      du: ['', Validators.required],
      au: ['', Validators.required],
      agence: ['', Validators.required],
      tel: ['', Validators.required],
      options: ['', Validators.required],
    });
    this.ConducteurVBFormGroup = this._formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      date: ['', Validators.required],
      adresse: ['', Validators.required],
      localisation: ['', Validators.required],
      phone1: ['', Validators.required],
      phone2: ['', Validators.required],
      val: ['', Validators.required],
      
      type: ['', Validators.required],
    });
    this.PointVBFormGroup = this._formBuilder.group({
      commentaire: ['', Validators.required],
     
    });
    this.DegatsVBFormGroup = this._formBuilder.group({
      degats: ['', Validators.required],
     
    });
    this.CirconstancesBFormGroup = this._formBuilder.group({
      options1: ['', Validators.required],
      options2: ['', Validators.required],
      options3: ['', Validators.required],
      options4: ['', Validators.required],
      options5: ['', Validators.required],
      options6: ['', Validators.required],
      options7: ['', Validators.required],
      options8: ['', Validators.required],
      options9: ['', Validators.required],
      options10: ['', Validators.required],
      options11: ['', Validators.required],
      options12: ['', Validators.required],
      options13: ['', Validators.required],
      options14: ['', Validators.required],
      options15: ['', Validators.required],
      options16: ['', Validators.required],
      options17: ['', Validators.required],
    
    });
    this.CroquisVBFormGroup = this._formBuilder.group({
      commentaire: ['', Validators.required],
    });
    this.ObservationsVBFormGroup = this._formBuilder.group({
      observations: ['', Validators.required],
    });
    this.SignaturesVBFormGroup = this._formBuilder.group({
      commentaire: ['', Validators.required],
    });
    this.SignaturesVBFormGroup = this._formBuilder.group({
      commentaire: ['', Validators.required],
    });
    
  }
  
  


  
  printPage() {
    window.print();
  }
}

