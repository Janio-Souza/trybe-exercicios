// ./FuturisticCar.ts
import { IFuturistCar } from './interfaces';

export default class FuturisticCar implements IFuturistCar {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}
