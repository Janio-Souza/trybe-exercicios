import { IDrive } from './interfaces';

export default class Car implements IDrive {
  drive(): void {
    console.log('Driver a Car');
  }
}