import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { Product } from './table/product';
import { ProductService } from './table/productservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  elements: any = [
    {first: 'Dossier N° 695231' , etat_dossier: "En attente de confirmation",},
    {first: 'Dossier N° 695231' , etat_dossier: "En cours de traitement"},
    {first: 'Dossier N° 695231' , etat_dossier: "En attente de confirmation",},
    {first: 'Dossier N° 695231' , etat_dossier: "En cours de traitement"}, 
    {first: 'Dossier N° 695231' , etat_dossier: "En attente de confirmation",}, 
    {first: 'Dossier N° 695231' , etat_dossier: "Validé"},
    {first: 'Dossier N° 695231' , etat_dossier: "En cours de traitement"}, 
    {first: 'Dossier N° 695231' , etat_dossier: "En attente de confirmation",}, 
    {first: 'Dossier N° 695231' , etat_dossier: "En attente de confirmation",}, 
    {first: 'Dossier N° 695231' , etat_dossier: "Validé"},
    
  ];
 

  searchTerm = '';
  isCollapsed = true;

  constructor(private router: Router, private data: DataService , private product :ProductService) {
    this.data.getProfile();
  }

  get token() {
    return localStorage.getItem('token');
  }

  collapse() {
    this.isCollapsed = true;
  }

  closeDropdown(dropdown) {
    dropdown.close();
  }

  logout() {
    this.data.user = {};
    localStorage.clear();
    this.router.navigate(['/out']);
  }

  search() {}



  title = 'assurance';
  
  ngOnInit() : void {}

  showPanel() {
    this.ngOnInit();
  }

}
