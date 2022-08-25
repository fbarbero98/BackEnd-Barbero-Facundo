export const getTime = () => {
    return {
        fyh: new Date().toLocaleString(), //Nos da la fecha y hora
        timestamp: Date.now() //timestamp es otro formato de  dar la fecha
    }
}