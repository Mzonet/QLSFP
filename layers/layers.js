var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Positronnolabelsretina_1 = new ol.layer.Tile({
            'title': 'Positron [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_QLFSP_Rot1_4LatLong_2 = new ol.format.GeoJSON();
var features_QLFSP_Rot1_4LatLong_2 = format_QLFSP_Rot1_4LatLong_2.readFeatures(json_QLFSP_Rot1_4LatLong_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QLFSP_Rot1_4LatLong_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QLFSP_Rot1_4LatLong_2.addFeatures(features_QLFSP_Rot1_4LatLong_2);
var lyr_QLFSP_Rot1_4LatLong_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QLFSP_Rot1_4LatLong_2, 
                style: style_QLFSP_Rot1_4LatLong_2,
                popuplayertitle: 'QLFSP_Rot1_4LatLong',
                interactive: true,
    title: 'QLFSP_Rot1_4LatLong<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_0.png" /> 0 No Registrations<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_1.png" /> 1<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_2.png" /> 2<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_3.png" /> 3<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_4.png" /> 4<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_5.png" /> 5<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_6.png" /> 7<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_7.png" /> 8<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_8.png" /> 9<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_9.png" /> 10<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_10.png" /> 12<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_11.png" /> 14<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_12.png" /> 15<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_13.png" /> 17<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_14.png" /> 18<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_15.png" /> 20<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_16.png" /> 28<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_17.png" /> 32<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_18.png" /> 34<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_19.png" /> 38<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_20.png" /> 85<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_21.png" /> 91<br />\
    <img src="styles/legend/QLFSP_Rot1_4LatLong_2_22.png" /> <br />' });
var format_Cadastral_3 = new ol.format.GeoJSON();
var features_Cadastral_3 = format_Cadastral_3.readFeatures(json_Cadastral_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cadastral_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cadastral_3.addFeatures(features_Cadastral_3);
var lyr_Cadastral_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cadastral_3, 
                style: style_Cadastral_3,
                popuplayertitle: 'Cadastral',
                interactive: true,
                title: '<img src="styles/legend/Cadastral_3.png" /> Cadastral'
            });
var format_QLFSP_Rot_1_4__234_4 = new ol.format.GeoJSON();
var features_QLFSP_Rot_1_4__234_4 = format_QLFSP_Rot_1_4__234_4.readFeatures(json_QLFSP_Rot_1_4__234_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QLFSP_Rot_1_4__234_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QLFSP_Rot_1_4__234_4.addFeatures(features_QLFSP_Rot_1_4__234_4);
var lyr_QLFSP_Rot_1_4__234_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QLFSP_Rot_1_4__234_4, 
                style: style_QLFSP_Rot_1_4__234_4,
                popuplayertitle: 'QLFSP_Rot_1_4_(_234)',
                interactive: true,
                title: '<img src="styles/legend/QLFSP_Rot_1_4__234_4.png" /> QLFSP_Rot_1_4_(_234)'
            });
var format_Wards_5 = new ol.format.GeoJSON();
var features_Wards_5 = format_Wards_5.readFeatures(json_Wards_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wards_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wards_5.addFeatures(features_Wards_5);
var lyr_Wards_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wards_5, 
                style: style_Wards_5,
                popuplayertitle: 'Wards',
                interactive: true,
                title: '<img src="styles/legend/Wards_5.png" /> Wards'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Positronnolabelsretina_1.setVisible(true);lyr_QLFSP_Rot1_4LatLong_2.setVisible(true);lyr_Cadastral_3.setVisible(true);lyr_QLFSP_Rot_1_4__234_4.setVisible(true);lyr_Wards_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Positronnolabelsretina_1,lyr_QLFSP_Rot1_4LatLong_2,lyr_Cadastral_3,lyr_QLFSP_Rot_1_4__234_4,lyr_Wards_5];
