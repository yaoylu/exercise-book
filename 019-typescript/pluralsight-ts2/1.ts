let x = (a: number, b: number) => 0;
const y = (a: number) => 0;
x = y; // OK
// y = x; // Error
interface ApiKey {
    id?: number;
    name: string;
  }

const dataType1: ApiKey = {
  id: 1,
  name: 'static',
}

type A = {
    name:string;
}

type B =  {
    id:number;
    name:string;
}

const x1:A = { name: '1' }
const y1:B = { name: '1', id: 1 }

