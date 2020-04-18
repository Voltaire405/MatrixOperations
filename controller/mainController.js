//nodo
const nodeValues = [baseDim.sq_base_x, baseDim.sq_base_x + 60, baseDim.sq_base_x + 2 * 60, baseDim.sq_base_x + 3 * 60, baseDim.sq_base_y,
    baseDim.sq_base_y, baseDim.sq_base_y, baseDim.sq_base_y, baseDim.rec_base_x, baseDim.rec_base_y, '', '', '', '', 20, baseDim.label_sq_top,
    baseDim.label_sq_left, baseDim.label_sq_top, baseDim.label_sq_left + 60, baseDim.label_sq_top, baseDim.label_sq_left + 2 * 60, baseDim.label_sq_top,
    baseDim.label_sq_left + 3 * 60, baseDim.label_rec_top, baseDim.label_rec_left
];

//label for head nodes
var nodesLabelValues = [baseDim.label_top, baseDim.label_left, baseDim.label_value_base];

//array down
const downArrowValues = [baseDim.downline_base1, baseDim.downline_base2, baseDim.downarrow_base1, baseDim.downarrow_base2, baseDim.downarrow_base3,
    baseDim.downarrow_base4
];

//rightArrow

const rightArrowValues = [
    rightArrowBaseValues.M1a, rightArrowBaseValues.M1b, rightArrowBaseValues.M2a, rightArrowBaseValues.M2b,
    rightArrowBaseValues.L1a, rightArrowBaseValues.L1b, rightArrowBaseValues.L2a, rightArrowBaseValues.L2b,
    rightArrowBaseValues.L2c, rightArrowBaseValues.L2d, rightArrowBaseValues.L2e, rightArrowBaseValues.L2f
];

const dim = document.getElementById('dim');
const rowx = document.getElementById('row');
const column = document.getElementById('column');
const val = document.getElementById('value');
const count = document.getElementById('counter');
const matrixByCells = document.getElementById('rep2');

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
    } else {
        alert('¡Posición ocupada! Ingrese otras coordenadas por favor.')
    }

    console.log(mat);

    return false;
}

document.getElementById('printBtn').onclick = function () {    
    drawLinkedList();    
    createTable(mat.fitArray());
    document.getElementById('settingPanel').style.display = 'none';
    document.getElementById('operationsPanel').style.display = 'block';
    document.getElementById('representation').style.display = 'flex';
    window.scrollTo(0,0);
}

document.getElementById('clearBtn').onclick = function () {
    window.location.reload(true);
}