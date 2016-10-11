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

.factory('imgViewService', function(){
    let imgArr = [
        {
          name: "view-0",
          image: 'part-0.PNG' },
        {
         name: "view-1",
         image: 'view-1.PNG' },
        {
         name: "view-2",
         image: 'view-2.PNG'
        }];
        
        return {
            imgArr: imgArr
        }
})

.factory('gameChoiceService', function(){
    
    let viewOptionsArr = [
        
        {
            id: 0,
            options: { 
                0: "Stay on the Beach at Troy",
                1: "Set Sail for Home by the Shore",
                2: "Set Sail for Home offshore" }
        },
        {
            id: 1,
            options: {
                
            }
            
        },
        {
            
        }
        
    ];
    
    return {
        viewOptionsArr : viewOptionsArr
    }
    
})

