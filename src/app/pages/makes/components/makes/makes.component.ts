import { Component, HostBinding, OnInit } from '@angular/core';
import { filter, map, take, tap } from 'rxjs';
import { getAllMakesFactory } from '../../interfaces/handlers/getAllMakesFactory';
import { make } from '../../interfaces/make';
import { MakesService } from '../../services/makes.service';

type makeObject = {};

@Component({
  selector: 'app-makes',
  templateUrl: './makes.component.html',
  styleUrls: ['./makes.component.scss'],
})
export class MakesComponent implements OnInit {
  @HostBinding('class.makes') makes: boolean = true;
  // arrayPrueba = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // makesList!: makeObject;

  totalResults: number = 0;
  makesList: make[] = [];

  constructor(private makesService: MakesService) {}

  ngOnInit(): void {
    this.makesService
      .getAllMakes()
      .pipe(
        map((makesHandler) => new getAllMakesFactory(makesHandler)),
        take(100)
      )
      .subscribe((makesResult) => {
        this.totalResults = makesResult.count;
        this.makesList = makesResult.results.slice(0, 99);

        console.log(this.makesList);
      });
  }
}

// searchByName(){

// }
