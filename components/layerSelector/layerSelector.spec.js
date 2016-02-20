describe('Layer Selector tests', function(){
    it('Should pass', function(){
        expect(true).toBeTruthy();
    })
});

define(function(require) {
    'use strict';
    /*require('angular');
    require('angularMock');
    require('components/layerSelector/layerSelector.js');*/

    describe('Unit testing Layer Selector', function () {
        var $compile,
            $rootScope;

        // Load the ui-leaflet-extensions module, which contains the directive
        beforeEach(module('ui-leaflet-extensions'));

        // Store references to $rootScope and $compile
        // so they are available to all tests in this describe block
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));

        it('Replaces the element with the appropriate content', function () {

            this.layersSelectorData = {
                option1: {name: "option 1"},
                option2: {name: "option 2"}
            };
            this.item = {option1: {name: "option 1"}};
            // Compile a the component: ui-leaflet-layers-selector
            var element = $compile('<ui-leaflet-layers-selector items="layersSelectorData" ng-model="item"></ui-leaflet-layers-selector>')($rootScope);
            // fire all the watches
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
            expect(element.find('li').length).toBe(2);
        });
    });
});
