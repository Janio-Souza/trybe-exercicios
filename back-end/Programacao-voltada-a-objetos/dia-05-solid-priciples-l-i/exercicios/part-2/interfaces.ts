// ./interfaces.ts

export interface IDrive {
  drive(): void;
}

export  interface IFly {
  fly(): void
}

export interface IFuturistCar extends IDrive, IFly {};