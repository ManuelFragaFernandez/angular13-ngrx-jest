import { Component, HostBinding, OnInit } from '@angular/core';
import { filter, map, tap } from 'rxjs';
import { getAllMakesHandler } from './interfaces/handlers/getAllMakesHandler';
import { makes } from './interfaces/makes';
import { MakesService } from './services/makes.service';

type makeObject = {};

@Component({
	selector: 'app-makes',
	templateUrl: './makes.component.html',
	styleUrls: ['./makes.component.scss']
})
export class MakesComponent implements OnInit {
	@HostBinding('makes') makes = true;
	// arrayPrueba = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	// makesList!: makeObject;

	totalResults: number = 0;
	makesList: makes[] = [];

	constructor(private makesService: MakesService) {}

	ngOnInit(): void {
		this.makesService
			.getAllMakes()
			.pipe(map(({ Results }) => Results.slice(0, 99)))
			.subscribe((makesResult) => {
				// this.totalResults = makesResult.Count;
				this.makesList = makesResult;

				console.log(this.makesList);
			});
	}
}
