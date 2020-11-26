import { HeaderData } from './../footer/header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'      // uma única instancia deste service em toda nossa aplicação
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({     // behavior subject vai detectar sempre que houver mudanças nos valores internos
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData){
    this._headerData.next(headerData)
  }

}
