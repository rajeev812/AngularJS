/// <reference path="angular.js" />

var App = angular.module('MyApp', ['ngMaterial', 'ngMessages']);
App.controller('AppCtrl', function ($scope) {
    //$scope.title1 = 'Button';
    //$scope.title4 = 'Warn';
    //$scope.isDisabled = true;
    $scope.googleUrl = 'http://google.com';
});

App.controller('AppCtrlCal', function ($scope) {
    $scope.myDate = new Date();
    $scope.minDate = new Date($scope.myDate.getFullYear(), $scope.myDate.getMonth() - 2, $scope.myDate.getDate());
    $scope.maxDate = new Date($scope.myDate.getFullYear(),$scope.myDate.getMonth() + 2,$scope.myDate.getDate());
    $scope.onlyWeekendsPredicate = function (date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    }
});