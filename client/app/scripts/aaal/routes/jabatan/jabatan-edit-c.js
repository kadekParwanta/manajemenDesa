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
        .controller('JabatanEditCtrl', JabatanEditCtrl);

    /* @ngInject */
    function JabatanEditCtrl($state, ngToast, aaalToSchemaForm, Jabatan) {
        var vm = this;
        var ModelService = Jabatan;
        vm.modelName = 'Jabatan';

        //form and schema definition
        vm.schema = aaalToSchemaForm('Jabatan');
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
                    $state.go('private.DesaList');
                });
        } else {
            vm.model = {};
        }


        function postSave() {
            ngToast.create('Saved');
            $state.go('private.JabatanList');
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
