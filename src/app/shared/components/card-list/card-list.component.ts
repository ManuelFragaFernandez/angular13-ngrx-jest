import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cardInfo } from '../card/card.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  @Input() cards: cardInfo[] = [];
  @Output() onScroll: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  emitScroll() {
    this.onScroll.next(true);
  }
}
