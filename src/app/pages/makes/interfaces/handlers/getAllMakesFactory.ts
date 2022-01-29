import { make } from '../make';

export interface getAllMakesHandler {
  Count: number;
  Results: make[];
}

export class getAllMakesFactory {
  public count: number = 0;
  public results: make[];

  constructor({ Count, Results }: getAllMakesHandler) {
    this.count = Count;
    this.results = Results;
  }
}
