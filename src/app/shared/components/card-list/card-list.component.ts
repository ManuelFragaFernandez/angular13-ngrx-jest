import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { cardInfo } from '../card/interfaces/cardInfo';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  @HostBinding('class.card__list') cardList = true;

  @Input() cards: cardInfo[] = [];
  @Output() onScroll: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  emitScroll() {
    this.onScroll.next(true);
  }
}
