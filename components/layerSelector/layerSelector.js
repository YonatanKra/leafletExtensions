var extensionApp = angular.module('ui-leaflet-extensions', ['ui-leaflet']);

extensionApp.component('uiLeafletLayersSelector', {
    templateUrl: 'components/layerSelector/index.tmpl.html',
    bindings: {
        tilesList: '=',
        currentTile: '='
    },
    require: {
        leaflet: '^leaflet'
    },
    controller: function layerSelectorCtrl($scope) {
        this.show = true;
        this.selectVal = function (index) {
            this.currentTile = Object.keys(this.tilesList)[index];
            //this.leaflet.getLeafletScope().tiles = item;
        };
        this.$onInit = function() {
            console.log(this.leaflet);
        };
    },
    controllerAs: 'layerSelectorCtrl'

});
