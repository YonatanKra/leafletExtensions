describe('Layer Selector tests', function(){
    var $compile,
        $rootScope,
        element;

    // Load the myApp module, which contains the directive
    beforeEach(module('ui-leaflet-extensions'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $rootScope.layersSelectorData = {name:"option 1"};
        // Compile a piece of HTML containing the directive
        element = $compile('<ui-leaflet-layers-selector items="layersSelectorData" ng-model="item"></ui-leaflet-layers-selector>')($rootScope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();
    }));

    it('Replaces the element with the appropriate content', function() {
        // Check that the compiled element contains the templated content
        expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
    });
});
