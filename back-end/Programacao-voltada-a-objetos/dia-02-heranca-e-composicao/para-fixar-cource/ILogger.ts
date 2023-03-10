interface Logger {
  log(paramet: string): void;
}

class ConsoleLogger implements Logger {
  log(paramet: string): void{
    console.log(paramet);
    
  }
}

class ConsoleLogger2 implements Logger {
  log(paramet: string): void {
    console.log('Logger 2', paramet);
    
  }
}

interface Database {
  Atribut: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public Atribut: Logger = new ConsoleLogger()){ }
  save(key: string, value: string): void {
    this.Atribut.log(`Salvando o valor ${value} na chave ${key}`);
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

database1.save('chave1', 'valor1');
database2.save('chave2', 'valor2');
database3.save('chave3', 'valor3');