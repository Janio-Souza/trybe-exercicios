class Superclass{
  IsSuper: boolean;
  constructor() {
    this.IsSuper = true;
  }

  public sayHello(): void {
    console.log('Ola mundo');
    
  }
}

class Subclass extends Superclass{
  constructor() {
    super();
    this.IsSuper = false;
  }
 }

const myFunc = (object: Superclass) => {
  object.sayHello();
  if(object.IsSuper === false) {
  return console.log('IsSuper False');    
  }
  console.log('IsSuper True');
  
}

const sup = new Superclass();
const sub = new Subclass();

myFunc(sup);
myFunc(sub);