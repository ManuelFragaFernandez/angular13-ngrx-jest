import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { buttonCardInfo } from './interfaces/buttonsInfo';
import { cardInfo } from './interfaces/cardInfo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @HostBinding('class.card') card = true;

  @Input() data!: cardInfo;
  @Input() buttonsInfo: buttonCardInfo[] = [];

  public cardName: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    for (const property in this.data) {
      if (property !== 'makeId') {
        this.cardName = (this.data as any)[property];
        // this.cardName = this.data[property].toString();
        // this.cardName = this.data.map(value => value[property])
        // console.log(this.cardName);
      }
    }
  }

  navigate(url: string) {
    // this.router.navigate(relativeTo:, { queryParams: { id: this.idTrazabilidad } });

    this.router.navigate([url], { queryParams: { id: this.data.makeId }, relativeTo: this.route });
  }
}
