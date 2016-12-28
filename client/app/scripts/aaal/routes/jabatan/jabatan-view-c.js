/**
 * @ngdoc function
 * @name aaal.controller:JabatanCtrl
 * @description
 * # JabatanCtrl
 * Controller of the aaal
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .controller('JabatanViewCtrl', JabatanViewCtrl);

    /* @ngInject */
    function JabatanViewCtrl($scope, $state, Jabatan) {
        var vm = this;
        var ModelService = Jabatan;
        vm.modelName = 'Jabatan';

        if ($state.params.id) {
            vm.model = ModelService.findById({id: $state.params.id});
        }
    }
})();
