/**
 * @ngdoc constant
 * @name aaal.aaalModelDefinitions
 * @description
 * # aaalModelDefinitions
 * Constant in the aaal.
 */

(function () {
    'use strict';

    angular
        .module('aaal')
        .constant('aaalModelDefinitions', {
            'Desa': {
                'name': 'Desa',
                'properties': {
                    "jalan": {
                        "type": "string"
                    },
                    "desa": {
                        "type": "string",
                        "required": true
                    },
                    "kecamatan": {
                        "type": "string"
                    },
                    "kabupaten": {
                        "type": "string"
                    },
                    "provinsi": {
                        "type": "string"
                    },
                    "kodepos": {
                        "type": "number"
                    }
                },
                'validations': [
                ],
                'relations': {
                },
                'acls': [
                ],
                'mixins': [
                ]
            }
        });
})();
