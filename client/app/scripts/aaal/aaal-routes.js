/**
 * @ngdoc overview
 * @name aaal.routes
 * @description
 * # aaal.routes
 *
 * Routes module. All app states are defined here.
 */

(function() {
    'use strict';

    angular
        .module('aaal')
        .config(routerHelperProvider)
        .run(function($rootScope, $state, ngToast, $localStorage) {
            if ($localStorage.currentUser) {
                $rootScope.currentUser = $localStorage.currentUser;
            }

            // prevent private loads from loading if not logged in
            $rootScope.$on('$stateChangeStart', function(event, next, nextParams) {
                // redirect to login page if not logged in
                if (next.data && next.data.authenticate && !$rootScope.currentUser) {
                    event.preventDefault(); //prevent current page from loading
                    $state.nextAfterLogin = next;
                    $state.nextAfterLoginParams = nextParams;
                    ngToast.danger('You\'re note logged in, please proceed');
                    $state.go('login');
                }
            });
        });
    ;

    /* @ngInject */
    function routerHelperProvider($stateProvider, $urlRouterProvider) {

        var AAAL_BASE_STATE = 'private.';
        var aaalBaseWithoutDot = AAAL_BASE_STATE.substring(0, AAAL_BASE_STATE.length - 1);

        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                template: '<div class="login-page"><login></login></div>'
            })
            .state(aaalBaseWithoutDot, {
                url: '/private',
                abstract: true,
                template: '<aaal-header></aaal-header><main ui-view class="container"></main>',
                data: {
                    authenticate: true
                }
            })
            .state(AAAL_BASE_STATE + 'dashboard', {
                url: '/dashboard',
                template: '<div>Hello!</div>'
            })
            .state(AAAL_BASE_STATE + 'DesaList', {
                url: '/desa/list',
                controller: 'DesaListCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/desa/desa-list-c.html'
            })
            .state(AAAL_BASE_STATE + 'DesaEdit', {
                url: '/desa/edit/:id',
                controller: 'DesaEditCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/desa/desa-edit-c.html'
            })
            .state(AAAL_BASE_STATE + 'DesaView', {
                url: '/desa/view/:id',
                controller: 'DesaViewCtrl',
                controllerAs: 'vm',
                templateUrl: 'scripts/aaal/routes/desa/desa-view-c.html'
            })
            /* STATES-NEEDLE - DO NOT REMOVE THIS */;
    }
})();

