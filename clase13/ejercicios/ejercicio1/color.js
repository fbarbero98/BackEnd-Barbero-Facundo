// App color aleatorio

const getNum0a255 = () => Math.floor(Math.random() * 256)

class Color {
    get() {
        let color = `rgb(${getNum0a255()},${getNum0a255()},${getNum0a255()})`
        return color
    }
}

const color = new Color()
console.log(color.get())


//El comando para hacer el build lo hicimos nuevo ene l package.json, se llama ejercicio