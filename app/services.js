'use strict'

angular.module('myOdysseyServices', [])

.factory('heroBuilderService', function(){
        
    let heroObject = {
        "health": 90,
        "resolve": 100,
        "arete": 80,
        "men": 200, }
        
    return {
        hero : heroObject
    }
})

.factory('rulesMessagesService', function(){
    
    let rules = [ "If you run out of health, you die." +
                   " Gain health by doing something restful or" +
                    " avoiding conflict for a round to recharge",
                    "Odysseus's will power to return" +
                    " home. Comforts, a goddess's" +
                    " spell or military diversions, might cause him" +
                    " to forsake the journey.",
                    "A distinctly Greek sense of heroic excellence." +
                    " Losing Arete will not kill you outright, but you will disastrously lose"+
                    " the respect of the Hellenic world.",
                    "Some brawn always helps. You don't need them but keep them around."
                  ];
     
     let responsiveElems = { 
         "showIntro": true, 
         "showHealth": false,
         "showResolve": false,
         "showArete": false, }
         
     function updateActiveElem(activeString){
        let keysArr = Object.keys(responsiveElems);
        
        keysArr.forEach(function(elem){
                
            
        })
     }
                     
   return {
       rules: rules,
       responsiveElems: responsiveElems,
       updateActiveElem: updateActiveElem }
})

