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
  currentMakes: make[] = [];
  page: number = 0;
  makesPerPage: number = 100;
  searchValue: string = '';

  constructor(private makesService: MakesService, private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.getMakes();
    this.page++;
  }

  onScroll() {
    this.getMakes();
    this.page++;
  }

  getMakes() {
    this.makesService
      .getAllMakes()
      .pipe(
        map((makesHandler) => new GetAllMakesFactory(makesHandler)),
        tap((getAllMakesResponse) => {
          this.totalResults = getAllMakesResponse.count;
        }),
        map(({ results }) => {
          const firstItem = this.page * this.makesPerPage;
          const lastItem = (this.page + 1) * this.makesPerPage;
          return results.slice(firstItem, lastItem);
        })
      )
      .subscribe((makesResult) => {
        this.makesList = this.makesList.concat(makesResult);
        this.currentMakes = this.makesList;
      });
  }

  getMakesFiltered() {
    console.log(this.makesList);
    console.log(this.currentMakes);

    this.currentMakes = this.makesList.filter(({ makeName }) =>
      this.utilsService
        .formatStringNoSpace(makeName)
        .includes(this.utilsService.formatStringNoSpace(this.searchValue))
    );
    console.log(this.makesList);
    console.log(this.currentMakes);
  }
}
