'use strict';

describe('Controller: DesaViewCtrl', function() {

    // load the controller's module
    beforeEach(module('aaal'));

    //var DesaViewCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        //DesaViewCtrl = $controller('DesaViewCtrl', {
        //    $scope: scope
        //     place mocked dependencies here
        //});
    }));

    it('should ...', function() {
        expect(true).toBe(true);
    });
});
