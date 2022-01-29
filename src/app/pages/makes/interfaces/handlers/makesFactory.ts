import { make } from '../make';
import { makeHandler } from './getAllMakesFactory';

export class MakesFactory {
  public makeId!: number;
  public makeName!: string;

  constructor({ Make_Id, Make_Name }: makeHandler) {
    this.makeId = Make_Id;
    this.makeName = Make_Name;
  }
}
