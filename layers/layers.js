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
                interactive: true,
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
var format_POLE_5 = new ol.format.GeoJSON();
var features_POLE_5 = format_POLE_5.readFeatures(json_POLE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLE_5.addFeatures(features_POLE_5);
var lyr_POLE_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLE_5, 
                style: style_POLE_5,
                interactive: true,
                title: '<img src="styles/legend/POLE_5.png" /> POLE'
            });
var format_PROGRAMMEDESIGNALISATIONJUIN2023_6 = new ol.format.GeoJSON();
var features_PROGRAMMEDESIGNALISATIONJUIN2023_6 = format_PROGRAMMEDESIGNALISATIONJUIN2023_6.readFeatures(json_PROGRAMMEDESIGNALISATIONJUIN2023_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROGRAMMEDESIGNALISATIONJUIN2023_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROGRAMMEDESIGNALISATIONJUIN2023_6.addFeatures(features_PROGRAMMEDESIGNALISATIONJUIN2023_6);
var lyr_PROGRAMMEDESIGNALISATIONJUIN2023_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROGRAMMEDESIGNALISATIONJUIN2023_6, 
                style: style_PROGRAMMEDESIGNALISATIONJUIN2023_6,
                interactive: true,
    title: 'PROGRAMME DE SIGNALISATION JUIN 2023<br />\
    <img src="styles/legend/PROGRAMMEDESIGNALISATIONJUIN2023_6_0.png" /> Panneau image<br />\
    <img src="styles/legend/PROGRAMMEDESIGNALISATIONJUIN2023_6_1.png" /> Marquage au sol<br />\
    <img src="styles/legend/PROGRAMMEDESIGNALISATIONJUIN2023_6_2.png" /> Totem "signal"<br />\
    <img src="styles/legend/PROGRAMMEDESIGNALISATIONJUIN2023_6_3.png" /> Mini Totem "signal"<br />\
    <img src="styles/legend/PROGRAMMEDESIGNALISATIONJUIN2023_6_4.png" /> Dv21a<br />\
    <img src="styles/legend/PROGRAMMEDESIGNALISATIONJUIN2023_6_5.png" /> Dv42b<br />\
    <img src="styles/legend/PROGRAMMEDESIGNALISATIONJUIN2023_6_6.png" /> Dv43a<br />'
        });

