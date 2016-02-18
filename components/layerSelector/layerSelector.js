var extensionApp = angular.module('ui-leaflet-extensions', ['ui-leaflet']);

extensionApp.component('uiLeafletLayersSelector', {
    templateUrl: 'index.tmpl.html',
    controller: function layerSelectorCtrl($scope, $element) {
        this.tileDist = $scope.$eval($element.attr);
    },
    controllerAs: 'layerSelectorCtrl',
    require: {
        leaflet: 'leaflet'
    }
});