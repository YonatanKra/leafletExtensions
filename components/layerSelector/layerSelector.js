var extensionApp = angular.module('ui-leaflet-extensions', ['ui-leaflet']);

extensionApp.component('uiLeafletLayersSelector', {
    templateUrl: 'components/layerSelector/index.tmpl.html',
    bindings: {
        tilesList: '=',
        defaultTile: "="
    },
    require: {
        leaflet: '^leaflet'
    },
    controller: function layerSelectorCtrl($scope, leafletLogger, leafletData, leafletMapDefaults, leafletHelpers) {
        var leafletScope;
        var vm = this;

        vm.show = false;
        vm.currentTile = "nothing";

        vm.$onInit = function() {
            leafletScope = this.leaflet.getLeafletScope();
            vm.leaflet.getMap().then(function(map) {
                var tileLayerObj;
                // get the map's defaults
                var defaults = leafletMapDefaults.getDefaults();

                var tiles = vm.tilesList[vm.defaultTile];

                /**
                 * @name switchTile
                 * @description allows to switch tile on click
                 * @param tiles
                 */
                vm.switchTile = function switchTile(tiles){
                    vm.show = false;
                    vm.currentTile = tiles.name;
                    // gets the map's tileLayerOptions
                    var tileLayerOptions = defaults.tileLayerOptions;
                    // gets the map's tileLayerUrl
                    var tileLayerUrl = defaults.tileLayer;

                    // If no valid tiles are in the scope, remove the last layer
                    if (!angular.isDefined(tiles.url) && angular.isDefined(tileLayerObj)) {
                        map.removeLayer(tileLayerObj);
                        return;
                    }

                    // No leafletTiles object defined yet
                    if (!angular.isDefined(tileLayerObj)) {
                        if (angular.isDefined(tiles.options)) {
                            angular.copy(tiles.options, tileLayerOptions);
                        }

                        if (angular.isDefined(tiles.url)) {
                            tileLayerUrl = tiles.url;
                        }

                        tileLayerObj = L.tileLayer(tileLayerUrl, tileLayerOptions);
                        tileLayerObj.addTo(map);
                        leafletData.setTiles(tileLayerObj);
                        return;
                    }

                    // If the options of the tilelayer is changed, we need to redraw the layer
                    if (angular.isDefined(tiles.url) && angular.isDefined(tiles.options) && !angular.equals(tiles.options, tileLayerOptions)) {
                        map.removeLayer(tileLayerObj);
                        tileLayerOptions = defaults.tileLayerOptions;
                        angular.copy(tiles.options, tileLayerOptions);
                        tileLayerUrl = tiles.url;
                        tileLayerObj = L.tileLayer(tileLayerUrl, tileLayerOptions);
                        tileLayerObj.addTo(map);
                        leafletData.setTiles(tileLayerObj);
                        return;
                    }

                    // Only the URL of the layer is changed, update the tiles object
                    if (angular.isDefined(tiles.url)) {
                        tileLayerObj.setUrl(tiles.url);
                    }
                };

                vm.switchTile(tiles);

                leafletScope.$on('$destroy', function(){
                    map = null;
                    controller.switchTile = null;
                });
            });
        };



    },
    controllerAs: 'layerSelectorCtrl'

});
