import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { Product } from '../table/product';
import { ProductService } from '../table/productservice.service';

@Component({
  selector: 'app-expert-visio',
  templateUrl: './expert-visio.component.html',
  styleUrls: ['./expert-visio.component.css']
})
export class ExpertVisioComponent implements OnInit {

  products: Product[] = [];
  productsPrime : any = [{first: '1111111'},];
  user : any = [{name: 'Barrouta Zouhaier'},];
 
  
  constructor(public productService: ProductService, public sharedService : SharedService,private router: Router) { }

  ngOnInit(): void {
    console.log(this.sharedService.display);
   
      this.productService.getProductsSmall().then(data => {
        this.products = data
        this.productsPrime =  this.products;
      console.log(this.productsPrime,this.products)
      })
  }

  
}
