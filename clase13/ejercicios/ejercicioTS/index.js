// App color aleatorio
var getNumb0a255 = function () { return Math.floor(Math.random() * 256); }; //Esta funcion hace un return de un tipo de dato number
var Color = /** @class */ (function () {
    function Color() {
    }
    Color.prototype.get = function () {
        var color = "rgb(".concat(getNumb0a255(), ",").concat(getNumb0a255(), ",").concat(getNumb0a255(), ")"); //Las template strings siempre tiran string por eso no se especifica
        return color;
    };
    return Color;
}());
var color = new Color();
console.log(color.get());
