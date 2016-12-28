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
        .controller('OrganisasiEditCtrl', OrganisasiEditCtrl);

    /* @ngInject */
    function OrganisasiEditCtrl($state, ngToast, aaalToSchemaForm, Organisasi) {
        var vm = this;
        var ModelService = Organisasi;
        vm.modelName = 'Organisasi';

        //form and schema definition
        vm.schema = aaalToSchemaForm('Organisasi');
        vm.form = [
            '*',
            {
                type: 'submit',
                title: 'Save'
            }
        ];

        // load or create new instance
        if ($state.params.id) {
            ModelService.findById({id: $state.params.id, filter: {include:'Jabatan'}})
                .$promise
                .then(function(model) {
                    vm.model = model;
                }, function() {
                    ngToast.danger('Could not load model #' + $state.params.id);
                    $state.go('private.DesaList');
                });
        } else {
            vm.model = {};
        }


        function postSave() {
            ngToast.create('Saved');
            $state.go('private.OrganisasiList');
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
