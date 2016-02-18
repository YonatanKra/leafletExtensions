var extensionApp = angular.module('ui-leaflet-extensions', ['ui-leaflet']);

extensionApp.component('uiLeafletLayersSelector', {
    templateUrl: 'index.tmpl.html',
    controller: function layerSelectorCtrl() {},
    controllerAs: 'layerSelectorCtrl',
    require: {
        leaflet: 'leaflet'
    }
});