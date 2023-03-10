class Tv {
   //Atributos
   private _brand: string;
   private _size: number;
   private _resolution: number;
   private _connections: string[];
   private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: number, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  public turnOn(): void {
    console.log({ brand: this._brand, size: this._size, resolution: this._resolution, connections: this._connections });
    
  }

  
  public get getConnectedTo() : string | undefined{
    return this._connectedTo;
  }

  public set setConnectedTo(value: string) {
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const TV1 = new Tv('TCL', 32, 3200, ['HDMI', 'USB', 'ETHERNET']);
TV1.turnOn();
TV1.setConnectedTo = 'USB';
console.log('Connected to: ', TV1.getConnectedTo);
