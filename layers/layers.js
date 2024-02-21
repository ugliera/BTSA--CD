var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_sitearrasdulegtadupasdecalais_1 = new ol.format.GeoJSON();
var features_sitearrasdulegtadupasdecalais_1 = format_sitearrasdulegtadupasdecalais_1.readFeatures(json_sitearrasdulegtadupasdecalais_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sitearrasdulegtadupasdecalais_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sitearrasdulegtadupasdecalais_1.addFeatures(features_sitearrasdulegtadupasdecalais_1);
var lyr_sitearrasdulegtadupasdecalais_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sitearrasdulegtadupasdecalais_1, 
                style: style_sitearrasdulegtadupasdecalais_1,
                interactive: true,
                title: '<img src="styles/legend/sitearrasdulegtadupasdecalais_1.png" /> site arras du legta du pas de calais'
            });
var format_LEGTAObernai_2 = new ol.format.GeoJSON();
var features_LEGTAObernai_2 = format_LEGTAObernai_2.readFeatures(json_LEGTAObernai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LEGTAObernai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEGTAObernai_2.addFeatures(features_LEGTAObernai_2);
var lyr_LEGTAObernai_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LEGTAObernai_2, 
                style: style_LEGTAObernai_2,
                interactive: true,
                title: '<img src="styles/legend/LEGTAObernai_2.png" /> LEGTA Obernai'
            });
var format_mfreodeCauquereaumont_3 = new ol.format.GeoJSON();
var features_mfreodeCauquereaumont_3 = format_mfreodeCauquereaumont_3.readFeatures(json_mfreodeCauquereaumont_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mfreodeCauquereaumont_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mfreodeCauquereaumont_3.addFeatures(features_mfreodeCauquereaumont_3);
var lyr_mfreodeCauquereaumont_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mfreodeCauquereaumont_3, 
                style: style_mfreodeCauquereaumont_3,
                interactive: true,
                title: '<img src="styles/legend/mfreodeCauquereaumont_3.png" /> mfreo de Cauquereaumont'
            });
var format_btsacomplet_4 = new ol.format.GeoJSON();
var features_btsacomplet_4 = format_btsacomplet_4.readFeatures(json_btsacomplet_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_btsacomplet_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_btsacomplet_4.addFeatures(features_btsacomplet_4);
var lyr_btsacomplet_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_btsacomplet_4, 
                style: style_btsacomplet_4,
                interactive: true,
                title: '<img src="styles/legend/btsacomplet_4.png" /> btsa complet'
            });
var format_iahpdegenech_5 = new ol.format.GeoJSON();
var features_iahpdegenech_5 = format_iahpdegenech_5.readFeatures(json_iahpdegenech_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_iahpdegenech_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_iahpdegenech_5.addFeatures(features_iahpdegenech_5);
var lyr_iahpdegenech_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_iahpdegenech_5, 
                style: style_iahpdegenech_5,
                interactive: true,
                title: '<img src="styles/legend/iahpdegenech_5.png" /> iahp de genech'
            });
var format_cfpadegenech_6 = new ol.format.GeoJSON();
var features_cfpadegenech_6 = format_cfpadegenech_6.readFeatures(json_cfpadegenech_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cfpadegenech_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cfpadegenech_6.addFeatures(features_cfpadegenech_6);
var lyr_cfpadegenech_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cfpadegenech_6, 
                style: style_cfpadegenech_6,
                interactive: true,
                title: '<img src="styles/legend/cfpadegenech_6.png" /> cfpa de genech'
            });
var format_martiniqueetrunion_7 = new ol.format.GeoJSON();
var features_martiniqueetrunion_7 = format_martiniqueetrunion_7.readFeatures(json_martiniqueetrunion_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_martiniqueetrunion_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_martiniqueetrunion_7.addFeatures(features_martiniqueetrunion_7);
var lyr_martiniqueetrunion_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_martiniqueetrunion_7, 
                style: style_martiniqueetrunion_7,
                interactive: true,
                title: '<img src="styles/legend/martiniqueetrunion_7.png" /> martinique et réunion'
            });
var format_sitedarrasducfppadupasdecalais_8 = new ol.format.GeoJSON();
var features_sitedarrasducfppadupasdecalais_8 = format_sitedarrasducfppadupasdecalais_8.readFeatures(json_sitedarrasducfppadupasdecalais_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sitedarrasducfppadupasdecalais_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sitedarrasducfppadupasdecalais_8.addFeatures(features_sitedarrasducfppadupasdecalais_8);
var lyr_sitedarrasducfppadupasdecalais_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sitedarrasducfppadupasdecalais_8, 
                style: style_sitedarrasducfppadupasdecalais_8,
                interactive: true,
                title: '<img src="styles/legend/sitedarrasducfppadupasdecalais_8.png" /> site d\'arras du cfppa du pas de calais'
            });
