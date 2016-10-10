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
    let arrStrings = ["showIntro", "showHealth", "showResolve", "showArete", "showMen"];
     
    function updateActiveElem(activeString){
         
         let responsiveElems = { 
         "showIntro": true, 
         "showHealth": true,
         "showResolve": true,
         "showArete": true,
         "showMen": true }
         
        function updateElem(testString, arrayObj){
            let keysArr = Object.keys(arrayObj);
            let operatorString = '';
                
                keysArr.forEach(function(elem){
                    operatorString += elem;
                    if( elem === testString){

                        arrayObj[elem] = true;
                        operatorString += ' = ' + arrayObj[elem] + '; ';
                    }
                    else {
                        arrayObj[elem] = false;
                        operatorString += ' = ' + arrayObj[elem] + '; ';
                    }
                })
                return operatorString
        }
        
         let answer = updateElem(activeString, responsiveElems);

         return {
            answer }
     }
                     
   return {
       rules: rules,
       updateActiveElem: updateActiveElem,
       arrStrings: arrStrings }
})

