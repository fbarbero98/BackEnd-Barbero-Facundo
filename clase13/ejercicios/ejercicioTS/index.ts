// App color aleatorio

const getNumb0a255 = ():number => Math.floor(Math.random() * 256) //Esta funcion hace un return de un tipo de dato number

class Color {
    get():string { //Nos tira un tipo de dato string
        let color: string = `rgb(${getNumb0a255()},${getNumb0a255()},${getNumb0a255()})` //Las template strings siempre tiran string por eso no se especifica
        return color
    }
}

const color:Color = new Color();
console.log(color.get());

