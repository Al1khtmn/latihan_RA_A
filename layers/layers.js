var wms_layers = [];


        var lyr_Googlesatelite_0 = new ol.layer.Tile({
            'title': 'Google satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_RightSide_1 = new ol.format.GeoJSON();
var features_RightSide_1 = format_RightSide_1.readFeatures(json_RightSide_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RightSide_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RightSide_1.addFeatures(features_RightSide_1);
var lyr_RightSide_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RightSide_1, 
                style: style_RightSide_1,
                interactive: true,
    title: 'Right Side<br />\
    <img src="styles/legend/RightSide_1_0.png" /> 1<br />\
    <img src="styles/legend/RightSide_1_1.png" /> 5001<br />\
    <img src="styles/legend/RightSide_1_2.png" /> 5002<br />\
    <img src="styles/legend/RightSide_1_3.png" /> 5003<br />\
    <img src="styles/legend/RightSide_1_4.png" /> 5004<br />\
    <img src="styles/legend/RightSide_1_5.png" /> 5005<br />\
    <img src="styles/legend/RightSide_1_6.png" /> 5006<br />'
        });
var format_Left_side_2 = new ol.format.GeoJSON();
var features_Left_side_2 = format_Left_side_2.readFeatures(json_Left_side_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Left_side_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Left_side_2.addFeatures(features_Left_side_2);
var lyr_Left_side_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Left_side_2, 
                style: style_Left_side_2,
                interactive: true,
    title: 'Left_side<br />\
    <img src="styles/legend/Left_side_2_0.png" /> 1<br />\
    <img src="styles/legend/Left_side_2_1.png" /> 5001<br />\
    <img src="styles/legend/Left_side_2_2.png" /> 5002<br />\
    <img src="styles/legend/Left_side_2_3.png" /> 5003<br />\
    <img src="styles/legend/Left_side_2_4.png" /> 5004<br />\
    <img src="styles/legend/Left_side_2_5.png" /> 5005<br />\
    <img src="styles/legend/Left_side_2_6.png" /> 5006<br />'
        });

lyr_Googlesatelite_0.setVisible(true);lyr_RightSide_1.setVisible(true);lyr_Left_side_2.setVisible(true);
var layersList = [lyr_Googlesatelite_0,lyr_RightSide_1,lyr_Left_side_2];
lyr_RightSide_1.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Vdist': 'Vdist', 'Lenght': 'Lenght', 'Grade': 'Grade', });
lyr_Left_side_2.set('fieldAliases', {'Layer': 'Layer', 'EntityHand': 'EntityHand', 'Vdist': 'Vdist', 'Lenght': 'Lenght', 'Grade': 'Grade', });
lyr_RightSide_1.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', 'Vdist': 'TextEdit', 'Lenght': 'TextEdit', 'Grade': 'TextEdit', });
lyr_Left_side_2.set('fieldImages', {'Layer': 'TextEdit', 'EntityHand': 'TextEdit', 'Vdist': '', 'Lenght': '', 'Grade': '', });
lyr_RightSide_1.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Vdist': 'inline label', 'Lenght': 'inline label', 'Grade': 'inline label', });
lyr_Left_side_2.set('fieldLabels', {'Layer': 'no label', 'EntityHand': 'no label', 'Vdist': 'inline label', 'Lenght': 'inline label', 'Grade': 'inline label', });
lyr_Left_side_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});