import { Component, HostBinding, OnInit } from '@angular/core';
import { filter, map, take, tap } from 'rxjs';
import { getAllMakesFactory } from '../../interfaces/handlers/getAllMakesFactory';
import { make } from '../../interfaces/make';
import { MakesService } from '../../services/makes.service';
@Component({
  selector: 'app-makes',
  templateUrl: './makes.component.html',
  styleUrls: ['./makes.component.scss'],
})
export class MakesComponent implements OnInit {
  @HostBinding('class.makes') makes: boolean = true;

  totalResults: number = 0;
  makesList: make[] = [];
  page: number = 0;
  makesPerPage: number = 100;

  constructor(private makesService: MakesService) {}

  ngOnInit(): void {
    this.getMakes();
  }

  onScroll() {
    console.log('scroll');
    this.getMakes();
  }

  getMakes() {
    this.makesService
      .getAllMakes()
      .pipe(
        map((makesHandler) => new getAllMakesFactory(makesHandler)),
        tap((getAllMakesResponse) => (this.totalResults = getAllMakesResponse.count)),
        map(({ results }) => {
          const firstItem = this.page * this.makesPerPage;
          const lastItem = (this.page + 1) * this.makesPerPage;
          return results.slice(firstItem, lastItem);
        })
      )
      .subscribe((makesResult) => {
        this.makesList = this.makesList.concat(makesResult);
        this.page++;
      });
  }
}
