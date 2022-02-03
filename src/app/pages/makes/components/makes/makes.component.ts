import { Component, HostBinding, OnInit } from '@angular/core';
import { filter, map, take, tap } from 'rxjs';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { GetAllMakesFactory } from '../../interfaces/handlers/getAllMakesFactory';
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
  searchValue: string = '';

  currentMakes: make[] = [];
  currentMakesFiltered: make[] = [];

  constructor(private makesService: MakesService, private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.getMakes();
    this.page++;
  }

  getMakesFiltered() {
    let formattedSearch = this.utilsService.formatStringNoSpace(this.searchValue);

    if (formattedSearch.length >= 1) {
      this.currentMakes = [];

      this.makesService
        .getAllMakes()
        .pipe(
          map((makesHandler) => new GetAllMakesFactory(makesHandler)),
          map(({ results }) => {
            const firstMake = this.page * this.makesPerPage;
            const lastMake = (this.page + 1) * this.makesPerPage;
            return results
              .filter(({ makeName }) =>
                this.utilsService.formatStringNoSpace(makeName).includes(formattedSearch)
              )
              .slice(firstMake, lastMake);
          })
        )
        .subscribe((makesResult) => {
          this.currentMakesFiltered = this.currentMakesFiltered.concat(makesResult);
          this.currentMakes = this.currentMakesFiltered;
        });
    } else {
      this.currentMakesFiltered = [];
      this.getMakes();
    }
  }

  getMakes() {
    this.makesService
      .getAllMakes()
      .pipe(
        map((makesHandler) => new GetAllMakesFactory(makesHandler)),
        map(({ results }) => {
          const firstMake = this.page * this.makesPerPage;
          const lastMake = (this.page + 1) * this.makesPerPage;
          return results.slice(firstMake, lastMake);
        })
      )
      .subscribe((makesResult) => {
        this.makesList = this.makesList.concat(makesResult);
        this.currentMakes = this.makesList;
      });
  }

  onScroll() {
    this.getMakesFiltered();
    this.page++;
  }

  clearFilteredMakes() {
    this.currentMakesFiltered = [];
    this.getMakesFiltered();
  }
}
