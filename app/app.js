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
             url: "/part-I",
             controller: 'gameController',
             parent: 'game',
             templateUrl: 'views/game/part1.html'
         })
         .state('game.t2', {
             url:"/part-II",
             controller: 'gameController',
             parent: 'game',
             templateUrl: 'views/game/part2.html'
         })
         .state('game.t3', {
             url:"/part-III",
             controller: 'gameController',
             parent: 'game',
             templateUrl: 'views/game/part3.html'
         })
   
    })



