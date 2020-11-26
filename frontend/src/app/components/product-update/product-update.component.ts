import { Product } from './../product/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService, private router: Router,     // aqui é as injeções de dependências
              private route: ActivatedRoute) {    // receber o id apartir da navegação. A partir da rota atual, pegar o parâmetro/Id

   }   

  ngOnInit(): void {    // na inicialização fazemos uma chamada para o nosso service
    const id = this.route.snapshot.paramMap.get('id')   // pegando os parâmetros da rota via snapshot dentro do maap de parâmetros. Este 'id' é o que definimos no nosso app-routing.module
    this.productService.readById(id).subscribe(product => {   // subscribe esperando receber como resposta um produto
      this.product = product
    });     // quando navegarmos na tela de edição, o frmulário já venha preenchido com os produtos do id que vamos editar
  }

  updateProduct(): void{
    this.productService.update(this.product).subscribe(() => {      // a resposta do update é um observable. 
      this.productService.showMessage('Produto alterado com sucesso!');
      this.router.navigate(['/products']);
    })
  }

  cancel(): void{
    this.router.navigate(['/products']);
  }
}
