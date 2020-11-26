import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';    // importando e chamando o router para fazer a navegação
@Component({
  selector: 'app-product-crud',     // Quando referenciarmos essa tag, esse elemento vai ser instanciado passando o router para construtor e assim podemos usar o router dentro do método navigate
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {     // definindo o tipo do elemento que queremos que ele importe para dentro do meu componente, ou seja, que ele injete para dentro do nosso component. Esperar no construtor essa rota ser injetada pelo angular
    headerService.headerData = {
      title: 'Cadastro de produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
   }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void{
    this.router.navigate(['/products/create'])    // com isso conseguimos, a partir deste método, quando clicar no botão ele irá navegar para a tela indicada no router 
  }
}
