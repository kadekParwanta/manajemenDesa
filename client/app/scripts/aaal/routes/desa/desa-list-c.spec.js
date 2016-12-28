'use strict';

describe('Controller: DesaListCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    var DesaListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        DesaListCtrl = $controller('DesaListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});
