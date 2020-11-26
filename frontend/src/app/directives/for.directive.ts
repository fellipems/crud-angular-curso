import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {  // implements é pra implementar um ciclo de vida

  @Input('myForEm')
  numbers: number[] = []; // myForEm vai pegar aquilo que está depois do " em " no nosso li do footer.component
   // myForEm vai pegar aquilo que está depois do " em " no nosso li do footer.component

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { 
    // nesta diretiva vamos injetar duas coisas: ViewContainerRef e do TemplateRef
  }

  ngOnInit(): void{
    for(let number of this.numbers){
      this.container.createEmbeddedView(  // Aqui criamos dentro do container um template para cada repetição do laço
        this.template,    // este template vai ser o li que colocamos nossa diretiva
        { $implicit: number })  // este template vai ser exatamente aquilo que queremos aplicar na nossa diretiva. Neste caso o elemento "li". o $implicit é para passarmos um valor para nosso component com o chaves duplas no contexto do nosso HTML
    }
  }
}
