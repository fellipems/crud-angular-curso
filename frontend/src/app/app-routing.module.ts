import { ProductDeleteComponent } from './components/product-delete/product-delete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';    // caminho do nosso home component. o .ts já é automatico
import { ProductCrudComponent } from './views/product-crud/product-crud.component';   // caminho do component product-crud para colocar no nosso route path
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';

const routes: Routes = [    // todas as rotas e URLs do nosso site ficarão aqui
  {
    path: "",
    component: HomeComponent    // Carregar o componente da home na nossa rota padrão " / "
  },
  {
    path: "products",
    component: ProductCrudComponent        // Carregar o component de produtos na nossa rota /products. A partir daqui podemos referenciar esses path no nosso html de navegação pelo routerLink
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",      // dois pontos " : " Angular vai entender que se trata de parâmetro, ou seja, ele não vai esperar que, de fato em forma literal, esteja :id e sim o id do produto
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
