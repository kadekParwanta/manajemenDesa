'use strict';

describe('Controller: JabatanViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var JabatanViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //JabatanViewCtrl = $controller('JabatanViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});
