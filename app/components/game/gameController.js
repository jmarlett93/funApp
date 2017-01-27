'use strict';

angular.module('myOdysseyControllers')
.controller('gameController', ['$scope', function($scope, heroBuilderService, imgViewService, gameChoiceService){
   $scope.heroStats = heroBuilderService.hero;
   $scope.gameImages = imgViewService.imgArr;
   $scope.gamePlaces = gameChoiceService.viewOptionsArr;
}])