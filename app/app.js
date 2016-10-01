'use strict'

angular.module('myOdysseyApp', [ 'ui.router', 'home'])


.config(['$stateProvider', '$urlRouterProvider',
    
    $stateProvider
        .state('app', {
            url: '/menu',
            abstract: true,
            templateUrl: 'menu/menu.html'
        })
        
        .state('menu.home', {
            url: '/home',
            views: {
                templateUrl:'home/home.html',
                controller: 'homeCtrl'
            }
        })
        })
            

.component('myOdysseyApp', {
    template: '<nav>\n' +
    '   <a ng-link="[\'home\']">Home</a>\n' +
    '   <a ng-link="[\'john\']">John</a>\n' +
    '   </nav>\n' +
    '   <ng-outlet></ng-outlet>\n',
   
})

