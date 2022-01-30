import { make } from '../make';
import { model } from '../model';
import { MakesFactory } from './makesFactory';

export interface modelHandler {
  Model_Name: string;
}

export interface getMakeModelsHandler {
  Results: modelHandler[];
}

export class GetMakeModelsFactory {
  public results: model[] = [];

  constructor({ Results }: getMakeModelsHandler) {
    this.results = Results.map(({ Model_Name }) => {
      return { modelName: Model_Name };
    });
  }
}
