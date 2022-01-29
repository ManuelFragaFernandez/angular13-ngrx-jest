import { make } from '../make';
import { MakesFactory } from './makesFactory';

export interface makeHandler {
  Make_Id: number;
  Make_Name: string;
}

export interface getAllMakesHandler {
  Count: number;
  Results: makeHandler[];
}

export class GetAllMakesFactory {
  public count: number;
  public results: make[] = [];

  constructor({ Count, Results }: getAllMakesHandler) {
    this.count = Count;
    this.results = Results.map((make) => new MakesFactory(make));
  }
}
