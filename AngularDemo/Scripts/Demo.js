/// <reference path="angular.js" />
 var App = angular.module('MyApp', ['ngMaterial']);
App.controller('PoojaController', function ($scope) {
    $scope.Addition = function () {
        $scope.result = parseInt($scope.num1, 10) + parseInt($scope.num2, 10);
    }


});
App.controller('TwoWayBindingController', function ($scope) {
    // $scope.Message = "Hello !";
    var Student = {
        Name: "Rudra",
        Class: "2nd"
    }
    $scope.Students = Student;
});
App.controller('RepeatController', function ($scope) {
    var Emp = [
        { firstName: "Rajeev", LastName: "Ranjan", Address: "Bangalore" },
        { firstName: "rra", LastName: "se", Address: "dd" },
        { firstName: "sd", LastName: "Ranssjan", Address: "dd" },
        { firstName: "ee", LastName: "rr", Address: "ff" },
        { firstName: "sd", LastName: "sd", Address: "sd" },
        { firstName: "yy", LastName: "hh", Address: "jj" },
        { firstName: "vv", LastName: "ff", Address: "bb" },
        { firstName: "nn", LastName: "nn", Address: "nn" },
        { firstName: "ff", LastName: "nn", Address: "nn" }

    ];
    $scope.Emploee = Emp;
});

App.controller('CountryController', function ($scope) {

    var Country = [
        {
            Name: "India",
            City: [{ Name: "Delhi" }, { Name: "Gujrat" }, { Name: "Banglore" }, { Name: "Jaipur" }]
        },
        {
            Name: "USA",
            City: [{ Name: "New York" }, { Name: "Manhattan" }, { Name: "Philedhpia" }, { Name: "Washington DC" }]
        },
        {
            Name: "Australia",
            City: [{ Name: "Sydny" }, { Name: "Melbourne" }, { Name: "Brisbane" }, { Name: "Perth" }]
        }
    ];
    $scope.Countryies = Country;
});

App.controller('LikeDislikeController', function ($scope) {
    var LikeObject = [
        { subject: "PHP", Like: 0, Dislike: 0 },
        { subject: "C#", Like: 0, Dislike: 0 },
        { subject: "SQL", Like: 0, Dislike: 0 },
        { subject: "Jquery", Like: 0, Dislike: 0 },
        { subject: "Angular", Like: 0, Dislike: 0 },
        { subject: "React", Like: 0, Dislike: 0 },
    ];
    $scope.LikeObj = LikeObject;
    $scope.IncermentLikes = function (likeobj) {
        likeobj.Like++;
    };
    $scope.IncermentDisLikes = function (likeobj) {
        debugger;
        likeobj.Dislike++;
    };
});

App.controller('OrderByController', function ($scope) {
    var TblData = [
        { Id: 1, Name: "Rajeev", City: "Bangalore", Salry: 75000 },
        { Id: 2, Name: "Sarath", City: "New Delhi", Salry: 55000 },
        { Id: 3, Name: "Munesh", City: "Punjab", Salry: 45000 },
        { Id: 4, Name: "Venu", City: "Delhi", Salry: 65000 },
        { Id: 5, Name: "Ujjawal", City: "gandhinagar", Salry: 35000 },
        { Id: 6, Name: "pooja", City: "Farukhabad", Salry: 25000 },
        { Id: 7, Name: "Diwakar pandey", City: "catak", Salry: 15000 },
        { Id: 8, Name: "MeghDoot", City: "Ahmadabad", Salry: 25000 },
        { Id: 9, Name: "Bikesh Singh", City: "Ranchi", Salry: 25000 },
        { Id: 10, Name: "Animesh Sharma", City: "Pune", Salry: 50000 }
    ];

    $scope.Employees = TblData;
    $scope.SortColumn = "Name";
    $scope.reverseSort = false;

    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.SortColumn == column) ? !$scope.reverseSort : false;
        $scope.SortColumn = column;
    }

    $scope.getSortClass = function (column) {

        if ($scope.SortColumn == column) {
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
        }

        return '';
    }
});

App.controller('OrderByHeaderClickController', function ($scope) {
    var employees = [
                {
                    Id: 1, name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000
                },
                {
                    Id:2, name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: 68000
                },
                {
                    Id: 3, name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 57000
                },
                {
                    Id: 4, name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: 53000
                },
                {
                    Id: 5, name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: 60000
                }
    ];

    $scope.employees = employees;
    $scope.sortColumnNew = "name";
    $scope.reverseSort = false;

    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumnNew == column) ? !$scope.reverseSort : false;
        $scope.sortColumnNew = column;
    }

    $scope.getSortClass = function (column) {

        if ($scope.sortColumnNew == column) {
            return $scope.reverseSort? 'arrow-down': 'arrow-up';
        }

        return '';
    }
});