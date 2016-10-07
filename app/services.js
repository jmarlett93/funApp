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

.factory('rulesMessagesService', function(){
    
    let rules = [ "Health: This one is simple-  if you run out of health, you die." +
                   " Ways to gain health include doing something restful or simply" +
                    " avoiding conflict for a round to recharge",
                    "Resolve: Resolve represents your hero's will power to return" +
                    " home to his loving wife Penelope. Too much comfort, a goddess's" +
                    " spell or taking too many diversions, might cause your hero" +
                    " to give up the journey home. Win battles and travel homeward to increase resolve.",
                    "Arete: Arete represents a distinctly Greek sense of heroic qualities." +
                    " Running out of Arete will not kill you outright, but if you are too low, your men will"+
                    " abandon you, recruits will be hard to come by and the worst may happen should you arrive"+
                    " home to Penelope without enough Arete."
                  ];
    
            let responsiveElems = [ "showIntro", "showHealth", "showResolve", "showArete"];
    
    let showActiveElem = function(elem = ''){

        responsiveElems.forEach(function(arrayItem, elem){
            if( arrayItem === elem){
                elem = true;
            }
            else 
            elem = false;
            return elem;
        })
    }
                  
   return {
       rules: rules,
       responsiveElems: responsiveElems,
       showActiveElem: showActiveElem
   }
})

