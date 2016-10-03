'use strict'

angular.module('myOdysseyApp', [ 'ui.router', 'myOdysseyControllers', 'myOdysseyServices'])

.config(function($stateProvider){
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home/home.html',
            controller: "homeController",
            controllerAs: "homeCtrl",
            })
            
         .state('about', {
             url: '/about',
             templateUrl: 'about/about.html',
             controller: "aboutController",
             controllerAs: "aboutCtrl",
         })
     })



