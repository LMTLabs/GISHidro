var wms_layers = [];


        var lyr_GEarth_0 = new ol.layer.Tile({
            'title': 'GEarth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_StamenTerrain_1 = new ol.layer.Tile({
            'title': 'Stamen Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png'
            })
        });

        var lyr_Gmaps_2 = new ol.layer.Tile({
            'title': 'Gmaps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_MUNICIPIOSVE_3 = new ol.format.GeoJSON();
var features_MUNICIPIOSVE_3 = format_MUNICIPIOSVE_3.readFeatures(json_MUNICIPIOSVE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIOSVE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOSVE_3.addFeatures(features_MUNICIPIOSVE_3);
var lyr_MUNICIPIOSVE_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUNICIPIOSVE_3, 
                style: style_MUNICIPIOSVE_3,
                interactive: true,
                title: '<img src="styles/legend/MUNICIPIOSVE_3.png" /> MUNICIPIOS VE'
            });
var format_ESTADOSVE_4 = new ol.format.GeoJSON();
var features_ESTADOSVE_4 = format_ESTADOSVE_4.readFeatures(json_ESTADOSVE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTADOSVE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTADOSVE_4.addFeatures(features_ESTADOSVE_4);
var lyr_ESTADOSVE_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESTADOSVE_4, 
                style: style_ESTADOSVE_4,
                interactive: true,
                title: '<img src="styles/legend/ESTADOSVE_4.png" /> ESTADOS VE'
            });
var format_AduccinPaoCachinche_5 = new ol.format.GeoJSON();
var features_AduccinPaoCachinche_5 = format_AduccinPaoCachinche_5.readFeatures(json_AduccinPaoCachinche_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AduccinPaoCachinche_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AduccinPaoCachinche_5.addFeatures(features_AduccinPaoCachinche_5);
var lyr_AduccinPaoCachinche_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AduccinPaoCachinche_5, 
                style: style_AduccinPaoCachinche_5,
                interactive: true,
                title: '<img src="styles/legend/AduccinPaoCachinche_5.png" /> Aducción Pao Cachinche'
            });
var format_AduccinPaoLaBalsa_6 = new ol.format.GeoJSON();
var features_AduccinPaoLaBalsa_6 = format_AduccinPaoLaBalsa_6.readFeatures(json_AduccinPaoLaBalsa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AduccinPaoLaBalsa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AduccinPaoLaBalsa_6.addFeatures(features_AduccinPaoLaBalsa_6);
var lyr_AduccinPaoLaBalsa_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AduccinPaoLaBalsa_6, 
                style: style_AduccinPaoLaBalsa_6,
                interactive: true,
                title: '<img src="styles/legend/AduccinPaoLaBalsa_6.png" /> Aducción Pao La Balsa'
            });
var format_AGUA_RESIDUAL_7 = new ol.format.GeoJSON();
var features_AGUA_RESIDUAL_7 = format_AGUA_RESIDUAL_7.readFeatures(json_AGUA_RESIDUAL_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGUA_RESIDUAL_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGUA_RESIDUAL_7.addFeatures(features_AGUA_RESIDUAL_7);
var lyr_AGUA_RESIDUAL_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AGUA_RESIDUAL_7, 
                style: style_AGUA_RESIDUAL_7,
                interactive: true,
                title: '<img src="styles/legend/AGUA_RESIDUAL_7.png" /> AGUA_RESIDUAL'
            });
var format_Estanques_8 = new ol.format.GeoJSON();
var features_Estanques_8 = format_Estanques_8.readFeatures(json_Estanques_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estanques_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estanques_8.addFeatures(features_Estanques_8);
var lyr_Estanques_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estanques_8, 
                style: style_Estanques_8,
                interactive: true,
                title: '<img src="styles/legend/Estanques_8.png" /> Estanques'
            });
var format_tuberia_9 = new ol.format.GeoJSON();
var features_tuberia_9 = format_tuberia_9.readFeatures(json_tuberia_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuberia_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuberia_9.addFeatures(features_tuberia_9);
var lyr_tuberia_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tuberia_9, 
                style: style_tuberia_9,
                interactive: true,
    title: 'tuberia<br />\
    <img src="styles/legend/tuberia_9_0.png" /> RED BAJA<br />\
    <img src="styles/legend/tuberia_9_1.png" /> RED MEDIA<br />\
    <img src="styles/legend/tuberia_9_2.png" /> RED_ALTA<br />\
    <img src="styles/legend/tuberia_9_3.png" /> Sist_COSTA<br />\
    <img src="styles/legend/tuberia_9_4.png" /> SRC1<br />\
    <img src="styles/legend/tuberia_9_5.png" /> SRC2<br />\
    <img src="styles/legend/tuberia_9_6.png" /> <br />'
        });