lyr_QLFSP_Rot1_4LatLong_2.set('fieldAliases', {'PSU_NO_M': 'PSU_NO_M', 'EA_CODE': 'EA_CODE', 'SUB_EA_COD': 'SUB_EA_COD', 'EA_2011': 'EA_2011', 'EDITOR': 'EDITOR', 'SP_NAME': 'SP_NAME', 'MP_NAME': 'MP_NAME', 'MN_NAME': 'MN_NAME', 'DC_NAME': 'DC_NAME', 'EA_COUNT': 'EA_COUNT', 'District': 'District', 'Municipali': 'Municipali', 'SP_NAME_1': 'SP_NAME_1', 'RegComplet': 'RegComplet', 'TotalRegis': 'TotalRegis', 'SequetiaNo': 'SequetiaNo', 'Sequetia_1': 'Sequetia_1', 'PSUNO': 'PSUNO', 'rotation': 'rotation', 'EA_GTYPE': 'EA_GTYPE', 'EA_TYPE': 'EA_TYPE', 'STRATUM': 'STRATUM', 'EA2': 'EA2', 'EA1': 'EA1', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Cadastral_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OFC_SBRB_N': 'OFC_SBRB_N', 'ADR_NO': 'ADR_NO', 'ADR_NO_SFX': 'ADR_NO_SFX', 'STR_NAME': 'STR_NAME', 'LU_STR_NAM': 'LU_STR_NAM', 'ALT_NAME': 'ALT_NAME', 'LU_LGL_STS': 'LU_LGL_STS', 'PRTY_NMBR': 'PRTY_NMBR', 'ZONING': 'ZONING', 'SUB_CNCL_N': 'SUB_CNCL_N', 'SHAPESTAre': 'SHAPESTAre', 'SHAPESTLen': 'SHAPESTLen', });
lyr_QLFSP_Rot_1_4__234_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PSU_NO_M': 'PSU_NO_M', 'EA_CODE': 'EA_CODE', 'SUB_EA_NR': 'SUB_EA_NR', 'SUB_EA_COD': 'SUB_EA_COD', 'EA_2011': 'EA_2011', 'EDITOR': 'EDITOR', 'SP_NAME': 'SP_NAME', 'MP_NAME': 'MP_NAME', 'MN_NAME': 'MN_NAME', 'DC_MDB_C': 'DC_MDB_C', 'DC_NAME': 'DC_NAME', 'ESTIMATED_': 'ESTIMATED_', 'OBSERVED_D': 'OBSERVED_D', 'QA_DU_COUN': 'QA_DU_COUN', 'MRN_COUNT': 'MRN_COUNT', 'GATED_COMM': 'GATED_COMM', 'EA_COUNT': 'EA_COUNT', 'Province': 'Province', 'District': 'District', 'Municipali': 'Municipali', 'MP_NAME_1': 'MP_NAME_1', 'SP_NAME_1': 'SP_NAME_1', 'RegComplet': 'RegComplet', 'TotalRegis': 'TotalRegis', 'SequetiaNo': 'SequetiaNo', 'Sequetia_1': 'Sequetia_1', 'PSUNO': 'PSUNO', 'rotation': 'rotation', 'EA_GTYPE': 'EA_GTYPE', 'EA_TYPE': 'EA_TYPE', 'SP_CODE': 'SP_CODE', 'SP_NAME_12': 'SP_NAME_12', 'MP_NAME_12': 'MP_NAME_12', 'MN_NAME_1': 'MN_NAME_1', 'DC_MDB_C_1': 'DC_MDB_C_1', 'DC_NAME_1': 'DC_NAME_1', 'PR_NAME': 'PR_NAME', 'PR_CODE': 'PR_CODE', 'STRATUM': 'STRATUM', 'EA2': 'EA2', 'PSU_NO_M_1': 'PSU_NO_M_1', 'EA1': 'EA1', 'MP_CODE': 'MP_CODE', 'EA_GTYPE_C': 'EA_GTYPE_C', 'EA_TYPE_C': 'EA_TYPE_C', 'MN_CODE': 'MN_CODE', 'DC_MN_C': 'DC_MN_C', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Wards_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WARD_NAME': 'WARD_NAME', 'WARD_YEAR': 'WARD_YEAR', 'ShapeSTAre': 'ShapeSTAre', 'ShapeSTLen': 'ShapeSTLen', });
lyr_QLFSP_Rot1_4LatLong_2.set('fieldImages', {'PSU_NO_M': 'TextEdit', 'EA_CODE': 'TextEdit', 'SUB_EA_COD': 'TextEdit', 'EA_2011': 'TextEdit', 'EDITOR': 'TextEdit', 'SP_NAME': 'TextEdit', 'MP_NAME': 'TextEdit', 'MN_NAME': 'TextEdit', 'DC_NAME': 'TextEdit', 'EA_COUNT': 'TextEdit', 'District': 'TextEdit', 'Municipali': 'TextEdit', 'SP_NAME_1': 'TextEdit', 'RegComplet': 'TextEdit', 'TotalRegis': 'TextEdit', 'SequetiaNo': 'TextEdit', 'Sequetia_1': 'TextEdit', 'PSUNO': 'TextEdit', 'rotation': 'TextEdit', 'EA_GTYPE': 'TextEdit', 'EA_TYPE': 'TextEdit', 'STRATUM': 'TextEdit', 'EA2': 'TextEdit', 'EA1': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Cadastral_3.set('fieldImages', {'OBJECTID': 'Range', 'OFC_SBRB_N': 'TextEdit', 'ADR_NO': 'Range', 'ADR_NO_SFX': 'TextEdit', 'STR_NAME': 'TextEdit', 'LU_STR_NAM': 'TextEdit', 'ALT_NAME': 'TextEdit', 'LU_LGL_STS': 'TextEdit', 'PRTY_NMBR': 'TextEdit', 'ZONING': 'TextEdit', 'SUB_CNCL_N': 'TextEdit', 'SHAPESTAre': 'TextEdit', 'SHAPESTLen': 'TextEdit', });
lyr_QLFSP_Rot_1_4__234_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'PSU_NO_M': 'TextEdit', 'EA_CODE': 'TextEdit', 'SUB_EA_NR': 'TextEdit', 'SUB_EA_COD': 'TextEdit', 'EA_2011': 'TextEdit', 'EDITOR': 'TextEdit', 'SP_NAME': 'TextEdit', 'MP_NAME': 'TextEdit', 'MN_NAME': 'TextEdit', 'DC_MDB_C': 'TextEdit', 'DC_NAME': 'TextEdit', 'ESTIMATED_': 'TextEdit', 'OBSERVED_D': 'TextEdit', 'QA_DU_COUN': 'TextEdit', 'MRN_COUNT': 'TextEdit', 'GATED_COMM': 'TextEdit', 'EA_COUNT': 'TextEdit', 'Province': 'TextEdit', 'District': 'TextEdit', 'Municipali': 'TextEdit', 'MP_NAME_1': 'TextEdit', 'SP_NAME_1': 'TextEdit', 'RegComplet': 'TextEdit', 'TotalRegis': 'TextEdit', 'SequetiaNo': 'Range', 'Sequetia_1': 'TextEdit', 'PSUNO': 'TextEdit', 'rotation': 'TextEdit', 'EA_GTYPE': 'TextEdit', 'EA_TYPE': 'TextEdit', 'SP_CODE': 'TextEdit', 'SP_NAME_12': 'TextEdit', 'MP_NAME_12': 'TextEdit', 'MN_NAME_1': 'TextEdit', 'DC_MDB_C_1': 'TextEdit', 'DC_NAME_1': 'TextEdit', 'PR_NAME': 'TextEdit', 'PR_CODE': 'TextEdit', 'STRATUM': 'TextEdit', 'EA2': 'TextEdit', 'PSU_NO_M_1': 'TextEdit', 'EA1': 'TextEdit', 'MP_CODE': 'TextEdit', 'EA_GTYPE_C': 'TextEdit', 'EA_TYPE_C': 'TextEdit', 'MN_CODE': 'TextEdit', 'DC_MN_C': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Wards_5.set('fieldImages', {'OBJECTID': 'Range', 'WARD_NAME': 'TextEdit', 'WARD_YEAR': 'Range', 'ShapeSTAre': 'TextEdit', 'ShapeSTLen': 'TextEdit', });
lyr_QLFSP_Rot1_4LatLong_2.set('fieldLabels', {'PSU_NO_M': 'no label', 'EA_CODE': 'no label', 'SUB_EA_COD': 'no label', 'EA_2011': 'no label', 'EDITOR': 'no label', 'SP_NAME': 'no label', 'MP_NAME': 'no label', 'MN_NAME': 'no label', 'DC_NAME': 'no label', 'EA_COUNT': 'no label', 'District': 'no label', 'Municipali': 'no label', 'SP_NAME_1': 'no label', 'RegComplet': 'no label', 'TotalRegis': 'no label', 'SequetiaNo': 'no label', 'Sequetia_1': 'no label', 'PSUNO': 'no label', 'rotation': 'no label', 'EA_GTYPE': 'no label', 'EA_TYPE': 'no label', 'STRATUM': 'no label', 'EA2': 'no label', 'EA1': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Cadastral_3.set('fieldLabels', {'OBJECTID': 'no label', 'OFC_SBRB_N': 'no label', 'ADR_NO': 'inline label - always visible', 'ADR_NO_SFX': 'no label', 'STR_NAME': 'no label', 'LU_STR_NAM': 'no label', 'ALT_NAME': 'no label', 'LU_LGL_STS': 'no label', 'PRTY_NMBR': 'no label', 'ZONING': 'no label', 'SUB_CNCL_N': 'no label', 'SHAPESTAre': 'no label', 'SHAPESTLen': 'no label', });
lyr_QLFSP_Rot_1_4__234_4.set('fieldLabels', {'OBJECTID': 'no label', 'PSU_NO_M': 'inline label - visible with data', 'EA_CODE': 'inline label - visible with data', 'SUB_EA_NR': 'no label', 'SUB_EA_COD': 'no label', 'EA_2011': 'no label', 'EDITOR': 'no label', 'SP_NAME': 'inline label - always visible', 'MP_NAME': 'inline label - always visible', 'MN_NAME': 'inline label - always visible', 'DC_MDB_C': 'no label', 'DC_NAME': 'no label', 'ESTIMATED_': 'no label', 'OBSERVED_D': 'no label', 'QA_DU_COUN': 'no label', 'MRN_COUNT': 'no label', 'GATED_COMM': 'no label', 'EA_COUNT': 'no label', 'Province': 'no label', 'District': 'no label', 'Municipali': 'no label', 'MP_NAME_1': 'no label', 'SP_NAME_1': 'no label', 'RegComplet': 'inline label - visible with data', 'TotalRegis': 'inline label - visible with data', 'SequetiaNo': 'no label', 'Sequetia_1': 'no label', 'PSUNO': 'inline label - always visible', 'rotation': 'no label', 'EA_GTYPE': 'no label', 'EA_TYPE': 'no label', 'SP_CODE': 'no label', 'SP_NAME_12': 'no label', 'MP_NAME_12': 'no label', 'MN_NAME_1': 'no label', 'DC_MDB_C_1': 'no label', 'DC_NAME_1': 'no label', 'PR_NAME': 'no label', 'PR_CODE': 'no label', 'STRATUM': 'no label', 'EA2': 'no label', 'PSU_NO_M_1': 'no label', 'EA1': 'no label', 'MP_CODE': 'no label', 'EA_GTYPE_C': 'no label', 'EA_TYPE_C': 'no label', 'MN_CODE': 'no label', 'DC_MN_C': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Wards_5.set('fieldLabels', {'OBJECTID': 'no label', 'WARD_NAME': 'inline label - visible with data', 'WARD_YEAR': 'no label', 'ShapeSTAre': 'no label', 'ShapeSTLen': 'no label', });
lyr_Wards_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});