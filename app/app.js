     'use strict'

angular.module('myOdysseyControllers', [])

angular.module('myOdysseyServices', [])

angular.module('myOdysseyApp', [ 'ui.router', 'myOdysseyControllers', 'myOdysseyServices'])

.config(function($stateProvider){
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'components/home/home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'
            })
            
         .state('about', {
             url: '/about',
             templateUrl: 'components/about/about.html',
             controller: 'aboutController',
             controllerAs: 'aboutCtrl'
         })
         .state('game', {
             url:'/game',
             templateUrl: 'components/game/game.html',
             controller: 'gameController',
             controllerAs: 'gameCtrl'
         })
         .state('game.t1', {
             url: "/part-I",
             controller: 'gameController',
             parent: 'game',
             templateUrl: 'components/part-II/part1.html'
         })
         .state('game.t2', {
             url:"/part-II",
             controller: 'gameController',
             parent: 'game',
             templateUrl: 'components/part-II/part2.html'
         })
         .state('game.t3', {
             url:"/part-III",
             controller: 'gameController',
             parent: 'game',
             templateUrl: 'components/part-III/part3.html'
         })
   
    })
