import { Person } from "./Person";

// Herança
export default class RangerRed extends Person{
  private _force: number;
  private _agilidade: number;
  constructor(name: string, energy: number) {
    super(name, energy);
    this._agilidade = 30;
    this._force = 45;
    this._attack = 20;
  }
}