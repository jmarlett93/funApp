'use strict'

angular.module('myOdysseyServices', [])

.factory('heroBuilderService', function(){
    
    let heroBuilder = {};    
        
    let heroList = [
       {name: 'Odysseus',
        strength: 6,
        speed: 7,
        resolve: 10,
        power: 'wily' },
       
       {name: 'Achilles',
        strength: 10,
        speed: 8,
        power: 'fatalist' }
        ];
        
    return {
        hero : heroList[0]
    }
        })
