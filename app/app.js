'use strict'

angular.module('myOdysseyApp', [ 'ui.router', 'myOdysseyControllers', 'myOdysseyServices'])

.config(function($stateProvider){
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home/home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'
            })
            
         .state('about', {
             url: '/about',
             templateUrl: 'views/about/about.html',
             controller: 'aboutController',
             controllerAs: 'aboutCtrl'
         })
         .state('game', {
             url:'/game',
             templateUrl: 'views/game/game.html',
             controller: 'gameController',
             controllerAs: 'gameCtrl'
         })
         .state('game.t1', {
             url: "/partI",
             controller: 'gameController',
             parent: 'game',
             templateUrl: 'views/game/partI.html'
         })
     })



