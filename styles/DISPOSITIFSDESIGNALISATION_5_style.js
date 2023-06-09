var size = 0;
var placement = 'point';
function categories_DISPOSITIFSDESIGNALISATION_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Panneau image':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.200000000000002 + size,
            stroke: new ol.style.Stroke({color: 'rgba(128,67,36,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(172,91,49,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Marquage au sol':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.400000000000002 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(254,0,21,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(246,91,101,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Totem "signal"':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 9.200000000000001 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(87,219,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(1,39,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mini Totem "signal"':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 9.200000000000001 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(1,56,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(97,205,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Dv21a':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.400000000000002 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(255,103,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(249,139,42,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Dv42b':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.400000000000002 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(128,17,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(219,30,42,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Dv43a':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.400000000000002 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(255,187,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(251,255,1,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_DISPOSITIFSDESIGNALISATION_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Type");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Identifian") !== null) {
        labelText = String(feature.get("Identifian"));
    }
    
var style = categories_DISPOSITIFSDESIGNALISATION_5(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
