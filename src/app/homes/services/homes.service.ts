import { Home } from './../model/home';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomesService {

  constructor(private httpClient: HttpClient) { }

  list(): Home[] {
    return [
      {_id: '1', name: 'Casa vista', local: 'Minas Gerais'}
    ];
  }
}
