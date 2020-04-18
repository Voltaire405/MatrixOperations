var headNodesNum = 0;
var totalRegNodes = 0;

const graphBody = document.getElementById('graphics_container'); // html tag inside which we'll inject linked list graphs in html code.

/**
 * Renderiza ne pantalla nodo registro de lista ligada de fila o columna.
 * @param {Array} labels Etiquetas con información sobre nodo, ligas, posición y valor.
 */
function createHeadNode(labels) {
    let nodeValuesCopy = Array.from(nodeValues);
    let downArrowValuesCopy = Array.from(downArrowValues);
    let labelValuesCopy = Array.from(nodesLabelValues);
    let downArrowBody;
    let nodeBody;

    //insert downarrow    
    for (let index = 0; index < downArrowValuesCopy.length; index++) {
        downArrowValuesCopy[index] += (headNodesNum - 1) * delta.delta_y;
    }
    downArrowBody = downArrow.replaceArray(strDownArrowPatterns, downArrowValuesCopy);
    graphBody.insertAdjacentHTML('beforeend', downArrowBody)

    const deltaY = headNodesNum * delta.delta_y;
    for (let index = 0; index < nodeValuesCopy.length; index++) {
        //sq translation
        if (index > 3 && index < 8) {
            nodeValuesCopy[index] += deltaY; //y-axis            
        } else {
            if (index == 9) { //translate rec
                nodeValuesCopy[index] += deltaY;
            } else if (index > 9 && index < 14) { //labels assign
                nodeValuesCopy[index] = labels[index - 10];
            } else if (index == 14) {
                nodeValuesCopy[index] = headNodesNum + 1 < totalRegNodes ? (headNodesNum + 1) * 10 : baseDim.label_value_base;
            } else if (index > 14 && index % 2 != 0) {
                nodeValuesCopy[index] += deltaY;
            }
        }
    }

    //insert node into html graph area  
    nodeBody = node.replaceArray(strNodePatterns, nodeValuesCopy);
    graphBody.insertAdjacentHTML('beforeend', nodeBody)

    //insert memoryspace label
    labelValuesCopy[0] += deltaY; //translate label y-axis
    labelValuesCopy[2] = headNodesNum * 10; //generate memory space label
    graphBody.insertAdjacentHTML('beforeend', label.replaceArray(strLabelPatterns, labelValuesCopy));

    headNodesNum++; //increase head node number

    //unify last node and head reg node.
    if (headNodesNum === totalRegNodes) {
        const uniArrowY = nodeValuesCopy[4] + delta.sq_edge;
        let regNodePointerValues = [uniArrowY, uniArrowY];
        graphBody.insertAdjacentHTML('beforeend', regNodePointer.replaceArray(regNodePointerPatterns, regNodePointerValues));
    }
}

/**
 * Renderiza en pantalla Nodo cabeza de lista circular de nodos registro.
 * @param {Array} labels etiquetas a sustituir en el nodo.
 */
function createMainNode(labels) {
    let nodeValuesCopy = Array.from(nodeValues);
    //assign matrix dimension to respective cells.    
    nodeValuesCopy[11] = labels[0];
    nodeValuesCopy[12] = labels[1];
    nodeValuesCopy[14] = labels[2];
    //create base node
    graphBody.insertAdjacentHTML('beforeend', node.replaceArray(strNodePatterns, nodeValuesCopy));
    headNodesNum++;
    //create label mat entry
    graphBody.insertAdjacentHTML('beforeend', label.replaceArray(strLabelPatterns, nodesLabelValues));
    graphBody.insertAdjacentHTML('beforeend', entryMat); //entry mat label

}

/**
 * Renderiza en pantalla nodo de cada elemento distinto de cero de la matriz dispersa.
 * @param {Json} labelsJson diccionario con datos sobre el nodo.
 */
