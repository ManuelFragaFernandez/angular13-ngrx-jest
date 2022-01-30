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

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // console.log(this.data);
  }

  navigate(url: string) {
    // this.router.navigate(relativeTo:, { queryParams: { id: this.idTrazabilidad } });

    this.router.navigate([url], { queryParams: { id: this.data.makeId }, relativeTo: this.route });
  }
}
