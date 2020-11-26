import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
   
  }

  createProduct(): void{  // neste método vamos disparar a chamada para o método que criamos no service
    this.productService.create(this.product).subscribe(() => {    // assim que cadastrarmos um produto, seremos notificados apresentando a mensagem de Produto criado e depois alterado a rota para o /products
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })    // no método subscribe vamos ser notificados quando a resposta chegar
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }
}
