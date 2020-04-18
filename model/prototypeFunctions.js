/**
 * Añade un método al prototipo string para reemplazar un string por otro,
 * ambos pasados cómo parámetro.
 * @param find cadena de texto a buscar y reemplazar.
 * @param replace cadena de texto que sustituirá otro indicado dentro del string que invoca.
 */
String.prototype.replaceArray = function (find, replace) {
    var replaceString = this;
    for (var i = 0; i < find.length; i++) {
        replaceString = replaceString.replace(find[i], replace[i]);
    }
    return replaceString;
};

Array.prototype.fill = function (zerosNumber) {
    for (let index = 0; index <= zerosNumber; index++) {
        this[index] = 0;
    }
    return this;
}

Array.prototype.fillEmptyString = function (emptyNum) {
    for (let index = 0; index <= emptyNum; index++) {
        this[index] = index + '0';
    }
    return this;
}

Array.prototype.fillMatrix = function (order) {
    for (let index = 0; index <= order; index++) {
        this.push(new Array().fill(order));
    }
    return this;
}

Array.prototype.fitArray = function () {
    let array = new Array();
    for (let index = 1; index < this.length; index++) {
        array.push(this[index].slice(1));                
    }            
    return array;
}
