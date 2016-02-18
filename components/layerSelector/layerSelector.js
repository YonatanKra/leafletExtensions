var extensionApp = angular.module('ui-leaflet-extensions', ['ui-leaflet']);

// must be a directive in order to support the leaflet component (currently leaflet is a directive, but it should be a component)
extensionApp.run(['$templateCache', function($templateCache){
    // set the template's cache for the selector here
}]);

extensionApp.directive('uiLeafletLayersSelector', ['$compile', '$templateCache', function($compile, $templateCache) {
    return {
        restrict: 'A',
        priority: -100,
        controller: function layerSelectorCtrl($scope, $element) {
            this.tileDist = $scope.$eval($element.attr); // get the data from the element - no binding!

            // now you need to get the template from $templateCache

            // now you need to $compile it and append it to the leaflet element to be positioned in the right place

            // setup all the methods you need, like this.selectLayer...
        },
        controllerAs: 'layerSelectorCtrl',
        require: 'leaflet'
    }
}]);