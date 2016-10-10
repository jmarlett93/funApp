'use strict'

angular.module('myOdysseyControllers', [])

.controller('homeController', function($scope, rulesMessagesService){
    $scope.healthMessage = rulesMessagesService.rules[0];
    $scope.resolveMessage = rulesMessagesService.rules[1];
    $scope.areteMessage = rulesMessagesService.rules[2];
    $scope.menMessage = rulesMessagesService.rules[3];
    $scope.messageTitles = rulesMessagesService.arrStrings;
    $scope.updateMessages = function(param){
        rulesMessagesService.updateActiveElem(param);
    };

})

.controller('aboutController', function($scope){
    
})

.controller('gameController', function($scope, heroBuilderService){
   $scope.heroStats = heroBuilderService.hero;
   
})