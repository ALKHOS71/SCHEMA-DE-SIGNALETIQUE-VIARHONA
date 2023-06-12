var wms_layers = [];


        var lyr_BDOrthoIGN_0 = new ol.layer.Tile({
            'title': 'BDOrtho IGN',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://openstreetmap.fr/bdortho">BDOrtho IGN</a>',
                url: 'https://proxy-ign.openstreetmap.fr/94GjiyqD/bdortho/{z}/{x}/{y}.jpg'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EPCI_2 = new ol.format.GeoJSON();
var features_EPCI_2 = format_EPCI_2.readFeatures(json_EPCI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPCI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCI_2.addFeatures(features_EPCI_2);
var lyr_EPCI_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPCI_2, 
                style: style_EPCI_2,
                interactive: false,
                title: '<img src="styles/legend/EPCI_2.png" /> EPCI'
            });
var format_VIARHONATRACEENPROJET_3 = new ol.format.GeoJSON();
var features_VIARHONATRACEENPROJET_3 = format_VIARHONATRACEENPROJET_3.readFeatures(json_VIARHONATRACEENPROJET_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIARHONATRACEENPROJET_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIARHONATRACEENPROJET_3.addFeatures(features_VIARHONATRACEENPROJET_3);
var lyr_VIARHONATRACEENPROJET_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VIARHONATRACEENPROJET_3, 
                style: style_VIARHONATRACEENPROJET_3,
                interactive: false,
                title: '<img src="styles/legend/VIARHONATRACEENPROJET_3.png" /> VIARHONA - TRACE EN PROJET'
            });
var format_VIARHONA_4 = new ol.format.GeoJSON();
var features_VIARHONA_4 = format_VIARHONA_4.readFeatures(json_VIARHONA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIARHONA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIARHONA_4.addFeatures(features_VIARHONA_4);
var lyr_VIARHONA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VIARHONA_4, 
                style: style_VIARHONA_4,
                interactive: false,
                title: '<img src="styles/legend/VIARHONA_4.png" /> VIARHONA'
            });
var format_POLESSIGNALES_5 = new ol.format.GeoJSON();
var features_POLESSIGNALES_5 = format_POLESSIGNALES_5.readFeatures(json_POLESSIGNALES_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLESSIGNALES_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLESSIGNALES_5.addFeatures(features_POLESSIGNALES_5);
var lyr_POLESSIGNALES_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLESSIGNALES_5, 
                style: style_POLESSIGNALES_5,
                interactive: true,
                title: '<img src="styles/legend/POLESSIGNALES_5.png" /> POLES  SIGNALES'
            });
var format_DISPOSITIFSDESIGNALISATION_6 = new ol.format.GeoJSON();
var features_DISPOSITIFSDESIGNALISATION_6 = format_DISPOSITIFSDESIGNALISATION_6.readFeatures(json_DISPOSITIFSDESIGNALISATION_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISPOSITIFSDESIGNALISATION_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISPOSITIFSDESIGNALISATION_6.addFeatures(features_DISPOSITIFSDESIGNALISATION_6);
var lyr_DISPOSITIFSDESIGNALISATION_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DISPOSITIFSDESIGNALISATION_6, 
                style: style_DISPOSITIFSDESIGNALISATION_6,
                interactive: true,
    title: 'DISPOSITIFS DE SIGNALISATION<br />\
    <img src="styles/legend/DISPOSITIFSDESIGNALISATION_6_0.png" /> Panneau image<br />\
    <img src="styles/legend/DISPOSITIFSDESIGNALISATION_6_1.png" /> Marquage au sol<br />\
    <img src="styles/legend/DISPOSITIFSDESIGNALISATION_6_2.png" /> Totem "signal"<br />\
    <img src="styles/legend/DISPOSITIFSDESIGNALISATION_6_3.png" /> Mini Totem "signal"<br />\
    <img src="styles/legend/DISPOSITIFSDESIGNALISATION_6_4.png" /> Dv21a<br />\
    <img src="styles/legend/DISPOSITIFSDESIGNALISATION_6_5.png" /> Dv42b<br />\
    <img src="styles/legend/DISPOSITIFSDESIGNALISATION_6_6.png" /> Dv43a<br />'
        });

