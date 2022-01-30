import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { cardInfo } from './interfaces/cardInfo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @HostBinding('class.card') card = true;

  @Input() data!: cardInfo;

  @Output() onVehicleTypeClick: EventEmitter<boolean> = new EventEmitter();
  @Output() onModelsClick: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    // console.log(this.data);
  }
}
