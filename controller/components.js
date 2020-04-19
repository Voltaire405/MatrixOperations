/**
 * Este archivo contiene los fragmentos de código en forma de variables correspondientes a las ilustraciones de nos nodos,
 * sus conectores y etiquetas para representar matrices dispersas mediante listas ligadas forma 1.
 */

var node = `<g>
<g style="visibility: visible;" transform="translate(0.5,0.5)">
    <rect x="$xsq1" y="$ysq1" width="60" height="60" fill="#ffffff" stroke="#000000" pointer-events="all">
    </rect>
</g>
<g style="">
    <g>
        <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%"
            height="100%">
            <div
                style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: $_litoppx; margin-left: $_lileftpx;">
                <div style="box-sizing: border-box; font-size: 0; text-align: center; ">
                    <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">
                        $li</div>
                </div>
            </div>
        </foreignObject>
    </g>
</g>
<g style="visibility: visible;" transform="translate(0.5,0.5)">
    <rect x="$xrec" y="$yrec" width="240" height="40" fill="#ffffff" stroke="#000000" pointer-events="all">
    </rect>
</g>
<g style="">
    <g>
        <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%"
            height="100%">
            <div
                style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 238px; height: 1px; padding-top: $valtoppx; margin-left: $valleftpx;">
                <div style="box-sizing: border-box; font-size: 0; text-align: center; ">
                    <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">
                        $value</div>
                </div>
            </div>
        </foreignObject>
    </g>
</g>
<g style="visibility: visible;" transform="translate(0.5,0.5)">
    <rect x="$xsq2" y="$ysq2" width="60" height="60" fill="#ffffff" stroke="#000000" pointer-events="all">
    </rect>
</g>
<g style="">
    <g>
        <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%"
            height="100%">
            <div
                style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: $rtoppx; margin-left: $rleftpx;">
                <div style="box-sizing: border-box; font-size: 0; text-align: center; ">
                    <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">
                        $row</div>
                </div>
            </div>
        </foreignObject>
    </g>
</g>
<g style="visibility: visible;" transform="translate(0.5,0.5)">
    <rect x="$xsq3" y="$ysq3" width="60" height="60" fill="#ffffff" stroke="#000000" pointer-events="all">
    </rect>
</g>
<g style="">
    <g>
        <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%"
            height="100%">
            <div
                style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: $coltoppx; margin-left: $colleftpx;">
                <div style="box-sizing: border-box; font-size: 0; text-align: center; ">
                    <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">
                        $column</div>
                </div>
            </div>
        </foreignObject>
    </g>
</g>
<g style="visibility: visible;" transform="translate(0.5,0.5)">
    <rect x="$xsq4" y="$ysq4" width="60" height="60" fill="#ffffff" stroke="#000000" pointer-events="all">
    </rect>
</g>
<g style="">
    <g>
        <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%"
            height="100%">
            <div
                style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 58px; height: 1px; padding-top: $_ldtoppx; margin-left: $_ldleftpx;">
                <div style="box-sizing: border-box; font-size: 0; text-align: center; ">
                    <div
                        style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">
                        $ld</div>
                </div>
            </div>
        </foreignObject>
    </g>
</g>
</g>`;

var label = `<g style="">
<g>
    <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%">
        <div style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: $toppx; margin-left: $leftpx;">
            <div style="box-sizing: border-box; font-size: 0; text-align: center; ">
                <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">
                    <div>$value</div>
                </div>
            </div>
        </div>
    </foreignObject>
</g>
</g>`;

var entryMat = `<g style="visibility: visible;" transform="translate(0.5,0.5)">
<path d="M 558 90 L 406.37 90" fill="none" stroke="white" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden" stroke-width="9"></path>
<path d="M 558 90 L 406.37 90" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"></path>
<path d="M 401.12 90 L 408.12 86.5 L 406.37 90 L 408.12 93.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"></path>
</g>
<g>
                        <foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%">
                            <div style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 90px; margin-left: 585px;">
                                <div style="box-sizing: border-box; font-size: 0; text-align: center; ">
                                    <div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">
                                        <font style="font-size: 20px">mat</font>
                                    </div>
                                </div>
                            </div>
                        </foreignObject>
                    </g>
`;

