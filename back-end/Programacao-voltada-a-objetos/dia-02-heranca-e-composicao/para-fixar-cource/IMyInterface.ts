interface MyInterface {
  MyNumber: number;
  myFunc(myParam: number): string;
}

class MyClasse implements MyInterface {

  constructor(public MyNumber: number) { }
  myFunc(myParam: number): string {
  return  `Return MyNumber + myParam ${ this.MyNumber + myParam }`
  }

}

const NewObject = new MyClasse(2);
console.log(NewObject.MyNumber);
console.log(NewObject.myFunc(4));

