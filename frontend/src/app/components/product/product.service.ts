import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({     // este decorator quer dizer que ela pode ser injetada em outras classes
  providedIn: 'root'      // providedIn - significa qu eesse service é um singleton (classe que somente tem uma instância)
})
export class ProductService {

  baseUrl = "http://localhost:8082/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }   // service http para injetar o httpcliente para que possamos utilizar ele dentro da nossa funcionalidade da aplicação

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'OK!', {   // (mensagem, action, configurações)
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']      // classes do css que podem ser aplicadas
    })
  }

  create(product: Product): Observable<Product>{    // nova função para ser responsável por inserir no nosso back-end o novo produto
    return this.http.post<Product>(this.baseUrl, product).pipe(   // mandar uma requisção HTTP para o nosso back-end inserir um produto. Interagindo com nosso back-end
      map ((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }   // este post vai retornar um observeble

  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro!", true)
    return EMPTY;
  }

  read(): Observable<Product[]>{      // método para leitura de dados do nosso back end
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(id: number): Observable<Product>{
    const url = `${this.baseUrl}/${id}`    // recebe uma template string ( as duas crases `` ) 
    return this.http.get<Product>(url)    // fazer a leitura de um get passando uma url como parâmetro. URL base + ID do produto
  }

  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }

  delete(id: number): Observable<Product>{    // para o delete não precisa passar o produto inteiro, somente o ID
    const url = `${this.baseUrl}/${id}`;      // base URL e o id para a exclusão
    return this.http.delete<Product>(url);
  }
}
