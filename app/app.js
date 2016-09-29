'use strict'

angular.module('myOdysseyApp', [ 'ngComponentRouter', 'home'])

.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})

.value('$routerRootComponent', 'myOdysseyApp')

.component('myOdysseyApp', {
    template: '<nav>\n' +
    '   <a ng-link="[\'home\']">Home</a>\n' +
    '   <a ng-link="[\'john\']">John</a>\n' +
    '   </nav>\n' +
    '   <ng-outlet></ng-outlet>\n',
    $routeConfig: [
        {path: '/home/...', name: 'home', component: 'home'},
    ]
});