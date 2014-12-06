var angularMaterialExampleApp = angular.module('AngularMaterialExample', [ 'ngMaterial', 'AngularMaterialExampleControllers' ])
    .run(function ($rootScope, $mdSidenav) {
        $rootScope.toggleSideNav = function () {
            $mdSidenav('left').toggle();
        };
        $rootScope.closeSideNav = function () {
            $mdSidenav('left').close();
        }
    });