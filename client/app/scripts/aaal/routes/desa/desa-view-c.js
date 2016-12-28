/**
 * @ngdoc function
 * @name aaal.controller:DesaCtrl
 * @description
 * # DesaCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('DesaViewCtrl', DesaViewCtrl);

    /* @ngInject */
    function DesaViewCtrl($scope, $state, Desa) {
        var vm = this;
        var ModelService = Desa;
        vm.modelName = 'Desa';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
