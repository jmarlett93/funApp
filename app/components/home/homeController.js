'use strict'

angular.module('myOdysseyControllers')

.controller('homeController', ['$scope', function($scope, rulesMessagesService){
    $scope.messages = rulesMessagesService.rulesArr;
    $scope.introMessage = rulesMessagesService.rulesArr[0].message;
    $scope.healthMessage = rulesMessagesService.rulesArr[1].message;
    $scope.resolveMessage = rulesMessagesService.rulesArr[2].message;
    $scope.areteMessage = rulesMessagesService.rulesArr[2].message;
    $scope.menMessage = rulesMessagesService.rulesArr[4].message;
    $scope.messageTitles = rulesMessagesService.arrStrings;
    $scope.updateMessages = function(param){
        rulesMessagesService.updateActiveElem(param);
    };
}])

