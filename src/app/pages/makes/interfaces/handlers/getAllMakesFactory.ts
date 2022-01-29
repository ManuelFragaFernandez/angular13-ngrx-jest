import { makes } from '../makes';

export interface getAllMakesHandler {
  Count: number;
  Results: makes[];
}

export class getAllMakesFactory {
  public count: number = 0;
  public results: makes[] = [];

  constructor({ Count, Results }: getAllMakesHandler) {
    this.count = Count;
    this.results = Results;
  }
}
