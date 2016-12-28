'use strict';

describe('Controller: JabatanListCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    var JabatanListCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        JabatanListCtrl = $controller('JabatanListCtrl', {
            $scope: scope
            // place mocked dependencies here
        });
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});
