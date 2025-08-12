var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AlaskaNationalForest_1 = new ol.format.GeoJSON();
var features_AlaskaNationalForest_1 = format_AlaskaNationalForest_1.readFeatures(json_AlaskaNationalForest_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlaskaNationalForest_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlaskaNationalForest_1.addFeatures(features_AlaskaNationalForest_1);
var lyr_AlaskaNationalForest_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlaskaNationalForest_1, 
                style: style_AlaskaNationalForest_1,
                popuplayertitle: 'Alaska National Forest',
                interactive: true,
                title: '<img src="styles/legend/AlaskaNationalForest_1.png" /> Alaska National Forest'
            });
var format_AlaskaInventoriedRoadlessArea_2 = new ol.format.GeoJSON();
var features_AlaskaInventoriedRoadlessArea_2 = format_AlaskaInventoriedRoadlessArea_2.readFeatures(json_AlaskaInventoriedRoadlessArea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlaskaInventoriedRoadlessArea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlaskaInventoriedRoadlessArea_2.addFeatures(features_AlaskaInventoriedRoadlessArea_2);
var lyr_AlaskaInventoriedRoadlessArea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlaskaInventoriedRoadlessArea_2, 
                style: style_AlaskaInventoriedRoadlessArea_2,
                popuplayertitle: 'Alaska Inventoried Roadless Area',
                interactive: true,
                title: '<img src="styles/legend/AlaskaInventoriedRoadlessArea_2.png" /> Alaska Inventoried Roadless Area'
            });
var format_GameManagementUnits_3 = new ol.format.GeoJSON();
var features_GameManagementUnits_3 = format_GameManagementUnits_3.readFeatures(json_GameManagementUnits_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GameManagementUnits_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GameManagementUnits_3.addFeatures(features_GameManagementUnits_3);
var lyr_GameManagementUnits_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GameManagementUnits_3, 
                style: style_GameManagementUnits_3,
                popuplayertitle: 'Game Management Units',
                interactive: true,
                title: '<img src="styles/legend/GameManagementUnits_3.png" /> Game Management Units'
            });
var format_Alaska_Trails_4 = new ol.format.GeoJSON();
var features_Alaska_Trails_4 = format_Alaska_Trails_4.readFeatures(json_Alaska_Trails_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alaska_Trails_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alaska_Trails_4.addFeatures(features_Alaska_Trails_4);
var lyr_Alaska_Trails_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alaska_Trails_4, 
                style: style_Alaska_Trails_4,
                popuplayertitle: 'Alaska_Trails',
                interactive: true,
                title: '<img src="styles/legend/Alaska_Trails_4.png" /> Alaska_Trails'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_AlaskaNationalForest_1.setVisible(true);lyr_AlaskaInventoriedRoadlessArea_2.setVisible(true);lyr_GameManagementUnits_3.setVisible(true);lyr_Alaska_Trails_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AlaskaNationalForest_1,lyr_AlaskaInventoriedRoadlessArea_2,lyr_GameManagementUnits_3,lyr_Alaska_Trails_4];
lyr_AlaskaNationalForest_1.set('fieldAliases', {'ADMINFORES': 'ADMINFORES', 'REGION': 'REGION', 'FORESTNUMB': 'FORESTNUMB', 'FORESTORGC': 'FORESTORGC', 'FORESTNAME': 'FORESTNAME', 'GIS_ACRES': 'GIS_ACRES', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_AlaskaInventoriedRoadlessArea_2.set('fieldAliases', {'ROADLESSAR': 'ROADLESSAR', 'RULE': 'RULE', 'REGIONCODE': 'REGIONCODE', 'REGIONNAME': 'REGIONNAME', 'FORESTNAME': 'FORESTNAME', 'STATECODE': 'STATECODE', 'STATENAME': 'STATENAME', 'TOTAL_ACRE': 'TOTAL_ACRE', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_GameManagementUnits_3.set('fieldAliases', {'Region': 'Region', 'UnitSub': 'UnitSub', 'SubLabel': 'SubLabel', 'SubLetter': 'SubLetter', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'SqMi': 'SqMi', });
lyr_Alaska_Trails_4.set('fieldAliases', {'FID': 'FID', 'OBJECTID': 'OBJECTID', 'TRAILNO': 'TRAILNO', 'SCALE': 'SCALE', 'DOTQUAD': 'DOTQUAD', 'TRAIL': 'TRAIL', 'GLOBALID': 'GLOBALID', 'SHAPELEN': 'SHAPELEN', 'Shape__Len': 'Shape__Len', 'GlobalID_2': 'GlobalID_2', });
lyr_AlaskaNationalForest_1.set('fieldImages', {'ADMINFORES': '', 'REGION': '', 'FORESTNUMB': '', 'FORESTORGC': '', 'FORESTNAME': '', 'GIS_ACRES': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_AlaskaInventoriedRoadlessArea_2.set('fieldImages', {'ROADLESSAR': '', 'RULE': '', 'REGIONCODE': '', 'REGIONNAME': '', 'FORESTNAME': '', 'STATECODE': '', 'STATENAME': '', 'TOTAL_ACRE': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_GameManagementUnits_3.set('fieldImages', {'Region': '', 'UnitSub': '', 'SubLabel': '', 'SubLetter': '', 'Shape_Leng': '', 'Shape_Area': '', 'SqMi': '', });
lyr_Alaska_Trails_4.set('fieldImages', {'FID': '', 'OBJECTID': '', 'TRAILNO': '', 'SCALE': '', 'DOTQUAD': '', 'TRAIL': '', 'GLOBALID': '', 'SHAPELEN': '', 'Shape__Len': '', 'GlobalID_2': '', });
lyr_AlaskaNationalForest_1.set('fieldLabels', {'ADMINFORES': 'no label', 'REGION': 'no label', 'FORESTNUMB': 'no label', 'FORESTORGC': 'no label', 'FORESTNAME': 'no label', 'GIS_ACRES': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_AlaskaInventoriedRoadlessArea_2.set('fieldLabels', {'ROADLESSAR': 'no label', 'RULE': 'no label', 'REGIONCODE': 'no label', 'REGIONNAME': 'no label', 'FORESTNAME': 'no label', 'STATECODE': 'no label', 'STATENAME': 'no label', 'TOTAL_ACRE': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_GameManagementUnits_3.set('fieldLabels', {'Region': 'no label', 'UnitSub': 'no label', 'SubLabel': 'inline label - always visible', 'SubLetter': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'SqMi': 'no label', });
lyr_Alaska_Trails_4.set('fieldLabels', {'FID': 'no label', 'OBJECTID': 'no label', 'TRAILNO': 'inline label - visible with data', 'SCALE': 'no label', 'DOTQUAD': 'no label', 'TRAIL': 'no label', 'GLOBALID': 'no label', 'SHAPELEN': 'no label', 'Shape__Len': 'no label', 'GlobalID_2': 'no label', });
lyr_Alaska_Trails_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});