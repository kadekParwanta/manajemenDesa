'use strict';

describe('Controller: OrganisasiViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var OrganisasiViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //OrganisasiViewCtrl = $controller('OrganisasiViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});
