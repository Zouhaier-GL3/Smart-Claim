import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ProductService } from '../table/productservice.service';
import { Product } from '../table/product';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css']
})
export class TableItemComponent implements OnInit {
  isSubmitted = false;
  elements: any = [
    {first: 'Dossier N° 695231'},
    {first: 'Dossier N° 695231'},
    {first: 'Dossier N° 695231'},
    
  ];
  headElements = ['sdqt'];

  products: Product[] = [];
  productsPrime : any = [];
 
  
  constructor(public productService: ProductService, public sharedService : SharedService,private router: Router) { }

  ngOnInit(): void {
    console.log(this.sharedService.display);
   
      this.productService.getProductsSmall().then(data => {
        this.products = data
        this.productsPrime =  this.products;
      console.log(this.productsPrime,this.products)
      })
      
  
  }

  // submitForm(form: NgForm) {
  //   this.isSubmitted = true;
  //   if(!form.valid) { 
  //   } else {
  //     this.router.navigate(['/terrain']);
  //   }
  //    this.router.navigate(['/visio']);
  // }
  visio(){ this.router.navigate(['/visio']);}
  terrain(){ this.router.navigate(['/terrain']);}
 
}