var format_siteyvtotducfppadeseinemaritime_9 = new ol.format.GeoJSON();
var features_siteyvtotducfppadeseinemaritime_9 = format_siteyvtotducfppadeseinemaritime_9.readFeatures(json_siteyvtotducfppadeseinemaritime_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siteyvtotducfppadeseinemaritime_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siteyvtotducfppadeseinemaritime_9.addFeatures(features_siteyvtotducfppadeseinemaritime_9);
var lyr_siteyvtotducfppadeseinemaritime_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_siteyvtotducfppadeseinemaritime_9, 
                style: style_siteyvtotducfppadeseinemaritime_9,
                interactive: true,
                title: '<img src="styles/legend/siteyvtotducfppadeseinemaritime_9.png" /> site yvtot du cfppa de seine maritime'
            });
var format_sitearras_10 = new ol.format.GeoJSON();
var features_sitearras_10 = format_sitearras_10.readFeatures(json_sitearras_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sitearras_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sitearras_10.addFeatures(features_sitearras_10);
var lyr_sitearras_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sitearras_10, 
                style: style_sitearras_10,
                interactive: true,
                title: '<img src="styles/legend/sitearras_10.png" /> site arras'
            });
var format_elefpadechalonsenchampagne_11 = new ol.format.GeoJSON();
var features_elefpadechalonsenchampagne_11 = format_elefpadechalonsenchampagne_11.readFeatures(json_elefpadechalonsenchampagne_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_elefpadechalonsenchampagne_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_elefpadechalonsenchampagne_11.addFeatures(features_elefpadechalonsenchampagne_11);
var lyr_elefpadechalonsenchampagne_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_elefpadechalonsenchampagne_11, 
                style: style_elefpadechalonsenchampagne_11,
                interactive: true,
                title: '<img src="styles/legend/elefpadechalonsenchampagne_11.png" /> elefpa de chalons en champagne'
            });
var format_legtayvetot_12 = new ol.format.GeoJSON();
var features_legtayvetot_12 = format_legtayvetot_12.readFeatures(json_legtayvetot_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_legtayvetot_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_legtayvetot_12.addFeatures(features_legtayvetot_12);
var lyr_legtayvetot_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_legtayvetot_12, 
                style: style_legtayvetot_12,
                interactive: true,
                title: '<img src="styles/legend/legtayvetot_12.png" /> legta yvetot'
            });
var format_ELEFPAdequetigny_13 = new ol.format.GeoJSON();
var features_ELEFPAdequetigny_13 = format_ELEFPAdequetigny_13.readFeatures(json_ELEFPAdequetigny_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ELEFPAdequetigny_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELEFPAdequetigny_13.addFeatures(features_ELEFPAdequetigny_13);
var lyr_ELEFPAdequetigny_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ELEFPAdequetigny_13, 
                style: style_ELEFPAdequetigny_13,
                interactive: true,
                title: '<img src="styles/legend/ELEFPAdequetigny_13.png" /> ELEFPA de quetigny'
            });
var format_ETBLTAJOUTERAU200220242WEB_14 = new ol.format.GeoJSON();
var features_ETBLTAJOUTERAU200220242WEB_14 = format_ETBLTAJOUTERAU200220242WEB_14.readFeatures(json_ETBLTAJOUTERAU200220242WEB_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ETBLTAJOUTERAU200220242WEB_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ETBLTAJOUTERAU200220242WEB_14.addFeatures(features_ETBLTAJOUTERAU200220242WEB_14);
var lyr_ETBLTAJOUTERAU200220242WEB_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ETBLTAJOUTERAU200220242WEB_14, 
                style: style_ETBLTAJOUTERAU200220242WEB_14,
                interactive: true,
                title: '<img src="styles/legend/ETBLTAJOUTERAU200220242WEB_14.png" /> ETBLT AJOUTER AU 20022024 2WEB'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_sitearrasdulegtadupasdecalais_1.setVisible(true);lyr_LEGTAObernai_2.setVisible(true);lyr_mfreodeCauquereaumont_3.setVisible(true);lyr_btsacomplet_4.setVisible(true);lyr_iahpdegenech_5.setVisible(true);lyr_cfpadegenech_6.setVisible(true);lyr_martiniqueetrunion_7.setVisible(true);lyr_sitedarrasducfppadupasdecalais_8.setVisible(true);lyr_siteyvtotducfppadeseinemaritime_9.setVisible(true);lyr_sitearras_10.setVisible(true);lyr_elefpadechalonsenchampagne_11.setVisible(true);lyr_legtayvetot_12.setVisible(true);lyr_ELEFPAdequetigny_13.setVisible(true);lyr_ETBLTAJOUTERAU200220242WEB_14.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_sitearrasdulegtadupasdecalais_1,lyr_LEGTAObernai_2,lyr_mfreodeCauquereaumont_3,lyr_btsacomplet_4,lyr_iahpdegenech_5,lyr_cfpadegenech_6,lyr_martiniqueetrunion_7,lyr_sitedarrasducfppadupasdecalais_8,lyr_siteyvtotducfppadeseinemaritime_9,lyr_sitearras_10,lyr_elefpadechalonsenchampagne_11,lyr_legtayvetot_12,lyr_ELEFPAdequetigny_13,lyr_ETBLTAJOUTERAU200220242WEB_14];