lyr_BDOrthoIGN_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_EPCI_2.setVisible(true);lyr_VIARHONATRACEENPROJET_3.setVisible(true);lyr_VIARHONA_4.setVisible(true);lyr_POLESSIGNALES_5.setVisible(true);lyr_DISPOSITIFSDESIGNALISATION_6.setVisible(true);
var layersList = [lyr_BDOrthoIGN_0,lyr_OpenStreetMap_1,lyr_EPCI_2,lyr_VIARHONATRACEENPROJET_3,lyr_VIARHONA_4,lyr_POLESSIGNALES_5,lyr_DISPOSITIFSDESIGNALISATION_6];
lyr_EPCI_2.set('fieldAliases', {'NOM_EPCI': 'NOM_EPCI', });
lyr_VIARHONATRACEENPROJET_3.set('fieldAliases', {'id': 'id', });
lyr_VIARHONA_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_POLESSIGNALES_5.set('fieldAliases', {'Nom': 'Nom', 'Communaut�': 'Communaut�', 'Commune': 'Commune', 'HIERARCHIS': 'HIERARCHIS', });
lyr_DISPOSITIFSDESIGNALISATION_6.set('fieldAliases', {'EPCI': 'EPCI', 'Commune': 'Commune', 'Voirie': 'Voirie', 'Site_1': 'Site_1', 'Site_2': 'Site_2', 'Site_3': 'Site_3', 'Site_4': 'Site_4', 'Site_5': 'Site_5', 'Site_6': 'Site_6', 'Identifian': 'Identifian', 'Carrefour ': 'Carrefour ', 'Code_mât': 'Code_mât', 'Code_lame': 'Code_lame', 'Type': 'Type', 'flèche': 'flèche', 'ID_SC2': 'ID_SC2', 'Logo_écha': 'Logo_écha', 'Mention_1': 'Mention_1', 'ID_site_1': 'ID_site_1', 'Mention_2': 'Mention_2', 'ID_site_2': 'ID_site_2', 'Mention_3': 'Mention_3', 'ID_site_3': 'ID_site_3', 'Mention_4': 'Mention_4', 'ID_site_4': 'ID_site_4', 'Dim. suppo': 'Dim. suppo', 'Dim. lame': 'Dim. lame', 'Maitre ouv': 'Maitre ouv', 'Coût_Mât': 'Coût_Mât', 'Coût_pann': 'Coût_pann', 'Coût_conc': 'Coût_conc', 'Coût_Pose': 'Coût_Pose', 'Coût_TOTA': 'Coût_TOTA', });
lyr_EPCI_2.set('fieldImages', {'NOM_EPCI': 'TextEdit', });
lyr_VIARHONATRACEENPROJET_3.set('fieldImages', {'id': 'TextEdit', });
lyr_VIARHONA_4.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_POLESSIGNALES_5.set('fieldImages', {'Nom': 'TextEdit', 'Communaut�': 'TextEdit', 'Commune': 'TextEdit', 'HIERARCHIS': 'TextEdit', });
lyr_DISPOSITIFSDESIGNALISATION_6.set('fieldImages', {'EPCI': 'TextEdit', 'Commune': 'TextEdit', 'Voirie': 'TextEdit', 'Site_1': '', 'Site_2': '', 'Site_3': '', 'Site_4': '', 'Site_5': '', 'Site_6': '', 'Identifian': 'TextEdit', 'Carrefour ': 'TextEdit', 'Code_mât': 'TextEdit', 'Code_lame': 'TextEdit', 'Type': 'TextEdit', 'flèche': 'TextEdit', 'ID_SC2': 'TextEdit', 'Logo_écha': 'TextEdit', 'Mention_1': 'TextEdit', 'ID_site_1': 'TextEdit', 'Mention_2': 'TextEdit', 'ID_site_2': 'TextEdit', 'Mention_3': 'TextEdit', 'ID_site_3': 'TextEdit', 'Mention_4': 'TextEdit', 'ID_site_4': 'TextEdit', 'Dim. suppo': 'TextEdit', 'Dim. lame': 'TextEdit', 'Maitre ouv': 'TextEdit', 'Coût_Mât': 'TextEdit', 'Coût_pann': 'TextEdit', 'Coût_conc': 'TextEdit', 'Coût_Pose': 'TextEdit', 'Coût_TOTA': 'TextEdit', });
lyr_EPCI_2.set('fieldLabels', {'NOM_EPCI': 'no label', });
lyr_VIARHONATRACEENPROJET_3.set('fieldLabels', {'id': 'inline label', });
lyr_VIARHONA_4.set('fieldLabels', {'name': 'inline label', 'cmt': 'inline label', 'desc': 'inline label', 'src': 'inline label', 'link1_href': 'inline label', 'link1_text': 'inline label', 'link1_type': 'inline label', 'link2_href': 'inline label', 'link2_text': 'inline label', 'link2_type': 'inline label', 'number': 'inline label', 'type': 'inline label', });
lyr_POLESSIGNALES_5.set('fieldLabels', {'Nom': 'inline label', 'Communaut�': 'inline label', 'Commune': 'inline label', 'HIERARCHIS': 'inline label', });
lyr_DISPOSITIFSDESIGNALISATION_6.set('fieldLabels', {'EPCI': 'inline label', 'Commune': 'inline label', 'Voirie': 'inline label', 'Site_1': 'inline label', 'Site_2': 'inline label', 'Site_3': 'inline label', 'Site_4': 'inline label', 'Site_5': 'inline label', 'Site_6': 'inline label', 'Identifian': 'inline label', 'Carrefour ': 'inline label', 'Code_mât': 'inline label', 'Code_lame': 'inline label', 'Type': 'inline label', 'flèche': 'inline label', 'ID_SC2': 'inline label', 'Logo_écha': 'inline label', 'Mention_1': 'inline label', 'ID_site_1': 'inline label', 'Mention_2': 'inline label', 'ID_site_2': 'inline label', 'Mention_3': 'inline label', 'ID_site_3': 'inline label', 'Mention_4': 'inline label', 'ID_site_4': 'inline label', 'Dim. suppo': 'inline label', 'Dim. lame': 'inline label', 'Maitre ouv': 'inline label', 'Coût_Mât': 'inline label', 'Coût_pann': 'inline label', 'Coût_conc': 'inline label', 'Coût_Pose': 'inline label', 'Coût_TOTA': 'inline label', });
lyr_DISPOSITIFSDESIGNALISATION_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});