var format_PTAR_10 = new ol.format.GeoJSON();
var features_PTAR_10 = format_PTAR_10.readFeatures(json_PTAR_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTAR_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTAR_10.addFeatures(features_PTAR_10);
var lyr_PTAR_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PTAR_10, 
                style: style_PTAR_10,
                interactive: true,
    title: 'PTAR<br />\
    <img src="styles/legend/PTAR_10_0.png" /> BOMBEO<br />\
    <img src="styles/legend/PTAR_10_1.png" /> BOMBEO LAGO<br />\
    <img src="styles/legend/PTAR_10_2.png" /> EMBALSE<br />\
    <img src="styles/legend/PTAR_10_3.png" /> POTABLE<br />\
    <img src="styles/legend/PTAR_10_4.png" /> TRATAMIENTO<br />\
    <img src="styles/legend/PTAR_10_5.png" /> <br />'
        });

lyr_GEarth_0.setVisible(true);lyr_StamenTerrain_1.setVisible(true);lyr_Gmaps_2.setVisible(true);lyr_MUNICIPIOSVE_3.setVisible(true);lyr_ESTADOSVE_4.setVisible(true);lyr_AduccinPaoCachinche_5.setVisible(true);lyr_AduccinPaoLaBalsa_6.setVisible(true);lyr_AGUA_RESIDUAL_7.setVisible(true);lyr_Estanques_8.setVisible(true);lyr_tuberia_9.setVisible(true);lyr_PTAR_10.setVisible(true);
var layersList = [lyr_GEarth_0,lyr_StamenTerrain_1,lyr_Gmaps_2,lyr_MUNICIPIOSVE_3,lyr_ESTADOSVE_4,lyr_AduccinPaoCachinche_5,lyr_AduccinPaoLaBalsa_6,lyr_AGUA_RESIDUAL_7,lyr_Estanques_8,lyr_tuberia_9,lyr_PTAR_10];
lyr_MUNICIPIOSVE_3.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_ESTADOSVE_4.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_AduccinPaoCachinche_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AduccinPaoLaBalsa_6.set('fieldAliases', {'UserId': 'UserId', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'ACUEDUCTO#': 'ACUEDUCTO#', 'ACUEDUCTO-': 'ACUEDUCTO-', 'ESTACION_B': 'ESTACION_B', });
lyr_AGUA_RESIDUAL_7.set('fieldAliases', {'UserId': 'UserId', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'AGUAS_RESI': 'AGUAS_RESI', 'AGUAS_RE_1': 'AGUAS_RE_1', });
lyr_Estanques_8.set('fieldAliases', {'id': 'id', 'codtGDS': 'codtGDS', 'nombre_tq': 'nombre_tq', });
lyr_tuberia_9.set('fieldAliases', {'id': 'id', 'codtGDS': 'codtGDS', 'ID_SIST': 'ID_SIST', });
lyr_PTAR_10.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'TIPO': 'TIPO', });
lyr_MUNICIPIOSVE_3.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_ESTADOSVE_4.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_AduccinPaoCachinche_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_AduccinPaoLaBalsa_6.set('fieldImages', {'UserId': 'TextEdit', 'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'ACUEDUCTO#': 'Range', 'ACUEDUCTO-': 'Range', 'ESTACION_B': 'TextEdit', });
lyr_AGUA_RESIDUAL_7.set('fieldImages', {'UserId': 'TextEdit', 'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'AGUAS_RESI': 'Range', 'AGUAS_RE_1': 'Range', });
lyr_Estanques_8.set('fieldImages', {'id': 'TextEdit', 'codtGDS': 'Range', 'nombre_tq': 'TextEdit', });
lyr_tuberia_9.set('fieldImages', {'id': 'TextEdit', 'codtGDS': 'Range', 'ID_SIST': 'TextEdit', });
lyr_PTAR_10.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_MUNICIPIOSVE_3.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_ESTADOSVE_4.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_AduccinPaoCachinche_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_AduccinPaoLaBalsa_6.set('fieldLabels', {'UserId': 'no label', 'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'ACUEDUCTO#': 'no label', 'ACUEDUCTO-': 'no label', 'ESTACION_B': 'no label', });
lyr_AGUA_RESIDUAL_7.set('fieldLabels', {'UserId': 'no label', 'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'AGUAS_RESI': 'no label', 'AGUAS_RE_1': 'no label', });
lyr_Estanques_8.set('fieldLabels', {'id': 'inline label', 'codtGDS': 'no label', 'nombre_tq': 'inline label', });
lyr_tuberia_9.set('fieldLabels', {'id': 'no label', 'codtGDS': 'no label', 'ID_SIST': 'header label', });
lyr_PTAR_10.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'TIPO': 'inline label', });
lyr_PTAR_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});