import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
	@HostBinding('card__component') card__component = true;

	@Input() info: any;

	constructor() {}

	ngOnInit(): void {
		console.log(this.info);
	}
}
