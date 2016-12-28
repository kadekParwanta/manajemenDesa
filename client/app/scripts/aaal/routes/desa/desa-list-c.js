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
        .controller('DesaListCtrl', DesaListCtrl);

    /* @ngInject */
    function DesaListCtrl(Desa) {
        var vm = this;
        var ModelService = Desa;

        function loadModel() {
            vm.rowCollection = ModelService.find();
        }

        //remove to the real data holder
        vm.removeItem = function removeItem(row) {
            var index = vm.rowCollection.indexOf(row);

            if (index !== -1) {
                vm.rowCollection.splice(index, 1);

                return ModelService.deleteById({id: row.id})
                    .$promise
                    .then(function() {
                        loadModel();
                    }, function() {
                        loadModel();
                    });
            }
        };

        // INIT
        loadModel();
    }
})();
