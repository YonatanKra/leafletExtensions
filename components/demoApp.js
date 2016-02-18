// demo app component comes here
var myApp = angular.module('leafletExtensionsDemo', ['ui-leaflet', 'ui-leaflet-extensions']);

/**
 * @ngdocs directive
 * @name leafletExtensionsDemoApp
 * @description "bootstraps" the demo app for the leaflet extensions
 *
 */

myApp.component('leafletExtensionsDemoApp', {
    template: '<div id="demoWrapper" layout="row" flex>\
    <demo-menu></demo-menu>\
    <demo-content flex></demo-content>\
    </div>',
    controller: function leafletExtensionsDemoAppCtrl() {},
    controllerAs: 'leafletExtensionsDemoAppCtrl'
});

// this would show a list of extensions to show off
myApp.component('demoMenu', {
    template: '<md-sidenav flex="20" class="md-sidenav-left md-whiteframe-z2" md-component-id="left" md-is-locked-open="true">\
    <md-toolbar class="md-theme-indigo">\
    <h1 class="md-toolbar-tools">Extensions</h1>\
    </md-toolbar>\
    <md-list>\
    <md-list-item ng-repeat="item in demoMenuCtrl.items">\
    {{item.name}}\
    </md-list-item>\
    </md-list>\
    </md-sidenav>',
    controller: function demoMenuCtrl(){
        this.items = [
            {
                name: 'layerSelector'
            }
        ]
    },
    controllerAs: 'demoMenuCtrl'
});

// this would change according to the content chosen in the menu
myApp.component('demoContent', {
    template: '<md-content>\
    <div ng-include="demoContentCtrl.template"\
    </md-content>',
    controllerAs: 'demoContentCtrl',
    controller: function(demoService){
        this.template = demoService.demoTemplates.layersSelection;
    }
});

myApp.run(['$templateCache', function($templateCache){
    $templateCache.put('leafletLayersSelector',  '<leaflet ui-leaflet-layers-selector></leaflet>');
}]);

myApp.service('demoService', [function(){
    return {
        demoTemplates: {
            layersSelection: 'leafletLayersSelector'
        }
    }
}]);