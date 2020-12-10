var size = 0;
var placement = 'point';
function categories_tuberia_8(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'RED BAJA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(146,239,83,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RED MEDIA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(212,180,82,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RED_ALTA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(89,215,146,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sist_COSTA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(50,174,227,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SRC1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(144,128,214,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SRC2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(210,21,43,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(236,138,233,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_tuberia_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("ID_SIST");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_tuberia_8(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
