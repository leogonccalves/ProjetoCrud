import { HomesService } from './../services/homes.service';
import { Component, OnInit } from '@angular/core';
import { Home } from '../model/home';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  homes$: Observable<Home[]>;

  displayedColumns = ['name', 'local'];



  constructor( private HomesService: HomesService) {
    this.homes$ = this.HomesService.list();

  }

  ngOnInit(): void {

  }

}
