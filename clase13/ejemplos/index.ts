const list: Array<number> = [2,3,4,5]; //La primer diferencia entre TS y JS es que hay que especificar el tipo de dato que voy a usar

list.map((x: number) =>  x * x).forEach((x:number) => console.log(x));