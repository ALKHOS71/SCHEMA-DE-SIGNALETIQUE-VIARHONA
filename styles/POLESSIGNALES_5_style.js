var size = 0;
var placement = 'point';

var style_POLESSIGNALES_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "14.3px \'Arial\', sans-serif";
    var labelFill = "#00008e";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.5000000000000013;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Nom") !== null) {
        labelText = String(feature.get("Nom"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.86666 + size, points: 5,
            radius2: 2.93333, stroke: new ol.style.Stroke({color: 'rgba(0,31,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,31,1,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
