import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expert-reparation',
  templateUrl: './expert-reparation.component.html',
  styleUrls: ['./expert-reparation.component.css']
})
export class ExpertReparationComponent implements OnInit {
 
  constructor(private _formBuilder: FormBuilder, private fb: FormBuilder) { }


  
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  user : any = [{name: 'Barrouta Zouhaier'},];
 
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nom: ['', Validators.required],
      expert: ['', Validators.required],
      refExpert: ['', Validators.required],
      dateMission: ['', Validators.required],
      aderesse: ['', Validators.required],
      text: ['', Validators.required],
      fax: ['', Validators.required],
      mandat: ['', Validators.required],
      dateacc: ['', Validators.required],
      assure: ['', Validators.required],
      immat: ['', Validators.required],
      contrat: ['', Validators.required],
      nDos: ['', Validators.required],
      tiers: ['', Validators.required],
      vehTiers: ['', Validators.required],
      dos: ['', Validators.required],
      cont: ['', Validators.required],
      adverse: ['', Validators.required],
      exam: ['', Validators.required],
      lieu: ['', Validators.required],
      observ: ['', Validators.required],
      expertise: ['', Validators.required],
      marque: ['', Validators.required],
      type: ['', Validators.required],
      Puiss: ['', Validators.required],
      index: ['', Validators.required],
      genre: ['', Validators.required],
      couleur: ['', Validators.required],
      etat: ['', Validators.required],
      immob: ['', Validators.required]

    });
    this.secondFormGroup = this._formBuilder.group({
      pays: ['', Validators.required],
      lieu: ['', Validators.required]
    });
  }
  
  printPage() {
    window.print();
  }



  public show:boolean = false;
  public buttonName:any = 'Afficher le rapport';

 

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Masquer le rapport";
    else
      this.buttonName = "Afficher le rapport";
  }
}