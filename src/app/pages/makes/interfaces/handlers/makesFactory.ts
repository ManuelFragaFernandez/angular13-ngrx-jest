import { makeHandler } from './getAllMakesFactory';

export class MakesFactory {
  public makeId!: number;
  public makeName!: string;

  constructor({ Make_ID, Make_Name }: makeHandler) {
    this.makeId = Make_ID;
    this.makeName = Make_Name;
  }
}