lyr_BDOrthoIGN_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_EPCI_2.setVisible(true);lyr_VIARHONATRACEENPROJET_3.setVisible(true);lyr_VIARHONA_4.setVisible(true);lyr_POLE_5.setVisible(true);lyr_PROGRAMMEDESIGNALISATIONJUIN2023_6.setVisible(true);
var layersList = [lyr_BDOrthoIGN_0,lyr_OpenStreetMap_1,lyr_EPCI_2,lyr_VIARHONATRACEENPROJET_3,lyr_VIARHONA_4,lyr_POLE_5,lyr_PROGRAMMEDESIGNALISATIONJUIN2023_6];
lyr_EPCI_2.set('fieldAliases', {'NOM_EPCI': 'NOM_EPCI', });
lyr_VIARHONATRACEENPROJET_3.set('fieldAliases', {'id': 'id', });
lyr_VIARHONA_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_POLE_5.set('fieldAliases', {'Nom': 'Nom', 'Communaut�': 'Communaut�', 'Commune': 'Commune', 'HIERARCHIS': 'HIERARCHIS', });
lyr_PROGRAMMEDESIGNALISATIONJUIN2023_6.set('fieldAliases', {'ID': 'ID', 'EPCI_impla': 'EPCI_impla', 'Commune_im': 'Commune_im', 'Voie_d_imp': 'Voie_d_imp', 'Code_carre': 'Code_carre', 'Code_mât': 'Code_mât', 'Code_lame': 'Code_lame', 'Type_panne': 'Type_panne', 'Typologie_': 'Typologie_', 'Site1': 'Site1', 'Type1': 'Type1', 'EPCI_Site1': 'EPCI_Site1', 'Site2': 'Site2', 'Type2': 'Type2', 'EPCI_Site2': 'EPCI_Site2', 'Site3': 'Site3', 'Type3': 'Type3', 'EPCI_Site3': 'EPCI_Site3', 'Site4': 'Site4', 'Type4': 'Type4', 'EPCI_Site4': 'EPCI_Site4', 'Site5': 'Site5', 'Type5': 'Type5', 'EPCI_Site5': 'EPCI_Site5', 'Site6': 'Site6', 'Type6': 'Type6', 'EPCI_Site6': 'EPCI_Site6', 'Sens_flèc': 'Sens_flèc', 'ID_SC2': 'ID_SC2', 'Logo_écha': 'Logo_écha', 'Mention_1': 'Mention_1', 'ID_site1': 'ID_site1', 'Mention_2': 'Mention_2', 'ID_site2': 'ID_site2', 'Mention_3': 'Mention_3', 'ID_site3': 'ID_site3', 'Mention_4': 'Mention_4', 'ID_site4': 'ID_site4', 'Dim_suppor': 'Dim_suppor', 'Dim_lame': 'Dim_lame', 'MO': 'MO', 'Coût_Mât': 'Coût_Mât', 'Coût_pann': 'Coût_pann', 'Coût_four': 'Coût_four', 'Coût_grap': 'Coût_grap', 'Coût_Pose': 'Coût_Pose', 'Coût_TOTA': 'Coût_TOTA', });
lyr_EPCI_2.set('fieldImages', {'NOM_EPCI': 'TextEdit', });
lyr_VIARHONATRACEENPROJET_3.set('fieldImages', {'id': 'TextEdit', });
lyr_VIARHONA_4.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_POLE_5.set('fieldImages', {'Nom': 'TextEdit', 'Communaut�': 'TextEdit', 'Commune': 'TextEdit', 'HIERARCHIS': 'TextEdit', });
lyr_PROGRAMMEDESIGNALISATIONJUIN2023_6.set('fieldImages', {'ID': 'TextEdit', 'EPCI_impla': 'TextEdit', 'Commune_im': 'TextEdit', 'Voie_d_imp': 'TextEdit', 'Code_carre': 'TextEdit', 'Code_mât': 'TextEdit', 'Code_lame': 'TextEdit', 'Type_panne': 'TextEdit', 'Typologie_': 'TextEdit', 'Site1': 'TextEdit', 'Type1': 'TextEdit', 'EPCI_Site1': 'TextEdit', 'Site2': 'TextEdit', 'Type2': 'TextEdit', 'EPCI_Site2': 'TextEdit', 'Site3': 'TextEdit', 'Type3': 'TextEdit', 'EPCI_Site3': 'TextEdit', 'Site4': 'TextEdit', 'Type4': 'TextEdit', 'EPCI_Site4': 'TextEdit', 'Site5': 'TextEdit', 'Type5': 'TextEdit', 'EPCI_Site5': 'TextEdit', 'Site6': 'TextEdit', 'Type6': 'TextEdit', 'EPCI_Site6': 'TextEdit', 'Sens_flèc': 'TextEdit', 'ID_SC2': 'TextEdit', 'Logo_écha': 'TextEdit', 'Mention_1': 'TextEdit', 'ID_site1': 'TextEdit', 'Mention_2': 'TextEdit', 'ID_site2': 'TextEdit', 'Mention_3': 'TextEdit', 'ID_site3': 'TextEdit', 'Mention_4': 'TextEdit', 'ID_site4': 'TextEdit', 'Dim_suppor': 'TextEdit', 'Dim_lame': 'TextEdit', 'MO': 'TextEdit', 'Coût_Mât': 'TextEdit', 'Coût_pann': 'TextEdit', 'Coût_four': 'TextEdit', 'Coût_grap': 'TextEdit', 'Coût_Pose': 'TextEdit', 'Coût_TOTA': 'TextEdit', });
lyr_EPCI_2.set('fieldLabels', {'NOM_EPCI': 'no label', });
lyr_VIARHONATRACEENPROJET_3.set('fieldLabels', {'id': 'inline label', });
lyr_VIARHONA_4.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_POLE_5.set('fieldLabels', {'Nom': 'inline label', 'Communaut�': 'inline label', 'Commune': 'inline label', 'HIERARCHIS': 'inline label', });
lyr_PROGRAMMEDESIGNALISATIONJUIN2023_6.set('fieldLabels', {'ID': 'inline label', 'EPCI_impla': 'inline label', 'Commune_im': 'inline label', 'Voie_d_imp': 'inline label', 'Code_carre': 'inline label', 'Code_mât': 'inline label', 'Code_lame': 'inline label', 'Type_panne': 'inline label', 'Typologie_': 'inline label', 'Site1': 'inline label', 'Type1': 'inline label', 'EPCI_Site1': 'inline label', 'Site2': 'inline label', 'Type2': 'inline label', 'EPCI_Site2': 'inline label', 'Site3': 'inline label', 'Type3': 'inline label', 'EPCI_Site3': 'inline label', 'Site4': 'inline label', 'Type4': 'inline label', 'EPCI_Site4': 'inline label', 'Site5': 'inline label', 'Type5': 'inline label', 'EPCI_Site5': 'inline label', 'Site6': 'inline label', 'Type6': 'inline label', 'EPCI_Site6': 'inline label', 'Sens_flèc': 'inline label', 'ID_SC2': 'inline label', 'Logo_écha': 'inline label', 'Mention_1': 'inline label', 'ID_site1': 'inline label', 'Mention_2': 'inline label', 'ID_site2': 'inline label', 'Mention_3': 'inline label', 'ID_site3': 'inline label', 'Mention_4': 'inline label', 'ID_site4': 'inline label', 'Dim_suppor': 'inline label', 'Dim_lame': 'inline label', 'MO': 'inline label', 'Coût_Mât': 'inline label', 'Coût_pann': 'inline label', 'Coût_four': 'inline label', 'Coût_grap': 'inline label', 'Coût_Pose': 'inline label', 'Coût_TOTA': 'inline label', });
lyr_PROGRAMMEDESIGNALISATIONJUIN2023_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});