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
        .controller('DesaEditCtrl', DesaEditCtrl);

    /* @ngInject */
    function DesaEditCtrl($state, ngToast, aaalToSchemaForm, Desa) {
        var vm = this;
        var ModelService = Desa;
        vm.modelName = 'Desa';

        //form and schema definition
        vm.schema = aaalToSchemaForm('Desa');
        vm.form = [
            '*',
            {
                type: 'submit',
                title: 'Save'
            }
        ];

        // load or create new instance
        if ($state.params.id) {
            ModelService.findById({id: $state.params.id})
                .$promise
                .then(function(model) {
                    vm.model = model;
                }, function() {
                    ngToast.danger('Could not load model #' + $state.params.id);
                    $state.go('private.TestModelList');
                });
        } else {
            vm.model = {};
        }


        function postSave() {
            ngToast.create('Saved');
            $state.go('private.DesaList');
        }

        vm.createOrUpdate = function() {
            // update
            if (vm.model.id) {
                var modelInstance = new ModelService(vm.model);
                vm.submitPromise = modelInstance.$save()
                    .then(postSave);
            }
            // create
            else {
                vm.submitPromise = ModelService.create(vm.model)
                    .$promise
                    .then(postSave);
            }
        };
    }
})();
