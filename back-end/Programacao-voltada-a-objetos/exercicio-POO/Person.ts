// Classe
export class Person {
// Atributos
private _name: string;
private _energy: number;
private _life: number = 0;
protected _attack: number;
public _defense: number;

constructor(name: string, public energy: number) {
  this._name = name;
  this._energy = energy;
  this._attack = 50;
  this._defense = 30;
}


// Metodos Get e Put para atributos privados

public get attack() : number {
  return this._attack;
}

public set attack(values: number) {
  this._attack = values;
}

public get life() : number {
  return this._life;
}

public set life(value: number) {
  this._life = value;
}

// Metodos
status(): void {
  console.log('Guerreiro');
  console.log('nome', this._name);
  console.log('energia', this._energy);
  console.log('ataque', this._attack);
  console.log('defesa', this._defense);
  console.log('vida', this._life);
  
}
treinarAtack(): void {
  this._attack += 2;
}
treinarDefesa(): void{
  this._defense += 2;
}

}






