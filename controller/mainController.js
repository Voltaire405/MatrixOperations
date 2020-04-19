//nodo
var nodeValues = [baseDim.sq_base_x, baseDim.sq_base_x + 60, baseDim.sq_base_x + 2 * 60, baseDim.sq_base_x + 3 * 60, baseDim.sq_base_y,
    baseDim.sq_base_y, baseDim.sq_base_y, baseDim.sq_base_y, baseDim.rec_base_x, baseDim.rec_base_y, '', '', '', '', 20, baseDim.label_sq_top,
    baseDim.label_sq_left, baseDim.label_sq_top, baseDim.label_sq_left + 60, baseDim.label_sq_top, baseDim.label_sq_left + 2 * 60, baseDim.label_sq_top,
    baseDim.label_sq_left + 3 * 60, baseDim.label_rec_top, baseDim.label_rec_left
];
//label for head nodes
var nodesLabelValues = [baseDim.label_top, baseDim.label_left, baseDim.label_value_base];
//array down
var downArrowValues = [baseDim.downline_base1, baseDim.downline_base2, baseDim.downarrow_base1, baseDim.downarrow_base2, baseDim.downarrow_base3,
    baseDim.downarrow_base4
];
//rightArrow
var rightArrowValues = [
    rightArrowBaseValues.M1a, rightArrowBaseValues.M1b, rightArrowBaseValues.M2a, rightArrowBaseValues.M2b,
    rightArrowBaseValues.L1a, rightArrowBaseValues.L1b, rightArrowBaseValues.L2a, rightArrowBaseValues.L2b,
    rightArrowBaseValues.L2c, rightArrowBaseValues.L2d, rightArrowBaseValues.L2e, rightArrowBaseValues.L2f
];
var dim = document.getElementById('dim');
var rowx = document.getElementById('row');
var column = document.getElementById('column');
var val = document.getElementById('value');
var count = document.getElementById('counter');
var matrixByCells = document.getElementById('rep2');
var matriz;
var determinant;
var symmetric;
var chair;
var mat = [];
var n = 0;
//Events
document.getElementById('settingPanel').onsubmit = function () {
    if (!(column.value <= dim.value && rowx.value <= dim.value)) {
        alert('Límites iniciales incorrectos!, revise las coordenadas ingresadas por favor.');
        return false;
    }
    //debugger;
    if (n === 0) {
        n = dim.value;
        mat = mat.fillMatrix(n);
        dim.setAttribute('disabled', true);
        document.getElementById('printBtn').style.display = 'inline';
    }
    if (mat[rowx.value][column.value] === 0) {
        mat[rowx.value][column.value] = parseInt(val.value);
        mat[rowx.value][0]++;
        mat[0][column.value]++;
        count.value++;
    }
    else {
        alert('¡Posición ocupada! Ingrese otras coordenadas por favor.');
    }
    return false;
};
document.getElementById('printBtn').onclick = function () {
    drawLinkedList();
    createTable(mat.fitArray());
    document.getElementById('settingPanel').style.display = 'none';
    document.getElementById('operationsPanel').style.display = 'block';
    document.getElementById('representation').style.display = 'flex';
    window.scrollTo(0, 0);
    matriz = new MatrizForma1(n, n);
    matriz.convertirAMatrizForma1(mat);
    determinant = matriz.determinante();
    symmetric = matriz.simetrica();
    chair = matriz.puntoSilla();
};
document.getElementById('clearBtn').onclick = function () {
    window.location.reload(true);
};
function calculateSimmetry() {
    alert("La matriz " + new Boolean().getMeaning(symmetric) + " es simétrica");
}
function calculateDeterminant() {
    alert("El Determinante es " + determinant);
}
function isChair() {
    if (chair.length > 1) {
        alert("La matriz tiene punto de silla y está en la fila " + chair[1] +
            ", columna " + chair[2] + " y su valor es " + chair[3]);
    }
    else {
        alert("La matriz NO tiene punto de silla");
    }
}
