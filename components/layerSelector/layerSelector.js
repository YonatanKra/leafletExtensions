var extensionApp = angular.module('ui-leaflet-extensions', ['ui-leaflet']);

extensionApp.component('uiLeafletLayersSelector', {
    templateUrl: 'components/layerSelector/index.tmpl.html',
    bindings: {
        items: '=',
        ngModel: '='
    },
    controller: function layerSelectorCtrl() {
        this.show = true;
        this.selectVal = function (item) {
            this.ngModel = item;
        };
    },
    controllerAs: 'layerSelectorCtrl'
   /* require: {
        leaflet: 'leaflet'
    }*/
});
