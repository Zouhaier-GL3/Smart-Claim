import { Component, ElementRef, OnInit, VERSION, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { Product } from '../table/product';
import { ProductService } from '../table/productservice.service';


@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.css']
})
export class ExpertComponent implements OnInit {
  isSubmitted = false;
  elements: any = [
    {first: 'Dossier N° 695231'},
    {first: 'Dossier N° 695231'},
    {first: 'Dossier N° 695231'},
    
  ];
  headElements = ['sdqt'];

  products: Product[] = [];
  productsPrime : any = [];
  // modification
 


  constructor(public productService: ProductService, public sharedService : SharedService,private router: Router ) { }

  ngOnInit() {
    console.log(this.sharedService.display);
   
    this.productService.getProductsSmall().then(data => {
      this.products = data
      this.productsPrime =  this.products;
    console.log(this.productsPrime,this.products)
    })

  }
  

  reparation(){ this.router.navigate(['/reparation']);}



  form = new FormGroup({
    options: new FormControl('options'),
    options2: new FormControl('options2'),
   
  });

  setValue() { if (this.form.value.options == 'visio') { return this.form.setValue({options: this.router.navigate(['/visio']) });}
  
   else 
   return this.form.setValue({terrain: this.router.navigate(['/terrain']) });
    };

  setRedirection() { if (this.form.value.options2 == 'visio') { return this.form.setValue({options: this.router.navigate(['/reparation']) });}
  
    else 
    return this.form.setValue({terrain: this.router.navigate(['/repter']) });
     };
  }

  

