'use strict'

angular.module('myOdysseyControllers', [])

.controller('homeController', function($scope){
    
})

.controller('aboutController', function($scope){
    
})

.controller('gameController', function($scope, heroBuilderService){
   
   $scope.hero = heroBuilderService.hero.name;
    
})