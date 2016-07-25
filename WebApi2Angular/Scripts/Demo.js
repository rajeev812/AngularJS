/// <reference path="angular.js" />

var App = angular.module('MyApp', []);
App.controller('DisplayController', function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'api/Product/GetAllProducts'
    })
     .success(function (data) {
         $scope.AllProducts = data;
     });
});

angular.module('datepickerBasicUsage',['ngMaterial', 'ngMessages']).controller('AppCtrl', function ($scope) {
        $scope.myDate = new Date();
        $scope.minDate = new Date(
            $scope.myDate.getFullYear(),
            $scope.myDate.getMonth() - 2,
            $scope.myDate.getDate());
        $scope.maxDate = new Date(
            $scope.myDate.getFullYear(),
            $scope.myDate.getMonth() + 2,
            $scope.myDate.getDate());
        $scope.onlyWeekendsPredicate = function (date) {
            var day = date.getDay();
            return day === 0 || day === 6;
        }
    });