var downArrow = `<g style="visibility: visible;" transform="translate(0.5,0.5)">
<path d="M 280 $l1 L 280 $l2" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"></path>
<path d="M 280 $v1 L 276.5 $v2 L 280 $v3 L 283.5 $v4 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"></path>
</g>`;

var regNodePointer = `<g style="visibility: visible;" transform="translate(0.5,0.5)">
                    
<path d="M 160 $y1 L 120 $y2 L 120 100 L 153.63 100" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"></path>
<path d="M 158.88 100 L 151.88 103.5 L 153.63 100 L 151.88 96.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"></path>
</g>`;

var rightArrow = `<g style="visibility: visible;" transform="translate(0.5,0.5)">                   
<path d="M $M1a $M1b L $L1a $L1b" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"></path>
<path d="M $M2a $M2b L $L2a $L2b L $L2c $L2d L $L2e $L2f Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"></path>
</g>`;

var nodePointer = `<g style="visibility: visible;" transform="translate(0.5,0.5)">
                    
<path d="M $x1 $y1 L $x2 $y2 L $x3 $y3 L 340 $y4 L 340 $y5" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"></path>
<path d="M 340 $a1 L 336.5 $a2 L 340 $a3 L 343.5 $a4 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"></path>
</g>`;

//valores básicos de los componentes
var baseDim = {
    'sq_base_x': 160,
    'sq_base_y': 40,
    'rec_base_x': 160,
    'rec_base_y': 100,
    'label_top': 160,
    'label_left': 230,
    'downline_base1': 140,
    'downline_base2': 303.63,
    'downarrow_base1': 308.88,
    'downarrow_base2': 301.88,
    'downarrow_base3': 303.63,
    'downarrow_base4': 301.88,
    'label_sq_top': 70,
    'label_sq_left': 161,
    'label_rec_top': 120,
    'label_rec_left': 161,
    'label_value_base': 5
}
const rightArrowBaseValues = {
    'M1a': 400,
    'M1b': 370,
    'M2a': 478.88,
    'M2b': 370,
    'L1a': 473.63,
    'L1b': 370,
    'L2a': 471.88,
    'L2b': 373.5,
    'L2c': 473.63,
    'L2d': 370,
    'L2e': 471.88,
    'L2f': 366.5,
}
const nodePointerBaseValues = {
    'y1': 370,
    'y2': 370,
    'y3': 240,
    'y4': 240,
    'y5': 303.63,
    'a1': 308.88,
    'a2': 301.88,
    'a3': 303.63,
    'a4': 301.88
}

const delta = {
    'delta_y': 270, //distance for object translation
    'delta_x': 320, //horizontal """".
    'sq_edge': 60 //of the square, his lateral side length.
}


//nodo
const strNodePatterns = ['$xsq1', '$xsq2', '$xsq3', '$xsq4', '$ysq1', '$ysq2', '$ysq3', '$ysq4', '$xrec', '$yrec', '$li',
    '$row', '$column', '$ld', '$value', '$_litop', '$_lileft', '$rtop', '$rleft', '$coltop', '$colleft',
    '$_ldtop', '$_ldleft', '$valtop', '$valleft'
];

//label for head nodes
const strLabelPatterns = ['$top', '$left', '$value'];

//array down
const strDownArrowPatterns = ['$l1', '$l2', '$v1', '$v2', '$v3', '$v4', ];

//unity arrow for register nodes
const regNodePointerPatterns = ['$y1', '$y2'];

//rightArrow
const rightArrowPatterns = [
    '$M1a', '$M1b', '$M2a', '$M2b', '$L1a', '$L1b', '$L2a', '$L2b', '$L2c', '$L2d', '$L2e', '$L2f'
];

//nodePointer
const nodePointerPatterns = [
    '$x1', '$x2', '$x3', '$y1', '$y2', '$y3', '$y4', '$y5', '$a1', '$a2', '$a3', '$a4'
];