function createHorizontalNode(labelsJson) {
    let rightArrowValuesCopy = Array.from(rightArrowValues);
    let nodeValuesCopy = Array.from(nodeValues);
    let labelValuesCopy = Array.from(nodesLabelValues);
    let rightArrowBody;
    let nodeBody;
    const deltaY = labelsJson.row * delta.delta_y;
    const deltaX = labelsJson.order * delta.delta_x;
    //insert rightArrow    
    for (let index = 0; index < rightArrowValuesCopy.length; index++) {
        //translate arrow
        if ((index + 1) % 2 == 0) {
            rightArrowValuesCopy[index] += (labelsJson.row - 1) * delta.delta_y
        } else {
            rightArrowValuesCopy[index] += (labelsJson.order - 1) * delta.delta_x;
        }
    }
    rightArrowBody = rightArrow.replaceArray(rightArrowPatterns, rightArrowValuesCopy);
    graphBody.insertAdjacentHTML('beforeend', rightArrowBody);


    for (let index = 0; index < nodeValuesCopy.length; index++) {
        //sq translation
        if (index < 8) {
            nodeValuesCopy[index] += index < 4 ? deltaX : deltaY; //y-axis            
        } else {
            if (index < 10) { //translate rec
                nodeValuesCopy[index] += index == 8 ? deltaX : deltaY; //x pos. is 8, y pos. 9
            } else if (index > 14) { //labels position
                nodeValuesCopy[index] += index % 2 == 0 ? deltaX : deltaY;
            }
        }
    }
    //labels
    nodeValuesCopy[10] = labelsJson.li;
    nodeValuesCopy[11] = labelsJson.row;
    nodeValuesCopy[12] = labelsJson.col;
    nodeValuesCopy[13] = labelsJson.ld;
    nodeValuesCopy[14] = labelsJson.value;
    //insert node into html graph area  
    nodeBody = node.replaceArray(strNodePatterns, nodeValuesCopy);
    graphBody.insertAdjacentHTML('beforeend', nodeBody)

    //insert memoryspace label
    labelValuesCopy[0] += deltaY; //translate label y-axis
    labelValuesCopy[1] += deltaX; //translate label x-axis
    labelValuesCopy[2] = labelsJson.row + "" + labelsJson.col; //generate memory space label
    graphBody.insertAdjacentHTML('beforeend', label.replaceArray(strLabelPatterns, labelValuesCopy));

    //add node pointer
    if (labelsJson.isLast) {
        let nodePointerValues = [nodeValuesCopy[3] + 60, nodeValuesCopy[3] + 100, nodeValuesCopy[3] + 100,
            nodePointerBaseValues.y1, nodePointerBaseValues.y2, nodePointerBaseValues.y3, nodePointerBaseValues.y4,
            nodePointerBaseValues.y5, nodePointerBaseValues.a1, nodePointerBaseValues.a2, nodePointerBaseValues.a3,
            nodePointerBaseValues.a4
        ];

        for (let index = 0; index < nodePointerValues.length; index++) { //translate on y-axis        
            if (index > 2) {
                nodePointerValues[index] += (labelsJson.row - 1) * delta.delta_y;
            }
        }

        graphBody.insertAdjacentHTML('beforeend', nodePointer.replaceArray(nodePointerPatterns, nodePointerValues));
    }

}

function drawLinkedList() {
 /*    

    var mat = [
        [0, 2, 2, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 2, 0, 0],
        [2, 1, 2, 0, 0],
        [1, 1, 0, 0, 0]
    ]; */    
    totalRegNodes = n + 1;
    var drawnNodesByRow = new Array().fill(n); //index for row, value for number of draw nodes
    var drawnNodesByCol = new Array().fill(n); //index represent column, value for number of draw nodes
    var liHeadNodes = new Array().fillEmptyString(n);
    var ldHeadNodes = new Array().fillEmptyString(n);
    let element, li, ld, horizontalNodesLabels;

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= n; col++) {
            //render elements node
            element = mat[row][col];
            if (element !== 0) {

                //calculate left link
                drawnNodesByCol[col]++;
                if (drawnNodesByRow[row] === 0) { //first node
                    li = row + '0';
                } else {
                    if (drawnNodesByCol[col] < mat[0][col]) {
                        for (let j = row + 1; j <= n; j++) {
                            if (mat[j][col] != 0) {
                                li = row + "" + j;
                            }
                        }
                    } else {
                        li = col + "0";
                    }
                }

                drawnNodesByRow[row]++;
                //calculate right link
                if (drawnNodesByRow[row] < mat[row][0]) {
                    for (let j = col + 1; j <= n; j++) {
                        if (mat[row][j] != 0) {
                            ld = row + "" + j;
                        }
                    }
                } else { //last node
                    ld = row + '0';
                }

                //replace node labels (add row, col and value)
                //saveNodes.push([li, ld, row, col, mat[row][col]]);
                horizontalNodesLabels = {
                    'li': li,
                    'row': row,
                    'col': col,
                    'ld': ld,
                    'value': mat[row][col],
                    'order': drawnNodesByRow[row],
                    'isLast': drawnNodesByRow[row] === mat[row][0] //is last row element
                }
                createHorizontalNode(horizontalNodesLabels);
                //calculate head nodes left and right links systematically
                if (drawnNodesByCol[col] === 1) { //if node is first value in col.
                    liHeadNodes[col] = row + "" + col;
                }

                if (drawnNodesByRow[row] === 1) { //if node is first value in col.                
                    ldHeadNodes[row] = row + "" + col;
                }
            }
        }
    }

    for (let j = 0; j <= n; j++) {
        if (j === 0) {
            createMainNode([n, n, 10]);
        } else {
            createHeadNode([liHeadNodes[j], j, j, ldHeadNodes[j], j + "0"]);
        }
    }
}

/**
 * Representa la matriz pasada como parámetro mediante celdas.
 * @param {tableData} tableData array con la información para representar la matriz 
 * mediante una tabla.
 */
function createTable(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    tableData.forEach(function (rowData) {
        var row = document.createElement('tr');

        rowData.forEach(function (cellData) {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    matrixByCells.appendChild(table);
}