import { Home } from './../model/home';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomesService {

  private readonly API = '/assets/homes.json';
  constructor(private httpClient: HttpClient) { }

list(){
    return this.httpClient.get<Home[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(homes => console.log(homes))
    )
  }
}
