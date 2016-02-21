var extensionApp = angular.module('ui-leaflet-extensions', ['ui-leaflet']);

extensionApp.component('uiLeafletLayersSelector', {
    templateUrl: 'components/layerSelector/index.tmpl.html',
    bindings: {
        items: '=',
        currentItem: '='
    },
    require: {
        leaflet: '^leaflet'
    },
    controller: function layerSelectorCtrl($scope) {
        this.show = true;
        this.selectVal = function (index) {
            this.currentItem = Object.keys(this.items)[index];
        };
        this.$onInit = function() {
            console.log(this.leaflet);
        };
    },
    controllerAs: 'layerSelectorCtrl'

});
