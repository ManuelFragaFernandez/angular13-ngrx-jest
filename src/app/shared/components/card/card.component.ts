import { Component, HostBinding, Input, OnInit } from '@angular/core';

export interface cardInfo {
  makeId: number;
  makeName?: string;
  vehichleTypeId?: number;
  vehicleTypeName?: string;
  modelId?: number;
  modelName?: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @HostBinding('card__component') card__component = true;

  @Input() data!: cardInfo;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.data);
  }
}
