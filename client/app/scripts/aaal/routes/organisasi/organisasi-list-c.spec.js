'use strict';

describe('Controller: OrganisasiListCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    var OrganisasiListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        OrganisasiListCtrl = $controller('OrganisasiListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});