lyr_sitearrasdulegtadupasdecalais_1.set('fieldAliases', {'nom': 'nom', });
lyr_LEGTAObernai_2.set('fieldAliases', {'nom': 'nom', });
lyr_mfreodeCauquereaumont_3.set('fieldAliases', {'nom': 'nom', });
lyr_btsacomplet_4.set('fieldAliases', {'nom': 'nom', });
lyr_iahpdegenech_5.set('fieldAliases', {'nom': 'nom', });
lyr_cfpadegenech_6.set('fieldAliases', {'nom': 'nom', });
lyr_martiniqueetrunion_7.set('fieldAliases', {'nom': 'nom', });
lyr_sitedarrasducfppadupasdecalais_8.set('fieldAliases', {'nom': 'nom', });
lyr_siteyvtotducfppadeseinemaritime_9.set('fieldAliases', {'nom': 'nom', });
lyr_sitearras_10.set('fieldAliases', {'nom': 'nom', });
lyr_elefpadechalonsenchampagne_11.set('fieldAliases', {'nom': 'nom', });
lyr_legtayvetot_12.set('fieldAliases', {'nom': 'nom', });
lyr_ELEFPAdequetigny_13.set('fieldAliases', {'nom': 'nom', });
lyr_ETBLTAJOUTERAU200220242WEB_14.set('fieldAliases', {'nom': 'nom', });
lyr_sitearrasdulegtadupasdecalais_1.set('fieldImages', {'nom': 'TextEdit', });
lyr_LEGTAObernai_2.set('fieldImages', {'nom': 'TextEdit', });
lyr_mfreodeCauquereaumont_3.set('fieldImages', {'nom': 'TextEdit', });
lyr_btsacomplet_4.set('fieldImages', {'nom': 'TextEdit', });
lyr_iahpdegenech_5.set('fieldImages', {'nom': 'TextEdit', });
lyr_cfpadegenech_6.set('fieldImages', {'nom': 'TextEdit', });
lyr_martiniqueetrunion_7.set('fieldImages', {'nom': 'TextEdit', });
lyr_sitedarrasducfppadupasdecalais_8.set('fieldImages', {'nom': 'TextEdit', });
lyr_siteyvtotducfppadeseinemaritime_9.set('fieldImages', {'nom': 'TextEdit', });
lyr_sitearras_10.set('fieldImages', {'nom': 'TextEdit', });
lyr_elefpadechalonsenchampagne_11.set('fieldImages', {'nom': 'TextEdit', });
lyr_legtayvetot_12.set('fieldImages', {'nom': 'TextEdit', });
lyr_ELEFPAdequetigny_13.set('fieldImages', {'nom': 'TextEdit', });
lyr_ETBLTAJOUTERAU200220242WEB_14.set('fieldImages', {'nom': 'TextEdit', });
lyr_sitearrasdulegtadupasdecalais_1.set('fieldLabels', {'nom': 'no label', });
lyr_LEGTAObernai_2.set('fieldLabels', {'nom': 'no label', });
lyr_mfreodeCauquereaumont_3.set('fieldLabels', {'nom': 'no label', });
lyr_btsacomplet_4.set('fieldLabels', {'nom': 'no label', });
lyr_iahpdegenech_5.set('fieldLabels', {'nom': 'no label', });
lyr_cfpadegenech_6.set('fieldLabels', {'nom': 'no label', });
lyr_martiniqueetrunion_7.set('fieldLabels', {'nom': 'no label', });
lyr_sitedarrasducfppadupasdecalais_8.set('fieldLabels', {'nom': 'no label', });
lyr_siteyvtotducfppadeseinemaritime_9.set('fieldLabels', {'nom': 'no label', });
lyr_sitearras_10.set('fieldLabels', {'nom': 'no label', });
lyr_elefpadechalonsenchampagne_11.set('fieldLabels', {'nom': 'no label', });
lyr_legtayvetot_12.set('fieldLabels', {'nom': 'no label', });
lyr_ELEFPAdequetigny_13.set('fieldLabels', {'nom': 'no label', });
lyr_ETBLTAJOUTERAU200220242WEB_14.set('fieldLabels', {'nom': 'no label', });
lyr_ETBLTAJOUTERAU200220242WEB_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});