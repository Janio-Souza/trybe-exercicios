import { IFly } from './interfaces';

export default class AirPlane implements IFly {
  fly(): void {
    console.log('Está Voando');
  }
  
}