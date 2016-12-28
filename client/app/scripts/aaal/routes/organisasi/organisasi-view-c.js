/**
 * @ngdoc function
 * @name aaal.controller:OrganisasiCtrl
 * @description
 * # OrganisasiCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('OrganisasiViewCtrl', OrganisasiViewCtrl);

    /* @ngInject */
    function OrganisasiViewCtrl($scope, $state, Organisasi) {
        var vm = this;
        var ModelService = Organisasi;
        vm.modelName = 'Organisasi';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
